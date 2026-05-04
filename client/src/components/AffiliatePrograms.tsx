/**
 * AffiliatePrograms Section
 * Shows domestic & overseas high-commission alcohol affiliate programs
 * Mobile-first: card layout on small screens, table on md+
 */
type Lang = "en" | "ja";
interface Props {
  lang: Lang;
}
const OVERSEAS = [
  {
    name: "LIQUORexam",
    country: "🇺🇸 US",
    catEn: "Spirits / Wine / Beer",
    catJa: "スピリッツ・ワイン・ビール",
    comm: "25%",
    cookie: "30 days",
    noteEn: "Highest rate, education content",
    noteJa: "最高報酬率、教育コンテンツ付き",
  },
  {
    name: "The California Wine Club",
    country: "🇺🇸 US",
    catEn: "Wine Subscription",
    catJa: "ワインサブスク",
    comm: "15%",
    cookie: "90 days",
    noteEn: "Long cookie, boutique wineries",
    noteJa: "長期Cookie、小規模ワイナリー",
  },
  {
    name: "Flaviar",
    country: "🇺🇸 US",
    catEn: "Premium Spirits",
    catJa: "プレミアムスピリッツ",
    comm: "$40–$50/sale",
    cookie: "30–45 days",
    noteEn: "Rare whisky & rum, fixed high reward",
    noteJa: "希少ウイスキー・ラム、固定高額報酬",
  },
  {
    name: "El Cartel Tastings",
    country: "🇪🇺 EU",
    catEn: "Whisky Tasting",
    catJa: "ウイスキーテイスティング",
    comm: "15% or €15",
    cookie: "7–30 days",
    noteEn: "Avg order €80+, EU market",
    noteJa: "平均注文額€80以上、EU市場",
  },
  {
    name: "Cellars Wine Club",
    country: "🇺🇸 US",
    catEn: "Wine Subscription",
    catJa: "ワインサブスク",
    comm: "10%",
    cookie: "45 days",
    noteEn: "20+ years track record",
    noteJa: "20年以上の実績",
  },
  {
    name: "Vivino",
    country: "🌍 Global",
    catEn: "Wine",
    catJa: "ワイン全般",
    comm: "5–10%",
    cookie: "30 days",
    noteEn: "World's largest wine app",
    noteJa: "世界最大のワインアプリ",
  },
];
const DOMESTIC = [
  {
    nameEn: "Kanai Sake Brewery",
    nameJa: "金井酒造店",
    catEn: "Japanese Sake",
    catJa: "日本酒",
    comm: "10%+",
    asp: "ad-CREA",
    noteEn: "Proprietary program",
    noteJa: "独自プログラム",
  },
  {
    nameEn: "SUBRINA (Seabed Wine)",
    nameJa: "SUBRINA（海底熟成ワイン）",
    catEn: "Wine",
    catJa: "ワイン",
    comm: "—",
    asp: "もしもアフィリエイト",
    noteEn: "Rare seabed-aged wine",
    noteJa: "希少な海底熟成ワイン",
  },
  {
    nameEn: "Wine Nation",
    nameJa: "ワインネーション",
    catEn: "Wine",
    catJa: "ワイン",
    comm: "—",
    asp: "Felmat",
    noteEn: "5,000+ wines, invite-only ASP",
    noteJa: "5,000品以上、招待制ASP",
  },
  {
    nameEn: "Kyobashi Wine",
    nameJa: "京橋ワイン",
    catEn: "Wine",
    catJa: "ワイン",
    comm: "—",
    asp: "TGアフィリエイト",
    noteEn: "Popular on Rakuten",
    noteJa: "楽天市場でも人気",
  },
];

export default function AffiliatePrograms({ lang }: Props) {
  const isEn = lang === "en";
  const overseasHeaders = isEn
    ? ["Program", "Country", "Category", "Commission", "Cookie", "Highlight"]
    : ["プログラム", "国", "カテゴリ", "報酬率", "Cookie期間", "特徴"];
  const domesticHeaders = isEn
    ? ["Program", "Category", "Commission", "ASP", "Note"]
    : ["プログラム", "カテゴリ", "報酬率", "ASP", "備考"];

  return (
    <section className="py-16 md:py-24" style={{ backgroundColor: "rgba(13, 11, 7, 0.98)" }}>
      <div className="container px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-10 md:mb-16">
          <p
            className="text-xs tracking-[0.4em] uppercase mb-4"
            style={{ color: "#C9A84C", fontFamily: "'Cormorant Garamond', serif" }}
          >
            {isEn ? "For Affiliate Marketers" : "アフィリエイター向け"}
          </p>
          <h2
            className="text-2xl md:text-4xl font-bold mb-4"
            style={{
              fontFamily: isEn ? "'Playfair Display', serif" : "'Noto Serif JP', serif",
              color: "#F5F0E8",
            }}
          >
            {isEn
              ? "High-Commission Alcohol Affiliate Programs"
              : "高報酬アルコール系アフィリエイト一覧"}
          </h2>
          <p className="text-sm max-w-2xl mx-auto" style={{ color: "rgba(245, 240, 232, 0.6)" }}>
            {isEn
              ? "Curated list of the best-paying alcohol affiliate programs worldwide — from premium whisky to wine subscriptions."
              : "プレミアムウイスキーからワインサブスクまで、世界の高報酬アルコール系アフィリエイトを厳選。"}
          </p>
        </div>

        {/* Overseas Programs */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px flex-1" style={{ backgroundColor: "rgba(201, 168, 76, 0.2)" }} />
            <p className="text-xs tracking-[0.4em] uppercase px-4 whitespace-nowrap" style={{ color: "#C9A84C" }}>
              {isEn ? "🌍 Overseas Programs" : "🌍 海外の高報酬プログラム"}
            </p>
            <div className="h-px flex-1" style={{ backgroundColor: "rgba(201, 168, 76, 0.2)" }} />
          </div>

          {/* Mobile: Card layout */}
          <div className="md:hidden space-y-3">
            {OVERSEAS.map((row, i) => (
              <div
                key={i}
                className="rounded border p-4"
                style={{
                  borderColor: "rgba(201, 168, 76, 0.2)",
                  backgroundColor: i % 2 === 0 ? "rgba(26, 18, 8, 0.9)" : "rgba(20, 14, 6, 0.9)",
                }}
              >
                <div className="flex items-start justify-between mb-2">
                  <span
                    className="font-bold text-sm"
                    style={{ color: "#F5F0E8", fontFamily: "'Playfair Display', serif" }}
                  >
                    {row.name}
                  </span>
                  <span
                    className="text-xs font-bold ml-2 shrink-0"
                    style={{ color: "#C9A84C" }}
                  >
                    {row.comm}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2 text-xs mb-2">
                  <span style={{ color: "rgba(245, 240, 232, 0.7)" }}>{row.country}</span>
                  <span style={{ color: "rgba(245, 240, 232, 0.5)" }}>·</span>
                  <span style={{ color: "rgba(245, 240, 232, 0.7)" }}>{isEn ? row.catEn : row.catJa}</span>
                  <span style={{ color: "rgba(245, 240, 232, 0.5)" }}>·</span>
                  <span style={{ color: "rgba(245, 240, 232, 0.6)" }}>Cookie: {row.cookie}</span>
                </div>
                <p className="text-xs" style={{ color: "rgba(245, 240, 232, 0.6)" }}>
                  {isEn ? row.noteEn : row.noteJa}
                </p>
              </div>
            ))}
          </div>

          {/* Desktop: Table layout */}
          <div
            className="hidden md:block overflow-x-auto rounded-sm border"
            style={{ borderColor: "rgba(201, 168, 76, 0.2)" }}
          >
            <table className="w-full text-sm">
              <thead>
                <tr
                  style={{
                    backgroundColor: "rgba(181, 101, 29, 0.15)",
                    borderBottom: "1px solid rgba(201, 168, 76, 0.2)",
                  }}
                >
                  {overseasHeaders.map((h) => (
                    <th
                      key={h}
                      className="px-4 py-3 text-left text-xs tracking-wider"
                      style={{ color: "#C9A84C" }}
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {OVERSEAS.map((row, i) => (
                  <tr
                    key={i}
                    style={{
                      borderBottom: "1px solid rgba(201, 168, 76, 0.08)",
                      backgroundColor:
                        i % 2 === 0 ? "rgba(26, 18, 8, 0.9)" : "rgba(20, 14, 6, 0.9)",
                    }}
                  >
                    <td
                      className="px-4 py-3 font-bold"
                      style={{ color: "#F5F0E8", fontFamily: "'Playfair Display', serif" }}
                    >
                      {row.name}
                    </td>
                    <td className="px-4 py-3 text-xs" style={{ color: "rgba(245, 240, 232, 0.7)" }}>
                      {row.country}
                    </td>
                    <td className="px-4 py-3 text-xs" style={{ color: "rgba(245, 240, 232, 0.7)" }}>
                      {isEn ? row.catEn : row.catJa}
                    </td>
                    <td className="px-4 py-3 text-xs font-bold" style={{ color: "#C9A84C" }}>
                      {row.comm}
                    </td>
                    <td className="px-4 py-3 text-xs" style={{ color: "rgba(245, 240, 232, 0.6)" }}>
                      {row.cookie}
                    </td>
                    <td className="px-4 py-3 text-xs" style={{ color: "rgba(245, 240, 232, 0.6)" }}>
                      {isEn ? row.noteEn : row.noteJa}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Domestic Programs */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px flex-1" style={{ backgroundColor: "rgba(201, 168, 76, 0.2)" }} />
            <p className="text-xs tracking-[0.4em] uppercase px-4 whitespace-nowrap" style={{ color: "#C9A84C" }}>
              {isEn ? "🇯🇵 Japan Domestic Programs" : "🇯🇵 国内プログラム"}
            </p>
            <div className="h-px flex-1" style={{ backgroundColor: "rgba(201, 168, 76, 0.2)" }} />
          </div>

          {/* Mobile: Card layout */}
          <div className="md:hidden space-y-3">
            {DOMESTIC.map((row, i) => (
              <div
                key={i}
                className="rounded border p-4"
                style={{
                  borderColor: "rgba(201, 168, 76, 0.2)",
                  backgroundColor: i % 2 === 0 ? "rgba(26, 18, 8, 0.9)" : "rgba(20, 14, 6, 0.9)",
                }}
              >
                <div className="flex items-start justify-between mb-2">
                  <span className="font-bold text-sm" style={{ color: "#F5F0E8" }}>
                    {isEn ? row.nameEn : row.nameJa}
                  </span>
                  <span className="text-xs font-bold ml-2 shrink-0" style={{ color: "#C9A84C" }}>
                    {row.comm}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2 text-xs mb-2">
                  <span style={{ color: "rgba(245, 240, 232, 0.7)" }}>{isEn ? row.catEn : row.catJa}</span>
                  <span style={{ color: "rgba(245, 240, 232, 0.5)" }}>·</span>
                  <span style={{ color: "rgba(245, 240, 232, 0.6)" }}>ASP: {row.asp}</span>
                </div>
                <p className="text-xs" style={{ color: "rgba(245, 240, 232, 0.6)" }}>
                  {isEn ? row.noteEn : row.noteJa}
                </p>
              </div>
            ))}
          </div>

          {/* Desktop: Table layout */}
          <div
            className="hidden md:block overflow-x-auto rounded-sm border"
            style={{ borderColor: "rgba(201, 168, 76, 0.2)" }}
          >
            <table className="w-full text-sm">
              <thead>
                <tr
                  style={{
                    backgroundColor: "rgba(181, 101, 29, 0.15)",
                    borderBottom: "1px solid rgba(201, 168, 76, 0.2)",
                  }}
                >
                  {domesticHeaders.map((h) => (
                    <th
                      key={h}
                      className="px-4 py-3 text-left text-xs tracking-wider"
                      style={{ color: "#C9A84C" }}
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {DOMESTIC.map((row, i) => (
                  <tr
                    key={i}
                    style={{
                      borderBottom: "1px solid rgba(201, 168, 76, 0.08)",
                      backgroundColor:
                        i % 2 === 0 ? "rgba(26, 18, 8, 0.9)" : "rgba(20, 14, 6, 0.9)",
                    }}
                  >
                    <td className="px-4 py-3 font-bold" style={{ color: "#F5F0E8" }}>
                      {isEn ? row.nameEn : row.nameJa}
                    </td>
                    <td className="px-4 py-3 text-xs" style={{ color: "rgba(245, 240, 232, 0.7)" }}>
                      {isEn ? row.catEn : row.catJa}
                    </td>
                    <td className="px-4 py-3 text-xs font-bold" style={{ color: "#C9A84C" }}>
                      {row.comm}
                    </td>
                    <td className="px-4 py-3 text-xs" style={{ color: "rgba(245, 240, 232, 0.6)" }}>
                      {row.asp}
                    </td>
                    <td className="px-4 py-3 text-xs" style={{ color: "rgba(245, 240, 232, 0.6)" }}>
                      {isEn ? row.noteEn : row.noteJa}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Strategy Note */}
        <div
          className="rounded-sm border p-4 md:p-6"
          style={{
            borderColor: "rgba(201, 168, 76, 0.25)",
            backgroundColor: "rgba(181, 101, 29, 0.08)",
          }}
        >
          <p className="text-xs tracking-widest uppercase mb-2" style={{ color: "#C9A84C" }}>
            {isEn ? "💡 Strategy Insight" : "💡 収益最大化のヒント"}
          </p>
          <p className="text-sm leading-relaxed" style={{ color: "rgba(245, 240, 232, 0.8)" }}>
            {isEn
              ? "Amazon Japan alone rarely exceeds ¥600K/year in affiliate income. Combining Rakuten, overseas programs (Flaviar, LIQUORexam), and high-commission ASP deals is the realistic path to ¥1M+ annual revenue."
              : "Amazon単体での年収100万円超えは極めて稀です。楽天アフィリエイト＋海外プログラム（Flaviar・LIQUORexam）＋高単価ASP案件を組み合わせることが、年収100万円以上への現実的な道です。"}
          </p>
        </div>
      </div>
    </section>
  );
}
