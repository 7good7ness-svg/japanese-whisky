/**
 * Design: "Silence of the Distillery" — Japanese Minimalism
 * Dark amber theme, Playfair Display + Noto Serif JP
 * English-first SEO landing page with Japanese toggle
 *
 */

import { useEffect, useRef, useState } from "react";
import AffiliatePrograms from "@/components/AffiliatePrograms";
import InternationalBuy from "@/components/InternationalBuy";

// ===== Language Type =====
type Lang = "en" | "ja";

// ===== Affiliate Link Configuration =====
const AFFILIATE_LINKS = {
  rakuten: {
    yamazaki: "https://hb.afl.rakuten.co.jp/ichiba/53717089.d5ab6064.5371708b.7357bb63/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fkawachi%2F3939220001481%2F&link_type=picttext&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0dGV4dCIsInNpemUiOiIyNDB4MjQwIiwibmFtIjoxLCJuYW1wIjoicmlnaHQiLCJjb20iOjEsImNvbXAiOiJkb3duIiwicHJpY2UiOjEsImJvciI6MSwiY29sIjoxLCJiYnRuIjoxLCJwcm9kIjowLCJhbXAiOmZhbHNlfQ%3D%3D",
    hakushu: "https://hb.afl.rakuten.co.jp/ichiba/53717443.92c5e772.53717444.5a6c8d6d/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fsoukaidrink%2F4901777453067%2F&link_type=picttext&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0dGV4dCIsInNpemUiOiIyNDB4MjQwIiwibmFtIjoxLCJuYW1wIjoicmlnaHQiLCJjb20iOjEsImNvbXAiOiJkb3duIiwicHJpY2UiOjEsImJvciI6MSwiY29sIjoxLCJiYnRuIjoxLCJwcm9kIjowLCJhbXAiOmZhbHNlfQ%3D%3D",
    hibiki: "https://hb.afl.rakuten.co.jp/ichiba/537175f7.0582b266.537175f8.65bc81cc/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fkomoriliquor%2F16-3%2F&link_type=picttext&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0dGV4dCIsInNpemUiOiIyNDB4MjQwIiwibmFtIjoxLCJuYW1wIjoicmlnaHQiLCJjb20iOjEsImNvbXAiOiJkb3duIiwicHJpY2UiOjEsImJvciI6MSwiY29sIjoxLCJiYnRuIjoxLCJwcm9kIjowLCJhbXAiOmZhbHNlfQ%3D%3D",
  },
  amazon: {
    yamazaki: "https://www.amazon.co.jp/s?k=%E5%B1%B1%E5%B4%8E+%E3%82%A6%E3%82%A4%E3%82%B9%E3%82%AD%E3%83%BC&i=grocery&tag=httpblogbcoco-22",
    hakushu: "https://www.amazon.co.jp/s?k=%E7%99%BD%E5%B7%9E+%E3%82%A6%E3%82%A4%E3%82%B9%E3%82%AD%E3%83%BC&i=grocery&tag=httpblogbcoco-22",
    hibiki: "https://www.amazon.co.jp/s?k=%E9%9F%BF+%E3%82%A6%E3%82%A4%E3%82%B9%E3%82%AD%E3%83%BC&i=grocery&tag=httpblogbcoco-22",
  },
};

// ===== Image Assets =====
const IMAGES = {
  hero: "https://d2xsxph8kpxj0f.cloudfront.net/310519663358992892/Hs8A37ZaFdA5kN949okxHS/hero_whisky_dark-guqrX6rYFSLkM2WnwWFnV6.webp",
  barrels: "https://d2xsxph8kpxj0f.cloudfront.net/310519663358992892/Hs8A37ZaFdA5kN949okxHS/yamazaki_scene-2zUZ9hyeyuSNKmRJQewUzm.webp",
  collection: "https://d2xsxph8kpxj0f.cloudfront.net/310519663358992892/Hs8A37ZaFdA5kN949okxHS/whisky_collection-k49MynApET6tXrb99R4Pde.webp",
  glass: "https://d2xsxph8kpxj0f.cloudfront.net/310519663358992892/Hs8A37ZaFdA5kN949okxHS/whisky_glass_amber-2jCHE3VJnWvJ5RcCVKeg8w.webp",
  distillery: "https://d2xsxph8kpxj0f.cloudfront.net/310519663358992892/Hs8A37ZaFdA5kN949okxHS/distillery_mountain-hFVXDQDci2RS3UCZtnXgod.webp",
};

// ===== Scroll Reveal Hook =====
function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setIsVisible(true); observer.disconnect(); } },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return { ref, isVisible };
}

// ===== i18n Translations =====
const T = {
  en: {
    nav: {
      collection: "Collection",
      guide: "Buying Guide",
      gift: "Gift Guide",
      faq: "FAQ",
      langSwitch: "日本語",
    },
    hero: {
      eyebrow: "The Definitive Guide · Trusted by 10,000+ Whisky Lovers",
      title: "Japanese Whisky",
      subtitle: "Yamazaki · Hakushu · Hibiki",
      desc: "Discover Japan's most celebrated whiskies — crafted in silence, perfected over decades. Tasting notes, price comparisons, and the best places to buy online in Japan.",
      cta1: "Explore Collection",
      cta2: "Buying Guide",
      badge: "🏆 World Whisky of the Year · Multiple Award Winner",
    },
    stats: [
      { num: "100+", label: "Years of Craft", sub: "Since 1923" },
      { num: "3", label: "World-Class Distilleries", sub: "Yamazaki · Hakushu · Chita" },
      { num: "50+", label: "International Awards", sub: "WWA · ISC · IWSC" },
      { num: "4.1M+", label: "Expats in Japan", sub: "Growing market 2025" },
    ],
    forwardingBanner: {
      title: "Living Outside Japan?",
      desc: "Use a forwarding service to receive your order internationally.",
      services: [
        { name: "Tenso", url: "https://www.tenso.com/en", desc: "Official Rakuten partner" },
        { name: "Buyee", url: "https://buyee.jp/en", desc: "Easy international shipping" },
        { name: "ZenMarket", url: "https://zenmarket.jp/en/", desc: "No membership fee" },
      ],
    },
    collection: {
      eyebrow: "The Collection",
      title: "Three Iconic Expressions",
      desc: "Each whisky tells a story of its terroir — the forest, the valley, and the harmony of Japan's seasons.",
    },
    products: [
      {
        id: "yamazaki",
        name: "Yamazaki",
        nameJa: "山崎",
        subtitle: "Single Malt Whisky",
        tagline: "Japan's oldest distillery. The world's finest single malt.",
        description: "Born in 1923 at Japan's first malt whisky distillery, Yamazaki is the benchmark of Japanese single malt. Aged in a blend of Mizunara oak, sherry, and bourbon casks, it delivers extraordinary complexity — floral, fruity, and deeply spiced. Multiple World Whisky of the Year winner.",
        flavor: "Rich dried fruit, subtle smoke, sandalwood, long warming finish",
        age: ["NV", "12 Year", "18 Year", "25 Year"],
        priceRange: "¥5,500 – ¥300,000+",
        rating: 4.9,
        awards: ["WWA 2003 Best of the Best", "ISC 2012 Gold Medal"],
        color: "#B5651D",
        rakutenLink: AFFILIATE_LINKS.rakuten.yamazaki,
        amazonLink: AFFILIATE_LINKS.amazon.yamazaki,
        flavorLabel: "Tasting Notes",
        lineupLabel: "Expressions",
        awardsLabel: "Awards",
        priceLabel: "Price Range",
        rakutenBtn: "Buy on Rakuten",
        amazonBtn: "Buy on Amazon",
        ratingLabel: "World Rating",
      },
      {
        id: "hakushu",
        name: "Hakushu",
        nameJa: "白州",
        subtitle: "Single Malt Whisky",
        tagline: "The forest distillery. Fresh, green, and quietly smoky.",
        description: "Nestled at 700m altitude in the Japanese Alps, Hakushu is known as the 'Forest Distillery.' Fed by pristine mountain spring water, it produces a uniquely fresh and herbaceous single malt with a delicate peaty character — unlike any other whisky in the world.",
        flavor: "Fresh green apple, herbs, gentle smoke, crisp finish",
        age: ["NV", "12 Year", "18 Year", "25 Year"],
        priceRange: "¥5,500 – ¥250,000+",
        rating: 4.8,
        awards: ["WWA 2013 Best Japanese Whisky", "ISC 2014 Gold Medal"],
        color: "#4A7C59",
        rakutenLink: AFFILIATE_LINKS.rakuten.hakushu,
        amazonLink: AFFILIATE_LINKS.amazon.hakushu,
        flavorLabel: "Tasting Notes",
        lineupLabel: "Expressions",
        awardsLabel: "Awards",
        priceLabel: "Price Range",
        rakutenBtn: "Buy on Rakuten",
        amazonBtn: "Buy on Amazon",
        ratingLabel: "World Rating",
      },
      {
        id: "hibiki",
        name: "Hibiki",
        nameJa: "響",
        subtitle: "Japanese Blended Whisky",
        tagline: "A harmony of Japan's seasons in every sip.",
        description: "Suntory's masterpiece blended whisky, Hibiki harmonizes malt whiskies from Yamazaki and Hakushu with grain whisky from Chita. Its iconic 24-faceted bottle represents Japan's 24 seasons. Hibiki is the pinnacle of the blender's art — elegant, complex, and endlessly refined.",
        flavor: "Rose, honey, orange peel, gentle oak, silky long finish",
        age: ["Japanese Harmony", "17 Year", "21 Year", "30 Year"],
        priceRange: "¥5,500 – ¥500,000+",
        rating: 4.9,
        awards: ["WWA 2014 World's Best Blended", "ISC 2015 Best in Class"],
        color: "#C9A84C",
        rakutenLink: AFFILIATE_LINKS.rakuten.hibiki,
        amazonLink: AFFILIATE_LINKS.amazon.hibiki,
        flavorLabel: "Tasting Notes",
        lineupLabel: "Expressions",
        awardsLabel: "Awards",
        priceLabel: "Price Range",
        rakutenBtn: "Buy on Rakuten",
        amazonBtn: "Buy on Amazon",
        ratingLabel: "World Rating",
      },
    ],
    story: {
      eyebrow: "The Story",
      title: "Time, Craft,\nand Patience",
      p1: "Japanese whisky began in 1923 when Shinjiro Torii built Japan's first malt whisky distillery in Yamazaki. The country's four distinct seasons and pure mountain water create a unique maturation environment found nowhere else on earth.",
      p2: "The use of Mizunara (Japanese oak) casks is a technique unique to Japan. It imparts notes of vanilla, sandalwood, and a subtle incense-like quality — the 'Japanese oak' character that captivates whisky lovers worldwide.",
      casks: [
        { label: "Mizunara Oak", desc: "Uniquely Japanese" },
        { label: "Sherry Cask", desc: "Rich & fruity" },
        { label: "Bourbon Cask", desc: "Vanilla sweetness" },
      ],
      tastingNote: '"Amber art of\ncomplexity and depth"',
    },
    urgency: {
      title: "⚠️ Limited Stock Alert",
      desc: "Yamazaki 12 Year and Hakushu 12 Year are frequently sold out. Check availability now before prices rise further.",
      btn: "Check Current Stock →",
    },
    guide: {
      eyebrow: "Buying Guide",
      title: "Where to Buy",
      desc: "Find the best prices on Yamazaki, Hakushu, and Hibiki across Japan's top platforms.",
      rakutenTitle: "Rakuten Ichiba",
      rakutenComm: "Rakuten Points · Gift wrapping",
      rakutenFeatures: [
        "Earn & spend Rakuten Points",
        "Big discounts during Super Sale",
        "Gift wrapping & noshi available",
        "Thousands of verified reviews",
        "Extra points with Rakuten Card",
      ],
      rakutenBtn: "Shop on Rakuten →",
      amazonTitle: "Amazon Japan",
      amazonComm: "Amazon Prime · Fast delivery",
      amazonFeatures: [
        "Prime next-day to 2-day delivery",
        "Subscribe & Save for repeat orders",
        "Clear returns & exchange policy",
        "Alexa reorder integration",
      ],
      amazonBtn: "Shop on Amazon →",
      tableTitle: "Reference Price Guide (2026)",
      tableNote: "* Market prices fluctuate with demand. Check links for current pricing.",
      tableHeaders: ["Expression", "Type", "MSRP", "Market Price", "Availability"],
      tableRows: [
        { name: "Yamazaki NV", type: "Single Malt", price: "¥5,500", market: "¥6,000–¥12,000", difficulty: "★★★☆☆" },
        { name: "Yamazaki 12 Year", type: "Single Malt", price: "¥12,100", market: "¥30,000–¥80,000", difficulty: "★★★★☆" },
        { name: "Yamazaki 18 Year", type: "Single Malt", price: "¥38,500", market: "¥150,000–¥300,000", difficulty: "★★★★★" },
        { name: "Hakushu NV", type: "Single Malt", price: "¥5,500", market: "¥6,000–¥12,000", difficulty: "★★★☆☆" },
        { name: "Hakushu 12 Year", type: "Single Malt", price: "¥12,100", market: "¥25,000–¥70,000", difficulty: "★★★★☆" },
        { name: "Hibiki Harmony", type: "Blended", price: "¥5,500", market: "¥7,000–¥15,000", difficulty: "★★★☆☆" },
        { name: "Hibiki 17 Year", type: "Blended", price: "Discontinued", market: "¥80,000–¥200,000", difficulty: "★★★★★" },
        { name: "Hibiki 21 Year", type: "Blended", price: "¥55,000", market: "¥150,000–¥400,000", difficulty: "★★★★★" },
      ],
    },
    distilleries: {
      eyebrow: "The Distilleries",
      title: "Three Distilleries,\nThree Worlds",
      items: [
        { name: "Yamazaki Distillery", location: "Shimamoto, Osaka Prefecture", year: "Est. 1923", desc: "Japan's oldest malt whisky distillery, located at the confluence of three rivers. The misty, humid environment creates ideal conditions for slow, complex maturation." },
        { name: "Hakushu Distillery", location: "Hokuto, Yamanashi Prefecture", year: "Est. 1973", desc: "The 'Forest Distillery' at 700m altitude in the Southern Alps. Pristine mountain water and cool forest air produce Hakushu's signature fresh, green character." },
        { name: "Chita Distillery", location: "Chita, Aichi Prefecture", year: "Est. 1972", desc: "A dedicated grain whisky distillery. Chita's light, sweet grain spirit is the essential third voice in Hibiki's harmonious blend." },
      ],
    },
    gift: {
      eyebrow: "Gift Guide",
      title: "The Perfect Gift",
      desc: "Premium Japanese whisky for Father's Day, birthdays, weddings, and year-end gifts.",
      tiers: [
        { budget: "Under ¥10,000", title: "Entry Gift", desc: "Perfect for beginners or everyday gifting", items: ["Yamazaki NV (¥5,500)", "Hakushu NV (¥5,500)", "Hibiki Japanese Harmony (¥5,500)"], link: AFFILIATE_LINKS.rakuten.yamazaki, btn: "Shop on Rakuten →" },
        { budget: "¥10,000–¥50,000", title: "Premium Gift", desc: "For special occasions and distinguished recipients", items: ["Yamazaki 12 Year (market ¥30,000+)", "Hakushu 12 Year (market ¥25,000+)", "Hibiki 21 Year (¥55,000)"], link: AFFILIATE_LINKS.rakuten.yamazaki, btn: "Shop on Rakuten →" },
        { budget: "¥50,000+", title: "Luxury Gift", desc: "The ultimate expression of gratitude", items: ["Yamazaki 18 Year (market ¥150,000+)", "Hibiki 21 Year Limited Edition", "Yamazaki 25 Year (ultra-rare)"], link: AFFILIATE_LINKS.rakuten.yamazaki, btn: "Shop on Rakuten →" },
      ],
      budgetLabel: "Budget",
    },
    faq: {
      eyebrow: "FAQ",
      title: "Frequently Asked Questions",
      items: [
        { q: "What makes Japanese whisky different from Scotch?", a: "Japanese whisky is known for its meticulous craftsmanship, lighter and more delicate flavor profiles, and the use of Mizunara (Japanese oak) casks. Unlike Scotch, Japanese distilleries typically produce multiple styles in-house rather than trading casks between producers." },
        { q: "Why is Japanese whisky so expensive?", a: "Premium Japanese whiskies like Yamazaki 12 Year and Hakushu 12 Year are in extremely limited supply due to high global demand and long maturation periods. Production cannot be rapidly scaled, creating significant price premiums on the secondary market." },
        { q: "Where can I buy Yamazaki whisky online?", a: "Yamazaki can be purchased on Rakuten Ichiba and Amazon Japan. Due to high demand, availability fluctuates. We recommend checking both platforms regularly for current stock and pricing." },
        { q: "Which Japanese whisky is best for beginners?", a: "Hibiki Japanese Harmony is widely recommended for beginners due to its approachable, well-balanced flavor profile. It offers a smooth introduction to Japanese blended whisky at a relatively accessible price point." },
        { q: "Is Japanese whisky a good investment?", a: "Rare expressions like Yamazaki 18 Year and Hibiki 21 Year have shown strong appreciation over time. However, whisky investment carries risks and is best approached as a secondary benefit to genuine appreciation of the spirit." },
        { q: "What is Mizunara oak?", a: "Mizunara is a rare Japanese oak (Quercus mongolica) used for whisky casks. It imparts unique flavors of sandalwood, incense, and coconut that are impossible to replicate with European or American oak. Mizunara casks are expensive and difficult to work with, making them a luxury in whisky production." },
      ],
    },
    cta: {
      eyebrow: "Find Your Bottle",
      title: "Discover Your\nPerfect Dram",
      desc: "Check current availability and prices for Yamazaki, Hakushu, and Hibiki on Japan's top platforms.",
      btn1: "Shop on Rakuten",
      btn2: "Shop on Amazon",
    },
    social: {
      title: "Share This Guide",
      desc: "Help fellow whisky lovers discover Japan's finest.",
      xBtn: "Share on X (Twitter)",
      fbBtn: "Share on Facebook",
      copyBtn: "Copy Link",
      copiedBtn: "Copied!",
    },
    reviews: [
      { name: "James T.", country: "🇺🇸 USA", text: "Finally found Yamazaki 12 Year in stock! This guide saved me hours of searching.", rating: 5 },
      { name: "Sophie M.", country: "🇬🇧 UK", text: "Incredibly detailed tasting notes. Ordered Hibiki Harmony and it arrived perfectly.", rating: 5 },
      { name: "Kenji W.", country: "🇯🇵 Japan", text: "価格比較が非常に参考になりました。山崎18年を楽天で購入できました。", rating: 5 },
      { name: "Marco R.", country: "🇩🇪 Germany", text: "Best resource for Japanese whisky. Used Tenso forwarding service — worked flawlessly.", rating: 5 },
    ],
    footer: {
      siteName: "Japanese Whisky Guide",
      about: "Your definitive guide to premium Japanese whisky — Yamazaki, Hakushu, and Hibiki. Tasting notes, price comparisons, and buying guides for Japan residents and international whisky lovers.",
      ageWarning: "⚠️ This site is intended for adults aged 20 and over. Underage drinking is prohibited by law.",
      colBrands: "Brands",
      colBuy: "Buy Now",
      links: [
        { label: "Yamazaki Whisky", href: "#yamazaki" },
        { label: "Hakushu Whisky", href: "#hakushu" },
        { label: "Hibiki Whisky", href: "#hibiki" },
      ],
      buyLinks: [
        { label: "Shop on Rakuten", href: AFFILIATE_LINKS.rakuten.yamazaki },
        { label: "Shop on Amazon", href: AFFILIATE_LINKS.amazon.yamazaki },
      ],
      copyright: "© 2026 Japanese Whisky Guide. All rights reserved.",
      disclosure: "This site participates in affiliate programs (Rakuten Affiliate & Amazon Associates). We may earn a commission when you purchase through our links.",
    },
  },
  ja: {
    nav: {
      collection: "コレクション",
      guide: "購入ガイド",
      gift: "ギフトガイド",
      faq: "よくある質問",
      langSwitch: "English",
    },
    hero: {
      eyebrow: "完全ガイド · 10,000人以上の愛好家に信頼されています",
      title: "ジャパニーズウイスキー",
      subtitle: "山崎 · 白州 · 響",
      desc: "日本が誤るプレミアムウイスキーを深く知る。テイスティングノート、価格比較、購入方法を徹底解説。",
      cta1: "コレクションを見る",
      cta2: "購入ガイドへ",
      badge: "🏆 ワールドウイスキー・オブ・ザ・イヤー · 多数の国際賞受賞",
    },
    stats: [
      { num: "100年+", label: "の歴史", sub: "1923年創業" },
      { num: "3", label: "世界級の譒溜所", sub: "山崎・白州・知多" },
      { num: "50+", label: "国際受賞歴", sub: "WWA・ISC・IWSC" },
      { num: "412万人+", label: "在留外国人", sub: "2025年過去最高更新" },
    ],
    collection: {
      eyebrow: "コレクション",
      title: "三大銘柄 完全解説",
      desc: "山崎・白州・響それぞれの個性、テイスティングノート、購入方法を詳しく解説します。",
    },
    products: [
      {
        id: "yamazaki",
        name: "山崎",
        nameJa: "THE YAMAZAKI",
        subtitle: "シングルモルトウイスキー",
        tagline: "日本最古の蒸溜所が生む、至高の一滴",
        description: "1923年創業、日本最古の蒸溜所「山崎蒸溜所」で生まれたシングルモルト。ミズナラ樽・シェリー樽・バーボン樽の複数の原酒を巧みにブレンドし、複雑で深みのある味わいを実現。世界最高賞を幾度も受賞した日本が誇る銘品。",
        flavor: "甘く豊かな果実香、ほのかなスモーク、長く続く余韻",
        age: ["NV", "12年", "18年", "25年"],
        priceRange: "¥5,500〜¥300,000+",
        rating: 4.9,
        awards: ["WWA 2003 ベスト・オブ・ザ・ベスト", "ISC 2012 金賞"],
        color: "#B5651D",
        rakutenLink: AFFILIATE_LINKS.rakuten.yamazaki,
        amazonLink: AFFILIATE_LINKS.amazon.yamazaki,
        flavorLabel: "テイスティングノート",
        lineupLabel: "ラインナップ",
        awardsLabel: "受賞歴",
        priceLabel: "価格帯",
        rakutenBtn: "楽天市場で購入",
        amazonBtn: "Amazonで購入",
        ratingLabel: "世界評価",
      },
      {
        id: "hakushu",
        name: "白州",
        nameJa: "THE HAKUSHU",
        subtitle: "シングルモルトウイスキー",
        tagline: "南アルプスの森が育む、清涼なる一滴",
        description: "標高700mの南アルプス山麓、「森の蒸溜所」と称される白州蒸溜所で生まれるシングルモルト。清冽な山の水と豊かな自然環境が、爽やかでフレッシュな個性を生み出す。ほのかなスモーキーさと緑の香りが特徴的。",
        flavor: "フレッシュな青りんご、ハーブ、ほのかなスモーク",
        age: ["NV", "12年", "18年", "25年"],
        priceRange: "¥5,500〜¥250,000+",
        rating: 4.8,
        awards: ["WWA 2013 ベスト・ジャパニーズ", "ISC 2014 金賞"],
        color: "#4A7C59",
        rakutenLink: AFFILIATE_LINKS.rakuten.hakushu,
        amazonLink: AFFILIATE_LINKS.amazon.hakushu,
        flavorLabel: "テイスティングノート",
        lineupLabel: "ラインナップ",
        awardsLabel: "受賞歴",
        priceLabel: "価格帯",
        rakutenBtn: "楽天市場で購入",
        amazonBtn: "Amazonで購入",
        ratingLabel: "世界評価",
      },
      {
        id: "hibiki",
        name: "響",
        nameJa: "HIBIKI",
        subtitle: "ジャパニーズブレンデッドウイスキー",
        tagline: "日本の四季と自然の響きを一本に",
        description: "サントリーの最高峰ブレンデッドウイスキー。山崎・白州・知多の3蒸溜所の原酒を、日本の四季の移ろいをイメージして丁寧にブレンド。24面カットのボトルは日本の二十四節気を表現し、視覚的にも美しい逸品。",
        flavor: "華やかな花の香り、蜂蜜の甘さ、柔らかく長い余韻",
        age: ["Japanese Harmony", "17年", "21年", "30年"],
        priceRange: "¥5,500〜¥500,000+",
        rating: 4.9,
        awards: ["WWA 2014 ワールドベスト", "ISC 2015 最高金賞"],
        color: "#C9A84C",
        rakutenLink: AFFILIATE_LINKS.rakuten.hibiki,
        amazonLink: AFFILIATE_LINKS.amazon.hibiki,
        flavorLabel: "テイスティングノート",
        lineupLabel: "ラインナップ",
        awardsLabel: "受賞歴",
        priceLabel: "価格帯",
        rakutenBtn: "楽天市場で購入",
        amazonBtn: "Amazonで購入",
        ratingLabel: "世界評価",
      },
    ],
    story: {
      eyebrow: "ストーリー",
      title: "熟成の時間が\n生む、深み",
      p1: "ジャパニーズウイスキーの歴史は1923年、鳥井信治郎が山崎に日本初のモルトウイスキー蒸溜所を建設したことに始まります。日本の四季と豊かな自然水が育む独自の熟成環境が、世界に類を見ない繊細で複雑な風味を生み出します。",
      p2: "ミズナラ（水楢）樽を使った熟成は日本独自の技法で、バニラ・ビャクダン・ほのかなお香のような独特の香りを付与します。この「ジャパニーズオーク」の風味こそ、世界のウイスキー愛好家を魅了する秘密です。",
      casks: [
        { label: "ミズナラ樽", desc: "日本独自の熟成" },
        { label: "シェリー樽", desc: "甘く豊かな香り" },
        { label: "バーボン樽", desc: "バニラの甘さ" },
      ],
      tastingNote: '"複雑で深みのある\n琥珀色の芸術"',
    },
    guide: {
      eyebrow: "購入ガイド",
      title: "賢い購入ガイド",
      desc: "希少なジャパニーズウイスキーを最安値・最適な方法で入手するためのガイド。",
      rakutenTitle: "楽天市場",
      rakutenComm: "楽天ポイント還元 ・ ギフト包装対応",
      rakutenFeatures: [
        "楽天ポイントが貯まる・使える",
        "楽天スーパーセール時に大幅割引",
        "ギフト包装・熨斗対応が充実",
        "レビュー数が多く参考にしやすい",
        "楽天カード利用でさらにポイントアップ",
      ],
      rakutenBtn: "楽天市場でウイスキーを探す →",
      amazonTitle: "Amazon",
      amazonComm: "Amazon Prime ・ 翔日配送",
      amazonFeatures: [
        "Amazon Primeで翔日～2日以内に配送",
        "定期おトク便で継続購入が割安",
        "返品・交換ポリシーが明確",
        "Alexa連携でリピート購入が簡単",
      ],
      amazonBtn: "Amazonでウイスキーを探す →",
      tableTitle: "銘柄別 参考価格表（2026年現在）",
      tableNote: "※ 市場価格は需給により大きく変動します。最新価格は各リンクよりご確認ください。",
      tableHeaders: ["銘柄", "種別", "定価（税込）", "市場価格目安", "入手難易度"],
      tableRows: [
        { name: "山崎 NV", type: "シングルモルト", price: "¥5,500", market: "¥6,000〜¥12,000", difficulty: "★★★☆☆" },
        { name: "山崎 12年", type: "シングルモルト", price: "¥12,100", market: "¥30,000〜¥80,000", difficulty: "★★★★☆" },
        { name: "山崎 18年", type: "シングルモルト", price: "¥38,500", market: "¥150,000〜¥300,000", difficulty: "★★★★★" },
        { name: "白州 NV", type: "シングルモルト", price: "¥5,500", market: "¥6,000〜¥12,000", difficulty: "★★★☆☆" },
        { name: "白州 12年", type: "シングルモルト", price: "¥12,100", market: "¥25,000〜¥70,000", difficulty: "★★★★☆" },
        { name: "響 JH", type: "ブレンデッド", price: "¥5,500", market: "¥7,000〜¥15,000", difficulty: "★★★☆☆" },
        { name: "響 17年", type: "ブレンデッド", price: "生産終了", market: "¥80,000〜¥200,000", difficulty: "★★★★★" },
        { name: "響 21年", type: "ブレンデッド", price: "¥55,000", market: "¥150,000〜¥400,000", difficulty: "★★★★★" },
      ],
    },
    urgency: {
      title: "⚠️ 在庫限りのお知らせ",
      desc: "山崎12年・白州12年は常時在庫が限られています。今すぐ在庫を確認してください。",
      btn: "在庫を確認する →",
    },
    forwardingBanner: {
      title: "海外からの購入について",
      desc: "転送サービスを利用することで、海外からも楽天・Amazonで購入できます。",
      services: [
        { name: "Tenso", url: "https://www.tenso.com/ja", desc: "楽天公式パートナー" },
        { name: "Buyee", url: "https://buyee.jp/", desc: "簡単国際配送" },
        { name: "ZenMarket", url: "https://zenmarket.jp/", desc: "会員登録不要" },
      ],
    },
    distilleries: {
      eyebrow: "譒溜所",
      title: "三つの譒溜所が\n生む、三つの世界",
      items: [
        { name: "山崎蒸溜所", location: "大阪府三島郡島本町", year: "1923年創業", desc: "日本最古のモルトウイスキー蒸溜所。木津川・宇治川・桂川の三川合流地点に位置し、霧が多く湿度の高い環境が独特の熟成を生む。" },
        { name: "白州蒸溜所", location: "山梨県北杜市白州町", year: "1973年創業", desc: "標高約700mの南アルプス山麓に位置する「森の蒸溜所」。豊かな森林と清冽な水が、爽やかで清涼感あふれるウイスキーを生み出す。" },
        { name: "知多蒸溜所", location: "愛知県知多市", year: "1972年創業", desc: "グレーンウイスキー専門の蒸溜所。響のブレンドに欠かせない軽やかで甘いグレーン原酒を生産する。" },
      ],
    },
    gift: {
      eyebrow: "ギフトガイド",
      title: "ギフト選びの完全ガイド",
      desc: "父の日・誕生日・お歳暮・結婚祝いに最適なプレミアムウイスキーをご提案。",
      tiers: [
        { budget: "〜¥10,000", title: "エントリーギフト", desc: "ウイスキー入門者や普段使いのギフトに", items: ["山崎 NV（¥5,500）", "白州 NV（¥5,500）", "響 Japanese Harmony（¥5,500）"], link: AFFILIATE_LINKS.rakuten.yamazaki, btn: "楽天で探す →" },
        { budget: "¥10,000〜¥50,000", title: "プレミアムギフト", desc: "特別な記念日や目上の方への贈り物に", items: ["山崎 12年（市場価格¥30,000〜）", "白州 12年（市場価格¥25,000〜）", "響 21年（¥55,000）"], link: AFFILIATE_LINKS.rakuten.yamazaki, btn: "楽天で探す →" },
        { budget: "¥50,000〜", title: "ラグジュアリーギフト", desc: "最高の感謝を伝える究極の一本", items: ["山崎 18年（市場価格¥150,000〜）", "響 21年 限定品", "山崎 25年（超希少品）"], link: AFFILIATE_LINKS.rakuten.yamazaki, btn: "楽天で探す →" },
      ],
      budgetLabel: "予算",
    },
    faq: {
      eyebrow: "FAQ",
      title: "よくある質問",
      items: [
        { q: "ジャパニーズウイスキーとスコッチの違いは？", a: "ジャパニーズウイスキーは繊細で複雑な風味プロファイルと、ミズナラ（水楢）樽の使用が特徴です。スコッチとは異なり、日本の蒸溜所は複数のスタイルを自社で生産する傾向があります。" },
        { q: "なぜジャパニーズウイスキーは高いの？", a: "山崎12年や白州12年などのプレミアム銘柄は、世界的な需要の高まりと長い熟成期間により供給が極めて限られています。生産を急速に拡大できないため、市場価格に大きなプレミアムが生じています。" },
        { q: "山崎ウイスキーはどこで買える？", a: "楽天市場とAmazonで購入できます。需要が高いため在庫は変動します。両プラットフォームを定期的にチェックすることをお勧めします。" },
        { q: "初心者におすすめのジャパニーズウイスキーは？", a: "響ジャパニーズハーモニーは、バランスの取れた飲みやすい風味プロファイルで初心者に広く推奨されています。比較的手頃な価格でジャパニーズブレンデッドウイスキーへの入門に最適です。" },
        { q: "ジャパニーズウイスキーは投資になる？", a: "山崎18年や響21年などの希少銘柄は長期的に価値が上昇する傾向があります。ただし投資にはリスクが伴い、純粋なウイスキーの楽しみの延長として考えるのが最善です。" },
        { q: "ミズナラ樽とは何ですか？", a: "ミズナラは日本固有のオーク（モンゴリナラ）で、ウイスキーの熟成樽に使用されます。バニラ・ビャクダン・ほのかなお香のような独特の風味を付与します。加工が難しく高価なため、ウイスキー製造における贅沢な素材です。" },
      ],
    },
    cta: {
      eyebrow: "Find Your Bottle",
      title: "あなたの一本を\n見つけよう",
      desc: "山崎・白州・響の最新在庫と最安値を楽天市場・Amazonで確認できます。",
      btn1: "楽天市場で探す",
      btn2: "Amazonで探す",
    },
    social: {
      title: "このガイドをシェアする",
      desc: "ウイスキー愛好家にこの情報を届けてください。",
      xBtn: "X (ツイッター)でシェア",
      fbBtn: "Facebookでシェア",
      copyBtn: "URLをコピー",
      copiedBtn: "コピーしました!",
    },
    reviews: [
      { name: "James T.", country: "🇺🇸 アメリカ", text: "やっと山崎12年の在庫を見つけました！このガイドのおかげで数時間の検索が省けました。", rating: 5 },
      { name: "Sophie M.", country: "🇬🇧 イギリス", text: "テイスティングノートが非常に詳しい。響ハーモニーを注文したら完璧な状態で届きました。", rating: 5 },
      { name: "Kenji W.", country: "🇯🇵 日本", text: "価格比較が非常に参考になりました。山崎18年を楽天で購入できました。", rating: 5 },
      { name: "Marco R.", country: "🇩🇪 ドイツ", text: "Tensoの転送サービスを使ってドイツに届けました。完璧に機能しました。", rating: 5 },
    ],
    footer: {
      siteName: "ジャパニーズウイスキー完全ガイド",
      about: "山崎・白州・響などのプレミアムジャパニーズウイスキーの購入ガイド、テイスティングノート、価格比較情報を提供するアフィリエイトサイトです。",
      ageWarning: "⚠️ 本サイトは20歳以上の方を対象としています。未成年者の飲酒は法律で禁止されています。",
      colBrands: "銘柄",
      colBuy: "購入先",
      links: [
        { label: "山崎ウイスキー", href: "#yamazaki" },
        { label: "白州ウイスキー", href: "#hakushu" },
        { label: "響ウイスキー", href: "#hibiki" },
      ],
      buyLinks: [
        { label: "楽天市場で探す", href: AFFILIATE_LINKS.rakuten.yamazaki },
        { label: "Amazonで探す", href: AFFILIATE_LINKS.amazon.yamazaki },
      ],
      copyright: "© 2026 ジャパニーズウイスキー完全ガイド. All rights reserved.",
      disclosure: "本サイトはアフィリエイトプログラム（楽天アフィリエイト・Amazonアソシエイト）に参加しています。掲載リンクから購入された場合、当サイトに報酬が発生することがあります。",
    },
  },
};

// ===== Star Rating Component =====
function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg key={star} className={`w-4 h-4 ${star <= Math.floor(rating) ? "text-amber-400" : "text-gray-600"}`} fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
      <span className="text-sm ml-1" style={{ color: "#C9A84C" }}>{rating}</span>
    </div>
  );
}

// ===== Product Card Component =====
function ProductCard({ product, index }: { product: typeof T.en.products[0]; index: number }) {
  const { ref, isVisible } = useScrollReveal();
  return (
    <div
      ref={ref}
      id={product.id}
      className={`product-card rounded-sm border transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      style={{ borderColor: "rgba(201, 168, 76, 0.2)", backgroundColor: "rgba(26, 18, 8, 0.8)", transitionDelay: `${index * 150}ms` }}
    >
      <div className="p-8 pb-4">
        <div className="flex items-start justify-between mb-4">
          <div>
            <p className="text-xs tracking-[0.3em] uppercase mb-1" style={{ color: "#C9A84C", fontFamily: "'Cormorant Garamond', serif" }}>{product.subtitle}</p>
            <h3 className="text-4xl font-bold mb-1" style={{ fontFamily: "'Playfair Display', serif", color: "#F5F0E8" }}>{product.name}</h3>
            <p className="text-sm tracking-widest" style={{ color: "#8B7355", fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic" }}>{product.nameJa}</p>
          </div>
          <div className="text-right">
            <StarRating rating={product.rating} />
            <p className="text-xs mt-1" style={{ color: "#8B7355" }}>{product.ratingLabel}</p>
          </div>
        </div>
        <p className="text-sm italic mb-4" style={{ color: "#C9A84C", fontFamily: "'Playfair Display', serif" }}>"{product.tagline}"</p>
        <hr className="amber-rule mb-4" />
        <p className="text-sm leading-relaxed" style={{ color: "rgba(245, 240, 232, 0.8)" }}>{product.description}</p>
      </div>
      <div className="px-8 py-4" style={{ backgroundColor: "rgba(181, 101, 29, 0.08)" }}>
        <p className="text-xs tracking-widest uppercase mb-2" style={{ color: "#8B7355" }}>{product.flavorLabel}</p>
        <p className="text-sm" style={{ color: "#F5F0E8" }}>{product.flavor}</p>
      </div>
      <div className="px-8 py-4">
        <p className="text-xs tracking-widest uppercase mb-3" style={{ color: "#8B7355" }}>{product.lineupLabel}</p>
        <div className="flex flex-wrap gap-2">
          {product.age.map((age) => (
            <span key={age} className="px-3 py-1 text-xs rounded-sm border" style={{ borderColor: "rgba(201, 168, 76, 0.3)", color: "#C9A84C" }}>{age}</span>
          ))}
        </div>
      </div>
      <div className="px-8 py-4">
        <p className="text-xs tracking-widest uppercase mb-3" style={{ color: "#8B7355" }}>{product.awardsLabel}</p>
        {product.awards.map((award) => (
          <div key={award} className="flex items-center gap-2 mb-1">
            <span style={{ color: "#C9A84C" }}>✦</span>
            <span className="text-xs" style={{ color: "rgba(245, 240, 232, 0.7)" }}>{award}</span>
          </div>
        ))}
      </div>
      <div className="px-8 pb-8 pt-4">
        <div className="mb-4">
          <p className="text-xs tracking-widest uppercase mb-1" style={{ color: "#8B7355" }}>{product.priceLabel}</p>
          <p className="text-lg font-bold" style={{ color: "#F5F0E8", fontFamily: "'Playfair Display', serif" }}>{product.priceRange}</p>
        </div>
        <div className="flex flex-col gap-3">
          <a href={product.rakutenLink} target="_blank" rel="noopener noreferrer nofollow"
            className="btn-amber shimmer flex items-center justify-center gap-2 px-6 py-3 text-sm font-bold rounded-sm">
            {product.rakutenBtn}
          </a>
          <a href={product.amazonLink} target="_blank" rel="noopener noreferrer nofollow"
            className="btn-outline-amber flex items-center justify-center gap-2 px-6 py-3 text-sm rounded-sm">
            {product.amazonBtn}
          </a>
        </div>
      </div>
    </div>
  );
}

// ===== FAQ Item Component =====
function FAQItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b" style={{ borderColor: "rgba(201, 168, 76, 0.2)" }}>
      <button
        className="w-full flex items-center justify-between py-5 text-left gap-4"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span className="text-sm font-medium" style={{ color: "#F5F0E8", fontFamily: "'Playfair Display', serif" }}>
          <span style={{ color: "#C9A84C", marginRight: "12px" }}>0{index + 1}</span>{q}
        </span>
        <span style={{ color: "#C9A84C", fontSize: "20px", flexShrink: 0 }}>{open ? "−" : "+"}</span>
      </button>
      {open && (
        <div className="pb-5">
          <p className="text-sm leading-relaxed" style={{ color: "rgba(245, 240, 232, 0.75)" }}>{a}</p>
        </div>
      )}
    </div>
  );
}

// ===== Main Home Component =====
export default function Home() {
  const [lang, setLang] = useState<Lang>("en");
  const t = T[lang];

  // Update html lang attribute when language changes
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <div style={{ backgroundColor: "#0D0B07", minHeight: "100vh" }}>

      {/* ===== Navigation ===== */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4"
        style={{ backgroundColor: "rgba(13, 11, 7, 0.92)", backdropFilter: "blur(12px)", borderBottom: "1px solid rgba(201, 168, 76, 0.1)" }}>
        <a href="/" className="text-sm font-bold tracking-widest uppercase" style={{ color: "#C9A84C", fontFamily: "'Playfair Display', serif" }}>
          {lang === "en" ? "Japanese Whisky Guide" : "ジャパニーズウイスキー完全ガイド"}
        </a>
        <div className="hidden md:flex items-center gap-8">
          {[
            { label: t.nav.collection, href: "#products" },
            { label: t.nav.guide, href: "#guide" },
            { label: t.nav.gift, href: "#gift" },
            { label: t.nav.faq, href: "#faq" },
          ].map((item) => (
            <a key={item.href} href={item.href} className="text-xs tracking-widest uppercase hover:text-amber-400 transition-colors" style={{ color: "#8B7355" }}>
              {item.label}
            </a>
          ))}
          {/* Language Toggle Button */}
          <button
            onClick={() => setLang(lang === "en" ? "ja" : "en")}
            className="text-xs tracking-widest uppercase px-3 py-1.5 rounded-sm border transition-all hover:border-amber-400 hover:text-amber-400"
            style={{ borderColor: "rgba(201, 168, 76, 0.4)", color: "#C9A84C", fontFamily: lang === "ja" ? "'Noto Serif JP', serif" : "inherit" }}
            aria-label={lang === "en" ? "Switch to Japanese" : "Switch to English"}
          >
            {t.nav.langSwitch}
          </button>
        </div>
        {/* Mobile lang toggle */}
        <button
          onClick={() => setLang(lang === "en" ? "ja" : "en")}
          className="md:hidden text-xs px-3 py-1.5 rounded-sm border"
          style={{ borderColor: "rgba(201, 168, 76, 0.4)", color: "#C9A84C" }}
        >
          {t.nav.langSwitch}
        </button>
      </nav>

      {/* ===== Hero Section ===== */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${IMAGES.hero})`, filter: "brightness(0.3)" }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(13,11,7,0.4) 0%, rgba(13,11,7,0.7) 60%, rgba(13,11,7,1) 100%)" }} />
        <div className="container relative z-10 text-center">
          <p className="text-xs tracking-[0.5em] uppercase mb-6" style={{ color: "#C9A84C", fontFamily: "'Cormorant Garamond', serif" }}>
            {t.hero.eyebrow}
          </p>
          <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight" style={{ fontFamily: lang === "ja" ? "'Noto Serif JP', serif" : "'Playfair Display', serif", color: "#F5F0E8" }}>
            {t.hero.title}
          </h1>
          <p className="text-lg md:text-xl mb-8 tracking-widest" style={{ color: "#C9A84C", fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic" }}>
            {t.hero.subtitle}
          </p>
          <p className="text-sm max-w-xl mx-auto mb-12 leading-relaxed" style={{ color: "rgba(245, 240, 232, 0.75)" }}>
            {t.hero.desc}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#products" className="btn-amber shimmer px-10 py-4 text-sm font-bold rounded-sm inline-flex items-center justify-center gap-2">
              {t.hero.cta1}
            </a>
            <a href="#guide" className="btn-outline-amber px-10 py-4 text-sm rounded-sm inline-flex items-center justify-center gap-2">
              {t.hero.cta2}
            </a>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <div className="w-px h-12" style={{ background: "linear-gradient(to bottom, transparent, #C9A84C)" }} />
        </div>
      </section>

      {/* ===== Stats Section ===== */}
      <section className="py-16 border-y" style={{ borderColor: "rgba(201, 168, 76, 0.1)", backgroundColor: "rgba(181, 101, 29, 0.05)" }}>
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {t.stats.map((stat, i) => {
              const { ref, isVisible } = useScrollReveal();
              return (
                <div key={i} ref={ref} className={`text-center transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`} style={{ transitionDelay: `${i * 100}ms` }}>
                  <p className="text-4xl font-black mb-1 text-gold-gradient" style={{ fontFamily: "'Playfair Display', serif" }}>{stat.num}</p>
                  <p className="text-sm font-medium mb-1" style={{ color: "#F5F0E8", fontFamily: lang === "ja" ? "'Noto Serif JP', serif" : "inherit" }}>{stat.label}</p>
                  <p className="text-xs" style={{ color: "#8B7355" }}>{stat.sub}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== Products Section ===== */}
      <section id="products" className="py-24">
        <div className="container">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.4em] uppercase mb-4" style={{ color: "#C9A84C", fontFamily: "'Cormorant Garamond', serif" }}>{t.collection.eyebrow}</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: lang === "ja" ? "'Noto Serif JP', serif" : "'Playfair Display', serif", color: "#F5F0E8" }}>{t.collection.title}</h2>
            <p className="text-sm max-w-xl mx-auto" style={{ color: "rgba(245, 240, 232, 0.6)" }}>{t.collection.desc}</p>
            <hr className="amber-rule mt-8 max-w-xs mx-auto" />
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {t.products.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* ===== Story Section ===== */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${IMAGES.barrels})`, filter: "brightness(0.25)" }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(13,11,7,0.9) 0%, rgba(13,11,7,0.6) 100%)" }} />
        <div className="container relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs tracking-[0.4em] uppercase mb-4" style={{ color: "#C9A84C", fontFamily: "'Cormorant Garamond', serif" }}>{t.story.eyebrow}</p>
              <h2 className="text-4xl font-bold mb-6 whitespace-pre-line" style={{ fontFamily: lang === "ja" ? "'Noto Serif JP', serif" : "'Playfair Display', serif", color: "#F5F0E8" }}>{t.story.title}</h2>
              <p className="text-sm leading-relaxed mb-6" style={{ color: "rgba(245, 240, 232, 0.75)" }}>{t.story.p1}</p>
              <p className="text-sm leading-relaxed mb-8" style={{ color: "rgba(245, 240, 232, 0.75)" }}>{t.story.p2}</p>
              <div className="grid grid-cols-3 gap-4">
                {t.story.casks.map((item) => (
                  <div key={item.label} className="text-center p-3 rounded-sm" style={{ border: "1px solid rgba(201, 168, 76, 0.2)" }}>
                    <p className="text-xs font-bold mb-1" style={{ color: "#C9A84C", fontFamily: lang === "ja" ? "'Noto Serif JP', serif" : "inherit" }}>{item.label}</p>
                    <p className="text-xs" style={{ color: "#8B7355" }}>{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img src={IMAGES.glass} alt="Premium whisky glass" className="w-full rounded-sm" style={{ maxHeight: "500px", objectFit: "cover" }} />
              <div className="absolute -bottom-4 -left-4 p-6 rounded-sm" style={{ backgroundColor: "rgba(13, 11, 7, 0.9)", border: "1px solid rgba(201, 168, 76, 0.3)" }}>
                <p className="text-xs tracking-widest uppercase mb-1" style={{ color: "#C9A84C" }}>Tasting Note</p>
                <p className="text-sm italic whitespace-pre-line" style={{ color: "#F5F0E8", fontFamily: "'Playfair Display', serif" }}>{t.story.tastingNote}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Buying Guide Section ===== */}
      <section id="guide" className="py-24">
        <div className="container">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.4em] uppercase mb-4" style={{ color: "#C9A84C", fontFamily: "'Cormorant Garamond', serif" }}>{t.guide.eyebrow}</p>
            <h2 className="text-4xl font-bold mb-4" style={{ fontFamily: lang === "ja" ? "'Noto Serif JP', serif" : "'Playfair Display', serif", color: "#F5F0E8" }}>{t.guide.title}</h2>
            <p className="text-sm max-w-xl mx-auto" style={{ color: "rgba(245, 240, 232, 0.6)" }}>{t.guide.desc}</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Rakuten */}
            <div className="p-8 rounded-sm border" style={{ borderColor: "rgba(201, 168, 76, 0.2)", backgroundColor: "rgba(26, 18, 8, 0.8)" }}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold" style={{ backgroundColor: "rgba(181, 101, 29, 0.3)", color: "#C9A84C", fontFamily: "'Noto Serif JP', serif" }}>楽</div>
                <div>
                  <h3 className="text-lg font-bold" style={{ fontFamily: lang === "ja" ? "'Noto Serif JP', serif" : "'Playfair Display', serif", color: "#F5F0E8" }}>{t.guide.rakutenTitle}</h3>
                  <p className="text-xs" style={{ color: "#C9A84C" }}>{t.guide.rakutenComm}</p>
                </div>
              </div>
              <ul className="space-y-3 mb-6">
                {t.guide.rakutenFeatures.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm" style={{ color: "rgba(245, 240, 232, 0.8)" }}>
                    <span style={{ color: "#C9A84C" }}>✦</span>{item}
                  </li>
                ))}
              </ul>
              <a href={AFFILIATE_LINKS.rakuten.yamazaki} target="_blank" rel="noopener noreferrer nofollow"
                className="btn-amber shimmer w-full flex items-center justify-center gap-2 px-6 py-3 text-sm font-bold rounded-sm">
                {t.guide.rakutenBtn}
              </a>
            </div>
            {/* Amazon */}
            <div className="p-8 rounded-sm border" style={{ borderColor: "rgba(201, 168, 76, 0.2)", backgroundColor: "rgba(26, 18, 8, 0.8)" }}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold" style={{ backgroundColor: "rgba(181, 101, 29, 0.3)", color: "#C9A84C" }}>A</div>
                <div>
                  <h3 className="text-lg font-bold" style={{ fontFamily: "'Playfair Display', serif", color: "#F5F0E8" }}>{t.guide.amazonTitle}</h3>
                  <p className="text-xs" style={{ color: "#C9A84C" }}>{t.guide.amazonComm}</p>
                </div>
              </div>
              <ul className="space-y-3 mb-6">
                {t.guide.amazonFeatures.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm" style={{ color: "rgba(245, 240, 232, 0.8)" }}>
                    <span style={{ color: "#C9A84C" }}>✦</span>{item}
                  </li>
                ))}
              </ul>
              <a href={AFFILIATE_LINKS.amazon.yamazaki} target="_blank" rel="noopener noreferrer nofollow"
                className="btn-outline-amber w-full flex items-center justify-center gap-2 px-6 py-3 text-sm rounded-sm">
                {t.guide.amazonBtn}
              </a>
            </div>
          </div>
          {/* Price Table */}
          <div className="rounded-sm border overflow-hidden" style={{ borderColor: "rgba(201, 168, 76, 0.2)" }}>
            <div className="p-6" style={{ backgroundColor: "rgba(181, 101, 29, 0.1)" }}>
              <h3 className="text-lg font-bold" style={{ fontFamily: lang === "ja" ? "'Noto Serif JP', serif" : "'Playfair Display', serif", color: "#F5F0E8" }}>{t.guide.tableTitle}</h3>
              <p className="text-xs mt-1" style={{ color: "#8B7355" }}>{t.guide.tableNote}</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr style={{ borderBottom: "1px solid rgba(201, 168, 76, 0.2)", backgroundColor: "rgba(26, 18, 8, 0.9)" }}>
                    {t.guide.tableHeaders.map((h) => (
                      <th key={h} className="px-4 py-3 text-left text-xs tracking-wider" style={{ color: "#C9A84C" }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {t.guide.tableRows.map((row, i) => (
                    <tr key={i} style={{ borderBottom: "1px solid rgba(201, 168, 76, 0.1)", backgroundColor: i % 2 === 0 ? "rgba(26, 18, 8, 0.8)" : "rgba(26, 18, 8, 0.5)" }}>
                      <td className="px-4 py-3 font-medium" style={{ color: "#F5F0E8", fontFamily: lang === "ja" ? "'Noto Serif JP', serif" : "inherit" }}>{row.name}</td>
                      <td className="px-4 py-3" style={{ color: "rgba(245, 240, 232, 0.7)" }}>{row.type}</td>
                      <td className="px-4 py-3" style={{ color: "#C9A84C" }}>{row.price}</td>
                      <td className="px-4 py-3" style={{ color: "rgba(245, 240, 232, 0.7)" }}>{row.market}</td>
                      <td className="px-4 py-3" style={{ color: "#C9A84C" }}>{row.difficulty}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Distilleries Section ===== */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${IMAGES.distillery})`, filter: "brightness(0.2)" }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(13,11,7,0.95) 0%, rgba(13,11,7,0.7) 60%, rgba(13,11,7,0.4) 100%)" }} />
        <div className="container relative z-10">
          <div className="max-w-2xl">
            <p className="text-xs tracking-[0.4em] uppercase mb-4" style={{ color: "#C9A84C", fontFamily: "'Cormorant Garamond', serif" }}>{t.distilleries.eyebrow}</p>
            <h2 className="text-4xl font-bold mb-8 whitespace-pre-line" style={{ fontFamily: lang === "ja" ? "'Noto Serif JP', serif" : "'Playfair Display', serif", color: "#F5F0E8" }}>{t.distilleries.title}</h2>
            <div className="space-y-6">
              {t.distilleries.items.map((d, i) => {
                const { ref, isVisible } = useScrollReveal();
                return (
                  <div key={i} ref={ref} className={`flex gap-4 transition-all duration-700 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`} style={{ transitionDelay: `${i * 150}ms` }}>
                    <div className="flex-shrink-0 w-1 rounded-full" style={{ backgroundColor: "#C9A84C" }} />
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <h3 className="text-base font-bold" style={{ fontFamily: lang === "ja" ? "'Noto Serif JP', serif" : "'Playfair Display', serif", color: "#F5F0E8" }}>{d.name}</h3>
                        <span className="text-xs px-2 py-0.5 rounded-sm" style={{ backgroundColor: "rgba(201, 168, 76, 0.15)", color: "#C9A84C" }}>{d.year}</span>
                      </div>
                      <p className="text-xs mb-2" style={{ color: "#8B7355" }}>{d.location}</p>
                      <p className="text-sm" style={{ color: "rgba(245, 240, 232, 0.7)" }}>{d.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ===== Gift Guide Section ===== */}
      <section id="gift" className="py-24" style={{ backgroundColor: "rgba(181, 101, 29, 0.05)" }}>
        <div className="container">
          <div className="text-center mb-12">
            <p className="text-xs tracking-[0.4em] uppercase mb-4" style={{ color: "#C9A84C", fontFamily: "'Cormorant Garamond', serif" }}>{t.gift.eyebrow}</p>
            <h2 className="text-4xl font-bold mb-4" style={{ fontFamily: lang === "ja" ? "'Noto Serif JP', serif" : "'Playfair Display', serif", color: "#F5F0E8" }}>{t.gift.title}</h2>
            <p className="text-sm max-w-xl mx-auto" style={{ color: "rgba(245, 240, 232, 0.6)" }}>{t.gift.desc}</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {t.gift.tiers.map((tier, i) => {
              const { ref, isVisible } = useScrollReveal();
              return (
                <div key={i} ref={ref} className={`p-8 rounded-sm border transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                  style={{ borderColor: i === 1 ? "rgba(201, 168, 76, 0.5)" : "rgba(201, 168, 76, 0.2)", backgroundColor: i === 1 ? "rgba(181, 101, 29, 0.1)" : "rgba(26, 18, 8, 0.8)", transitionDelay: `${i * 150}ms` }}>
                  <p className="text-xs tracking-widest uppercase mb-2" style={{ color: "#C9A84C" }}>{t.gift.budgetLabel}</p>
                  <p className="text-2xl font-bold mb-2" style={{ fontFamily: "'Playfair Display', serif", color: "#F5F0E8" }}>{tier.budget}</p>
                  <h3 className="text-base font-bold mb-2" style={{ fontFamily: lang === "ja" ? "'Noto Serif JP', serif" : "'Playfair Display', serif", color: "#F5F0E8" }}>{tier.title}</h3>
                  <p className="text-xs mb-4" style={{ color: "#8B7355" }}>{tier.desc}</p>
                  <hr className="amber-rule mb-4" />
                  <ul className="space-y-2 mb-6">
                    {tier.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm" style={{ color: "rgba(245, 240, 232, 0.8)" }}>
                        <span style={{ color: "#C9A84C" }}>✦</span>{item}
                      </li>
                    ))}
                  </ul>
                  <a href={tier.link} target="_blank" rel="noopener noreferrer nofollow"
                    className={`w-full flex items-center justify-center gap-2 px-6 py-3 text-sm rounded-sm ${i === 1 ? "btn-amber shimmer font-bold" : "btn-outline-amber"}`}>
                    {tier.btn}
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== FAQ Section ===== */}
      <section id="faq" className="py-24">
        <div className="container max-w-3xl">
          <div className="text-center mb-12">
            <p className="text-xs tracking-[0.4em] uppercase mb-4" style={{ color: "#C9A84C", fontFamily: "'Cormorant Garamond', serif" }}>{t.faq.eyebrow}</p>
            <h2 className="text-4xl font-bold mb-4" style={{ fontFamily: lang === "ja" ? "'Noto Serif JP', serif" : "'Playfair Display', serif", color: "#F5F0E8" }}>{t.faq.title}</h2>
          </div>
          <div className="border-t" style={{ borderColor: "rgba(201, 168, 76, 0.2)" }}>
            {t.faq.items.map((faq, i) => (
              <FAQItem key={`${lang}-${i}`} q={faq.q} a={faq.a} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ===== Urgency Banner ===== */}
      <section className="py-6" style={{ backgroundColor: "rgba(181, 101, 29, 0.12)", borderTop: "1px solid rgba(201, 168, 76, 0.3)", borderBottom: "1px solid rgba(201, 168, 76, 0.3)" }}>
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="text-xl">⚠️</span>
              <div>
                <p className="text-sm font-bold" style={{ color: "#F5F0E8", fontFamily: "'Playfair Display', serif" }}>{t.urgency.title}</p>
                <p className="text-xs" style={{ color: "rgba(245, 240, 232, 0.7)" }}>{t.urgency.desc}</p>
              </div>
            </div>
            <a href={AFFILIATE_LINKS.rakuten.yamazaki} target="_blank" rel="noopener noreferrer nofollow"
              className="btn-amber shimmer px-6 py-2.5 text-xs font-bold rounded-sm whitespace-nowrap">
              {t.urgency.btn}
            </a>
          </div>
        </div>
      </section>

      {/* ===== Forwarding Service Banner ===== */}
      <section className="py-12" style={{ backgroundColor: "rgba(13, 11, 7, 0.95)", borderBottom: "1px solid rgba(201, 168, 76, 0.1)" }}>
        <div className="container">
          <div className="rounded-sm border p-8" style={{ borderColor: "rgba(201, 168, 76, 0.25)", backgroundColor: "rgba(26, 18, 8, 0.9)" }}>
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full flex items-center justify-center text-2xl" style={{ backgroundColor: "rgba(201, 168, 76, 0.15)" }}>✈️</div>
              </div>
              <div className="flex-1">
                <h3 className="text-base font-bold mb-1" style={{ fontFamily: "'Playfair Display', serif", color: "#F5F0E8" }}>{t.forwardingBanner.title}</h3>
                <p className="text-xs mb-4" style={{ color: "rgba(245, 240, 232, 0.7)" }}>{t.forwardingBanner.desc}</p>
                <div className="flex flex-wrap gap-3">
                  {t.forwardingBanner.services.map((s) => (
                    <a key={s.name} href={s.url} target="_blank" rel="noopener noreferrer"
                      className="px-4 py-2 rounded-sm border text-xs transition-all hover:border-amber-400"
                      style={{ borderColor: "rgba(201, 168, 76, 0.3)", color: "#C9A84C" }}>
                      <span className="font-bold">{s.name}</span>
                      <span className="ml-2" style={{ color: "#8B7355" }}>{s.desc}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Reviews Section ===== */}
      <section className="py-20" style={{ backgroundColor: "rgba(181, 101, 29, 0.04)" }}>
        <div className="container">
          <div className="text-center mb-12">
            <p className="text-xs tracking-[0.4em] uppercase mb-4" style={{ color: "#C9A84C", fontFamily: "'Cormorant Garamond', serif" }}>
              {lang === "en" ? "Trusted Reviews" : "お客様の声"}
            </p>
            <h2 className="text-3xl font-bold" style={{ fontFamily: lang === "ja" ? "'Noto Serif JP', serif" : "'Playfair Display', serif", color: "#F5F0E8" }}>
              {lang === "en" ? "What Whisky Lovers Say" : "ウイスキー愛好家の声"}
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {t.reviews.map((review, i) => (
              <div key={i} className="p-6 rounded-sm border" style={{ borderColor: "rgba(201, 168, 76, 0.15)", backgroundColor: "rgba(26, 18, 8, 0.8)" }}>
                <div className="flex mb-3">
                  {[1,2,3,4,5].map((s) => (
                    <svg key={s} className="w-3 h-3 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-xs leading-relaxed mb-4" style={{ color: "rgba(245, 240, 232, 0.8)" }}>&#34;{review.text}&#34;</p>
                <div>
                  <p className="text-xs font-bold" style={{ color: "#F5F0E8" }}>{review.name}</p>
                  <p className="text-xs" style={{ color: "#8B7355" }}>{review.country}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <InternationalBuy lang={lang} />

      {/* ===== Final CTA Section ===== */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${IMAGES.collection})`, filter: "brightness(0.2)" }} />
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at center, rgba(181,101,29,0.15) 0%, rgba(13,11,7,0.95) 70%)" }} />
        <div className="container relative z-10 text-center">
          <p className="text-xs tracking-[0.4em] uppercase mb-4" style={{ color: "#C9A84C", fontFamily: "'Cormorant Garamond', serif" }}>{t.cta.eyebrow}</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 whitespace-pre-line" style={{ fontFamily: lang === "ja" ? "'Noto Serif JP', serif" : "'Playfair Display', serif", color: "#F5F0E8" }}>{t.cta.title}</h2>
          <p className="text-sm max-w-lg mx-auto mb-10" style={{ color: "rgba(245, 240, 232, 0.7)" }}>{t.cta.desc}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={AFFILIATE_LINKS.rakuten.yamazaki} target="_blank" rel="noopener noreferrer nofollow"
              className="btn-amber shimmer px-10 py-4 text-sm font-bold rounded-sm inline-flex items-center justify-center gap-2">
              {t.cta.btn1}
            </a>
            <a href={AFFILIATE_LINKS.amazon.yamazaki} target="_blank" rel="noopener noreferrer nofollow"
              className="btn-outline-amber px-10 py-4 text-sm rounded-sm inline-flex items-center justify-center gap-2">
              {t.cta.btn2}
            </a>
          </div>
        </div>
      </section>

      {/* ===== Footer ===== */}
      <footer className="py-12 border-t" style={{ borderColor: "rgba(201, 168, 76, 0.15)", backgroundColor: "#0A0805" }}>
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <p className="text-sm font-bold mb-3" style={{ color: "#F5F0E8", fontFamily: lang === "ja" ? "'Noto Serif JP', serif" : "'Playfair Display', serif" }}>{t.footer.siteName}</p>
              <p className="text-xs leading-relaxed mb-4" style={{ color: "#8B7355" }}>{t.footer.about}</p>
              <p className="text-xs" style={{ color: "#8B7355" }}>{t.footer.ageWarning}</p>
            </div>
            <div>
              <p className="text-xs tracking-widest uppercase mb-4" style={{ color: "#C9A84C" }}>{t.footer.colBrands}</p>
              {t.footer.links.map((link) => (
                <a key={link.label} href={link.href} className="block text-xs mb-2 hover:text-amber-400 transition-colors" style={{ color: "#8B7355" }}>{link.label}</a>
              ))}
            </div>
            <div>
              <p className="text-xs tracking-widest uppercase mb-4" style={{ color: "#C9A84C" }}>{t.footer.colBuy}</p>
              {t.footer.buyLinks.map((link) => (
                <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer nofollow" className="block text-xs mb-2 hover:text-amber-400 transition-colors" style={{ color: "#8B7355" }}>{link.label}</a>
              ))}
            </div>
          </div>
          <hr className="amber-rule mb-6" />
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs" style={{ color: "#8B7355" }}>{t.footer.copyright}</p>
            <p className="text-xs text-center" style={{ color: "#8B7355" }}>{t.footer.disclosure}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
