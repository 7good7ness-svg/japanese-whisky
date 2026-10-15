// =============================================================================
// InternationalBuy.tsx
// Design: Dark luxury gold theme — matches the main site aesthetic
// Purpose: Show international purchase links for Chichibu / Yamazaki / Hakushu / Hibiki,
//          plus a running promo banner and limited-time TWE deals
//          across The Whisky Exchange, Master of Malt, and Flaviar.
//          The Whisky Exchange links go through Awin (Publisher 2884677 /
//          Merchant 400). Master of Malt and Flaviar are still placeholders.
// =============================================================================

import React, { useState } from "react";

// ---------------------------------------------------------------------------
// AFFILIATE LINK CONFIGURATION
// Replace the `href` values below with your affiliate-tagged URLs after
// registering with each program:
//   - The Whisky Exchange: https://www.thewhiskyexchange.com/affiliates (via AWIN)
//   - Master of Malt:      https://www.masterofmalt.com/affiliates (via Adtraction)
//   - Flaviar:             https://flaviar.com/pages/affiliates (up to 60% on memberships)
// ---------------------------------------------------------------------------

interface ProductLink {
  store: string;
  storeShort: string;
  flag: string;
  price: string;
  currency: string;
  href: string;
  note?: string;
  /** プロモ期間中だけ note の代わりに表示する文言 */
  promoNote?: string;
}

interface WhiskyProduct {
  name: string;
  nameJa: string;
  age: string;
  abv: string;
  description: string;
  descriptionJa: string;
  links: ProductLink[];
}

// ---------------------------------------------------------------------------
// Awin tracking link helper (Publisher 2884677 / Merchant 400 = The Whisky Exchange)
// ---------------------------------------------------------------------------
const twe = (path: string) =>
  `https://www.awin1.com/cread.php?awinmid=400&awinaffid=2884677&ued=${encodeURIComponent(
    `https://www.thewhiskyexchange.com${path}`
  )}`;

/** YYYY-MM-DD（ローカル日付）。endsAt との比較用。 */
function todayStr(): string {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

// ---------------------------------------------------------------------------
// Running promotion (update or remove when it ends)
// ---------------------------------------------------------------------------
const PROMO = {
  // 2026-10-09 Awin メール「Chichibu London Edition 2026」より。英国限定・数量限定のため
  // 売り切れ次第 active:false にする。endsAt を過ぎると自動で非表示。
  active: true,
  endsAt: "2026-12-31",
  icon: "🥃",
  store: "The Whisky Exchange",
  en: "New release: Chichibu London Edition 2026 — UK-exclusive Japanese single malt, £210. Limited stock.",
  ja: "新発売：秩父 ロンドンエディション 2026 — 英国限定のジャパニーズシングルモルト（£210）。数量限定。",
  href: twe("/p/88381/chichibu-london-edition-2026"),
};

// ---------------------------------------------------------------------------
// Limited-time deals at The Whisky Exchange (from Awin promo emails)
// endsAt を過ぎたものは自動で非表示。終了日が告知されていないものは仮の日付。
// ---------------------------------------------------------------------------
interface Deal {
  titleEn: string;
  titleJa: string;
  bodyEn: string;
  bodyJa: string;
  price: string;
  wasPrice?: string;
  badgeEn: string;
  badgeJa: string;
  href: string;
  endsAt: string;
}

const DEALS: Deal[] = [
  {
    // 2026-10-13 Awin メール。終了日の告知なし → 仮に 10/31
    titleEn: "Scapa 2003 19 Year Old (TWE Exclusive)",
    titleJa: "スキャパ 2003 19年（TWE限定）",
    bodyEn: "Cask-strength Orkney single malt from first-fill American oak. Apricot, marmalade and fudge.",
    bodyJa: "オークニー島のカスクストレングス。ファーストフィル米国産オーク樽で19年熟成。杏やマーマレード、ファッジの甘み。",
    price: "£120",
    wasPrice: "£185",
    badgeEn: "Save £65",
    badgeJa: "£65オフ",
    href: twe("/p/67780/scapa-2003-19-year-old-exclusive-to-the-whisky-exchange"),
    endsAt: "2026-10-31",
  },
  {
    // 2026-10-14 Awin メール。単一カスクのため早期完売の可能性大 → 仮に 11/30
    titleEn: "The Whisky Show 2026 Exclusives",
    titleJa: "Whisky Show 2026 限定ボトル",
    bodyEn: "Six single-cask bottlings released for The Whisky Show — Port Charlotte 20yo, Jura 20yo, Knob Creek and more. From £81.95.",
    bodyJa: "ウイスキーショー2026のために詰められたシングルカスク6本。ポートシャーロット20年、ジュラ20年、ノブクリークなど。£81.95〜。",
    price: "£81.95〜",
    badgeEn: "Single cask",
    badgeJa: "シングルカスク",
    href: twe("/d/1274/whisky-show-exclusives"),
    endsAt: "2026-11-30",
  },
];

/**
 * プロモを表示してよいかどうか。endsAt の当日までは表示し、翌日から自動で消える。
 * 終了時に手作業でコードを直す必要はない。
 */
function isPromoLive(): boolean {
  if (!PROMO.active) return false;
  return todayStr() <= PROMO.endsAt;
}

/** プロモ期間中だけ promoNote を優先して返す。 */
function noteOf(link: ProductLink): string | undefined {
  return isPromoLive() && link.promoNote ? link.promoNote : link.note;
}

const PRODUCTS: WhiskyProduct[] = [
  {
    // 2026-10-09 Awin メールで告知された新作。英国限定のため TWE のみ。
    name: "Chichibu London Edition 2026",
    nameJa: "秩父 ロンドンエディション 2026",
    age: "NAS",
    abv: "Single Malt",
    description: "UK-exclusive Chichibu vatted from 16 casks — ex-bourbon plus Californian and New Zealand wine casks. Honey, grapefruit peel and stone fruit.",
    descriptionJa: "ベンチャーウイスキー秩父の英国限定ボトル。16樽をヴァッティングし、バーボン樽にカリフォルニア・NZのワイン樽を合わせた9作目。蜂蜜、グレープフルーツの皮、桃や杏の香り。",
    links: [
      {
        store: "The Whisky Exchange",
        storeShort: "TWE",
        flag: "🇬🇧",
        price: "210",
        currency: "£",
        href: twe("/p/88381/chichibu-london-edition-2026"),
        note: "🆕 New release · UK exclusive · Limited stock · Global shipping available",
      },
    ],
  },
  {
    name: "Yamazaki 12 Year Old",
    nameJa: "山崎12年",
    age: "12 Years",
    abv: "43%",
    description: "Japan's most iconic single malt. Floral, fruity, and unmistakably Yamazaki.",
    descriptionJa: "日本を代表するシングルモルト。花のような香りとフルーティな味わい。",
    links: [
      {
        store: "The Whisky Exchange",
        storeShort: "TWE",
        flag: "🇬🇧",
        price: "138",
        currency: "£",
        // Awin トラッキングリンク（Publisher 2884677 / Merchant 400）2026-09-21 設定
        href: "https://www.awin1.com/cread.php?awinmid=400&awinaffid=2884677&ued=https%3A%2F%2Fwww.thewhiskyexchange.com%2Fp%2F2940%2Fyamazaki-12-year-old",
        note: "Free UK delivery over £100 · Global shipping available",
      },
      {
        store: "Master of Malt",
        storeShort: "MoM",
        flag: "🇬🇧",
        price: "139.95",
        currency: "£",
        // ⬇️ REPLACE with your Adtraction affiliate-tagged URL
        href: "https://www.masterofmalt.com/whiskies/yamazaki-japanese/yamazaki-12-year-old-whisky/",
        note: "Free delivery over £99 · 158 customer reviews",
      },
      {
        store: "Flaviar",
        storeShort: "Flaviar",
        flag: "🇺🇸",
        price: "177.99",
        currency: "$",
        // ⬇️ REPLACE with your Flaviar affiliate-tagged URL
        href: "https://flaviar.com/products/yamazaki-12-year-old-single-malt-whisky-750",
        note: "US market · Members-only access",
      },
    ],
  },
  {
    name: "Hakushu Distiller's Reserve",
    nameJa: "白州 ディスティラーズリザーブ",
    age: "NAS",
    abv: "43%",
    description: "Fresh and herbal with a distinctive smoky finish from Japan's mountain distillery.",
    descriptionJa: "南アルプスの蒸溜所から生まれる、フレッシュでハーバルな一本。",
    links: [
      {
        store: "The Whisky Exchange",
        storeShort: "TWE",
        flag: "🇬🇧",
        price: "69.75",
        currency: "£",
        // Awin トラッキングリンク（Publisher 2884677 / Merchant 400）2026-09-21 設定
        href: "https://www.awin1.com/cread.php?awinmid=400&awinaffid=2884677&ued=https%3A%2F%2Fwww.thewhiskyexchange.com%2Fp%2F23771%2Fhakushu-distillers-reserve",
        note: "Free UK delivery over £100",
      },
      {
        store: "Master of Malt",
        storeShort: "MoM",
        flag: "🇬🇧",
        price: "69.95",
        currency: "£",
        // ⬇️ REPLACE with your Adtraction affiliate-tagged URL
        href: "https://www.masterofmalt.com/whiskies/hakushu-japanese/hakushu-distillers-reserve-whisky/",
        note: "Free delivery over £99",
      },
    ],
  },
  {
    name: "Hibiki Harmony",
    nameJa: "響 ジャパニーズハーモニー",
    age: "NAS",
    abv: "43%",
    description: "Suntory's flagship blend. Honey, rose, and a long, elegant finish.",
    descriptionJa: "サントリーの最高傑作ブレンド。蜂蜜とバラの香り、長い余韻。",
    links: [
      {
        store: "The Whisky Exchange",
        storeShort: "TWE",
        flag: "🇬🇧",
        price: "78.95",
        currency: "£",
        // Awin トラッキングリンク（Publisher 2884677 / Merchant 400）2026-09-21 設定
        href: "https://www.awin1.com/cread.php?awinmid=400&awinaffid=2884677&ued=https%3A%2F%2Fwww.thewhiskyexchange.com%2Fp%2F29388%2Fhibiki-harmony",
        note: "Free UK delivery over £100",
      },
      {
        store: "Master of Malt",
        storeShort: "MoM",
        flag: "🇬🇧",
        price: "79.95",
        currency: "£",
        // ⬇️ REPLACE with your Adtraction affiliate-tagged URL
        href: "https://www.masterofmalt.com/whiskies/hibiki-japanese/hibiki-harmony-whisky/",
        note: "Free delivery over £99",
      },
      {
        store: "Flaviar",
        storeShort: "Flaviar",
        flag: "🇺🇸",
        price: "109.99",
        currency: "$",
        // ⬇️ REPLACE with your Flaviar affiliate-tagged URL
        href: "https://flaviar.com/collections/hibiki",
        note: "US market · Members-only access",
      },
    ],
  },
];


interface Props {
  lang: "en" | "ja";
}

export default function InternationalBuy({ lang }: Props) {
  const [activeProduct, setActiveProduct] = useState(0);
  const isJa = lang === "ja";

  const product = PRODUCTS[activeProduct];

  return (
    <section className="py-20 bg-[#0a0a0a] border-t border-amber-900/30">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section Header */}
        <div className="mb-12 text-center">
          <p className="text-amber-500 text-xs tracking-[0.3em] uppercase mb-3 font-medium">
            {isJa ? "海外購入ガイド" : "International Purchase Guide"}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-stone-100 mb-4">
            {isJa ? "世界中から購入できる" : "Buy from Anywhere in the World"}
          </h2>
          <p className="text-stone-400 max-w-2xl mx-auto text-sm leading-relaxed">
            {isJa
              ? "The Whisky Exchange・Master of Malt・Flaviarは日本国外への配送に対応しています。当サイトのリンクからご購入いただくと、当サイトに紹介料が入ります。"
              : "The Whisky Exchange, Master of Malt, and Flaviar all ship internationally. Some links below are affiliate links — we may earn a commission at no extra cost to you."}
          </p>
        </div>

        {/* Promotion Banner */}
        {isPromoLive() && (
          <a
            href={PROMO.href}
            target="_blank"
            rel="sponsored noopener noreferrer"
            className="block mb-10 rounded-lg border border-amber-600/60 bg-gradient-to-r from-amber-950/60 to-transparent px-6 py-4 hover:border-amber-500 transition-colors"
          >
            <div className="flex items-center gap-3 flex-wrap">
              <span className="text-xl">{PROMO.icon}</span>
              <span className="text-amber-300 text-sm font-semibold">
                {isJa ? PROMO.ja : PROMO.en}
              </span>
              <span className="ml-auto text-xs text-stone-400 border border-stone-700 rounded px-2 py-1">
                {isJa ? `${PROMO.endsAt} まで` : `Ends ${PROMO.endsAt}`}
              </span>
            </div>
          </a>
        )}

        {/* Product Tabs */}
        <div className="flex gap-2 justify-center mb-10 flex-wrap">
          {PRODUCTS.map((p, i) => (
            <button
              key={i}
              onClick={() => setActiveProduct(i)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 border ${
                activeProduct === i
                  ? "bg-amber-600 border-amber-600 text-white"
                  : "bg-transparent border-amber-800/50 text-stone-400 hover:border-amber-600 hover:text-amber-400"
              }`}
            >
              {isJa ? p.nameJa : p.name}
            </button>
          ))}
        </div>

        {/* Product Card */}
        <div className="bg-stone-900/60 border border-amber-900/30 rounded-2xl p-8 mb-10">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Product Info */}
            <div className="md:w-1/3">
              <h3 className="text-2xl font-bold text-amber-400 mb-1">
                {isJa ? product.nameJa : product.name}
              </h3>
              <div className="flex gap-3 mb-4">
                <span className="text-xs text-stone-500 bg-stone-800 px-2 py-1 rounded">{product.age}</span>
                <span className="text-xs text-stone-500 bg-stone-800 px-2 py-1 rounded">{product.abv} ABV</span>
              </div>
              <p className="text-stone-400 text-sm leading-relaxed">
                {isJa ? product.descriptionJa : product.description}
              </p>
            </div>

            {/* Purchase Links */}
            <div className="md:w-2/3 space-y-4">
              {product.links.map((link, i) => (
                <a
                  key={i}
                  href={link.href}
                  target="_blank"
                  rel="sponsored noopener noreferrer"
                  className="flex items-center justify-between p-4 bg-stone-800/60 border border-stone-700/50 rounded-xl hover:border-amber-600/50 hover:bg-stone-800 transition-all duration-200 group"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-2xl">{link.flag}</span>
                    <div>
                      <div className="font-semibold text-stone-200 group-hover:text-amber-400 transition-colors">
                        {link.store}
                      </div>
                      {noteOf(link) && (
                        <div className="text-xs text-stone-500 mt-0.5">{noteOf(link)}</div>
                      )}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-amber-400">
                      {link.currency}{link.price}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Limited-time Deals */}
        {DEALS.some((d) => todayStr() <= d.endsAt) && (
          <div className="mt-2">
            <p className="text-amber-500 text-xs tracking-[0.3em] uppercase mb-4 font-medium text-center">
              {isJa ? "期間限定・The Whisky Exchange のお得情報" : "Limited-time picks at The Whisky Exchange"}
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              {DEALS.filter((d) => todayStr() <= d.endsAt).map((d, i) => (
                <a
                  key={i}
                  href={d.href}
                  target="_blank"
                  rel="sponsored noopener noreferrer"
                  className="block p-5 bg-stone-900/60 border border-amber-900/30 rounded-xl hover:border-amber-600/60 transition-all duration-200 group"
                >
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h4 className="font-semibold text-stone-200 group-hover:text-amber-400 transition-colors">
                      {isJa ? d.titleJa : d.titleEn}
                    </h4>
                    <span className="shrink-0 text-[11px] font-semibold text-amber-300 border border-amber-700/60 rounded px-2 py-0.5">
                      {isJa ? d.badgeJa : d.badgeEn}
                    </span>
                  </div>
                  <p className="text-xs text-stone-500 leading-relaxed mb-3">{isJa ? d.bodyJa : d.bodyEn}</p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-lg font-bold text-amber-400">{d.price}</span>
                    {d.wasPrice && <span className="text-sm text-stone-500 line-through">{d.wasPrice}</span>}
                    <span className="ml-auto text-xs text-amber-500 group-hover:underline">
                      {isJa ? "TWEで見る →" : "View at TWE →"}
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
