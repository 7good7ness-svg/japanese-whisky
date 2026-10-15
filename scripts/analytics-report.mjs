#!/usr/bin/env node
// =============================================================================
// japanese-whisky.pages.dev の前日アクセスを GA4 から取得し、LINE に送る。
// GitHub Actions（.github/workflows/analytics-report.yml）から毎朝実行される。
// 依存パッケージなし（Node 20+ の fetch と crypto だけを使う）。
//
// 必要な環境変数（GitHub リポジトリの Secrets に登録）
//   GA4_PROPERTY_ID           GA4 のプロパティID（数字のみ。例 512345678）
//   GA4_SERVICE_ACCOUNT_JSON  Google Cloud サービスアカウントの鍵JSON（中身まるごと）
//   LINE_CHANNEL_ACCESS_TOKEN LINE Messaging API のチャネルアクセストークン（長期）
//   LINE_USER_ID              送り先（自分）のLINEユーザーID。LINE Developers のチャネル基本設定にある「あなたのユーザーID」（U で始まる）
//                             ※一斉送信（broadcast）は友だち全員に届くため使わない
//
// ローカル確認:  node scripts/analytics-report.mjs --dry-run   （LINEに送らず本文を表示）
// =============================================================================

import crypto from "node:crypto";

const DRY_RUN = process.argv.includes("--dry-run");
const SITE = "https://japanese-whisky.pages.dev";

const NETWORK_LABELS = {
  aff_awin_twe: "The Whisky Exchange",
  aff_rakuten: "楽天",
  aff_amazon: "Amazon",
  aff_master_of_malt: "Master of Malt",
  aff_flaviar: "Flaviar",
  aff_adtraction: "Adtraction",
  aff_impact: "impact",
};

function env(name, { optional = false } = {}) {
  const v = process.env[name];
  if (!v && !optional) throw new Error(`環境変数 ${name} が未設定です`);
  return v;
}

// --- Google 認証（サービスアカウント JWT → アクセストークン） ----------------
async function googleAccessToken(sa) {
  const now = Math.floor(Date.now() / 1000);
  const b64 = (o) => Buffer.from(JSON.stringify(o)).toString("base64url");
  const unsigned = `${b64({ alg: "RS256", typ: "JWT" })}.${b64({
    iss: sa.client_email,
    scope: "https://www.googleapis.com/auth/analytics.readonly",
    aud: "https://oauth2.googleapis.com/token",
    iat: now,
    exp: now + 3600,
  })}`;
  const sig = crypto.createSign("RSA-SHA256").update(unsigned).sign(sa.private_key, "base64url");
  const res = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
      assertion: `${unsigned}.${sig}`,
    }),
  });
  if (!res.ok) throw new Error(`Google 認証失敗: ${res.status} ${await res.text()}`);
  return (await res.json()).access_token;
}

async function runReport(token, propertyId, body) {
  const res = await fetch(
    `https://analyticsdata.googleapis.com/v1beta/properties/${propertyId}:runReport`,
    {
      method: "POST",
      headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
      body: JSON.stringify(body),
    }
  );
  if (!res.ok) throw new Error(`GA4 取得失敗: ${res.status} ${await res.text()}`);
  return res.json();
}

const num = (row, i) => Number(row?.metricValues?.[i]?.value ?? 0);

function diff(cur, prev) {
  if (!prev) return cur ? "（前日 0）" : "";
  const d = cur - prev;
  const pct = Math.round((d / prev) * 100);
  return `（前日比 ${d >= 0 ? "+" : ""}${d} / ${pct >= 0 ? "+" : ""}${pct}%）`;
}

// --- データ取得 ---------------------------------------------------------------
async function collect() {
  const propertyId = env("GA4_PROPERTY_ID");
  const sa = JSON.parse(env("GA4_SERVICE_ACCOUNT_JSON"));
  const token = await googleAccessToken(sa);
  const dateRanges = [
    { startDate: "yesterday", endDate: "yesterday", name: "y" },
    { startDate: "2daysAgo", endDate: "2daysAgo", name: "p" },
  ];

  const [totals, clicks, sources, pages, week] = await Promise.all([
    runReport(token, propertyId, {
      dateRanges,
      metrics: [{ name: "activeUsers" }, { name: "sessions" }, { name: "screenPageViews" }],
    }),
    runReport(token, propertyId, {
      dateRanges: [dateRanges[0]],
      dimensions: [{ name: "eventName" }],
      metrics: [{ name: "eventCount" }],
      dimensionFilter: {
        filter: { fieldName: "eventName", stringFilter: { matchType: "BEGINS_WITH", value: "aff_" } },
      },
      orderBys: [{ metric: { metricName: "eventCount" }, desc: true }],
    }),
    runReport(token, propertyId, {
      dateRanges: [dateRanges[0]],
      dimensions: [{ name: "sessionSourceMedium" }],
      metrics: [{ name: "sessions" }],
      orderBys: [{ metric: { metricName: "sessions" }, desc: true }],
      limit: 5,
    }),
    runReport(token, propertyId, {
      dateRanges: [dateRanges[0]],
      dimensions: [{ name: "country" }],
      metrics: [{ name: "activeUsers" }],
      orderBys: [{ metric: { metricName: "activeUsers" }, desc: true }],
      limit: 5,
    }),
    runReport(token, propertyId, {
      dateRanges: [{ startDate: "7daysAgo", endDate: "yesterday" }],
      metrics: [{ name: "activeUsers" }, { name: "screenPageViews" }],
    }),
  ]);

  // 日付範囲が2つあるとき、各行に dateRange 名（"y" / "p"）のディメンションが付く
  const byRange = (r, name) =>
    (r.rows || []).find((row) => row.dimensionValues?.some((d) => d.value === name));

  const y = byRange(totals, "y");
  const p = byRange(totals, "p");
  return {
    users: [num(y, 0), num(p, 0)],
    sessions: [num(y, 1), num(p, 1)],
    views: [num(y, 2), num(p, 2)],
    clicks: (clicks.rows || []).map((r) => [r.dimensionValues[0].value, num(r, 0)]),
    sources: (sources.rows || []).map((r) => [r.dimensionValues[0].value, num(r, 0)]),
    countries: (pages.rows || []).map((r) => [r.dimensionValues[0].value, num(r, 0)]),
    week: [num(week.rows?.[0], 0), num(week.rows?.[0], 1)],
  };
}

// --- メッセージ整形 -----------------------------------------------------------
export function formatMessage(d, date = new Date(Date.now() - 86400000)) {
  const jst = new Date(date.getTime() + 9 * 3600000);
  const ds = `${jst.getUTCMonth() + 1}/${jst.getUTCDate()}`;
  const totalClicks = d.clicks.reduce((s, [, n]) => s + n, 0);
  const lines = [
    `🥃 ウイスキーサイト日報（${ds}）`,
    "",
    `👤 訪問者 ${d.users[0]}人 ${diff(...d.users)}`,
    `📄 閲覧 ${d.views[0]}PV ${diff(...d.views)}`,
    `🔁 セッション ${d.sessions[0]} ${diff(...d.sessions)}`,
    "",
    `💰 アフィリエイトクリック 計${totalClicks}回`,
    ...(d.clicks.length
      ? d.clicks.map(([e, n]) => `・${NETWORK_LABELS[e] || e.replace(/^aff_/, "")} ${n}回`)
      : ["・なし"]),
    "",
    "🔎 流入元 TOP",
    ...(d.sources.length ? d.sources.map(([s, n]) => `・${s} ${n}`) : ["・データなし"]),
    "",
    "🌍 国別 TOP",
    ...(d.countries.length ? d.countries.map(([c, n]) => `・${c} ${n}人`) : ["・データなし"]),
    "",
    `📈 直近7日 訪問者${d.week[0]}人 / ${d.week[1]}PV`,
    SITE,
  ];
  return lines.join("\n");
}

// --- LINE 送信 ----------------------------------------------------------------
async function sendLine(text) {
  const token = env("LINE_CHANNEL_ACCESS_TOKEN");
  const to = env("LINE_USER_ID");
  const body = { to, messages: [{ type: "text", text: text.slice(0, 5000) }] };
  const res = await fetch("https://api.line.me/v2/bot/message/push", {
    method: "POST",
    headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  if (!res.ok) throw new Error(`LINE 送信失敗: ${res.status} ${await res.text()}`);
}

// --- main ---------------------------------------------------------------------
const isMain = import.meta.url === `file://${process.argv[1]}`;
if (isMain) {
  try {
    if (DRY_RUN && !process.env.GA4_PROPERTY_ID) {
      // 認証情報なしでも見た目を確認できるようにサンプルで表示
      console.log(
        formatMessage({
          users: [42, 35], sessions: [51, 40], views: [128, 97],
          clicks: [["aff_awin_twe", 5], ["aff_rakuten", 3], ["aff_amazon", 1]],
          sources: [["google / organic", 30], ["(direct) / (none)", 12], ["t.co / referral", 9]],
          countries: [["Japan", 20], ["United Kingdom", 11], ["United States", 8]],
          week: [260, 790],
        })
      );
    } else {
      const text = formatMessage(await collect());
      if (DRY_RUN) console.log(text);
      else {
        await sendLine(text);
        console.log("LINE に送信しました\n" + text);
      }
    }
  } catch (e) {
    console.error(e.message);
    // 失敗時もLINEに知らせる（トークンがあれば）
    if (!DRY_RUN && process.env.LINE_CHANNEL_ACCESS_TOKEN && process.env.LINE_USER_ID) {
      await sendLine(`⚠️ ウイスキーサイト日報の取得に失敗しました\n${e.message.slice(0, 300)}`).catch(() => {});
    }
    process.exit(1);
  }
}
