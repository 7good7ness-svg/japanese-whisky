// =============================================================================
// InternationalBuy.tsx
// Design: Dark luxury gold theme — matches the main site aesthetic
// Purpose: Show international purchase links for Yamazaki / Hakushu / Hibiki
//          across The Whisky Exchange, Master of Malt, and Flaviar.
//          All affiliate links are placeholders — replace href with your
//          affiliate-tagged URLs once you register with each program.
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
  commission: string;
  note?: string;
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

const PRODUCTS: WhiskyProduct[] = [
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
        // ⬇️ REPLACE with your AWIN affiliate-tagged URL
        href: "https://www.thewhiskyexchange.com/p/2940/yamazaki-12-year-old",
        commission: "~8% via AWIN",
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
        commission: "~5% via Adtraction",
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
        commission: "5% retail / up to 60% on memberships",
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
        // ⬇️ REPLACE with your AWIN affiliate-tagged URL
        href: "https://www.thewhiskyexchange.com/p/23771/hakushu-distillers-reserve",
        commission: "~8% via AWIN",
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
        commission: "~5% via Adtraction",
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
        // ⬇️ REPLACE with your AWIN affiliate-tagged URL
        href: "https://www.thewhiskyexchange.com/p/29388/hibiki-harmony",
        commission: "~8% via AWIN",
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
        commission: "~5% via Adtraction",
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
        commission: "5% retail / up to 60% on memberships",
        note: "US market · Members-only access",
      },
    ],
  },
];

// ---------------------------------------------------------------------------
// High-commission affiliate registration links (for the site owner)
// ---------------------------------------------------------------------------
const AFFILIATE_PROGRAMS = [
  {
    name: "The Whisky Exchange",
    url: "https://www.thewhiskyexchange.com/affiliates",
    commission: "~8%",
    network: "AWIN",
    flag: "🇬🇧",
  },
  {
    name: "Master of Malt",
    url: "https://www.masterofmalt.com/affiliates",
    commission: "~5%",
    network: "Adtraction",
    flag: "🇬🇧",
  },
  {
    name: "Flaviar",
    url: "https://flaviar.com/pages/affiliates",
    commission: "Up to 60% (memberships)",
    network: "Direct",
    flag: "🇺🇸",
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
              ? "The Whisky Exchange・Master of Malt・Flaviarは日本国外への配送に対応しています。アフィリエイトリンクは後から差し替え可能です。"
              : "The Whisky Exchange, Master of Malt, and Flaviar all ship internationally. Affiliate links below are ready to be replaced with your tagged URLs."}
          </p>
        </div>

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
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 bg-stone-800/60 border border-stone-700/50 rounded-xl hover:border-amber-600/50 hover:bg-stone-800 transition-all duration-200 group"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-2xl">{link.flag}</span>
                    <div>
                      <div className="font-semibold text-stone-200 group-hover:text-amber-400 transition-colors">
                        {link.store}
                      </div>
                      {link.note && (
                        <div className="text-xs text-stone-500 mt-0.5">{link.note}</div>
                      )}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-amber-400">
                      {link.currency}{link.price}
                    </div>
                    <div className="text-xs text-stone-500">
                      {isJa ? "アフィリエイト登録後に差替" : "Replace with affiliate link"}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Affiliate Registration Banner */}
        <div className="bg-amber-950/30 border border-amber-800/40 rounded-xl p-6">
          <h4 className="text-amber-400 font-semibold mb-4 text-center">
            {isJa
              ? "🔗 アフィリエイト登録リンク（サイトオーナー向け）"
              : "🔗 Affiliate Program Registration Links (For Site Owner)"}
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {AFFILIATE_PROGRAMS.map((prog, i) => (
              <a
                key={i}
                href={prog.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center p-4 bg-stone-900/60 border border-stone-700/50 rounded-lg hover:border-amber-600/50 transition-all text-center group"
              >
                <span className="text-2xl mb-2">{prog.flag}</span>
                <div className="font-medium text-stone-300 group-hover:text-amber-400 transition-colors text-sm">
                  {prog.name}
                </div>
                <div className="text-amber-500 font-bold text-sm mt-1">{prog.commission}</div>
                <div className="text-xs text-stone-500 mt-0.5">{prog.network}</div>
              </a>
            ))}
          </div>
          <p className="text-center text-xs text-stone-500 mt-4">
            {isJa
              ? "各プログラムに登録後、上記の商品リンクをアフィリエイトタグ付きURLに差し替えてください。"
              : "After registering with each program, replace the product links above with your affiliate-tagged URLs."}
          </p>
        </div>

      </div>
    </section>
  );
}
