/**
 * Design: 「蒸溜所の静寂」— ジャパニーズ・ミニマリズム
 * Dark amber theme, Noto Serif JP + Playfair Display
 * SEO-optimized landing page for Japanese whisky affiliate
 * 
 * Affiliate Links:
 * - 楽天アフィリエイト: 報酬率4.0%（お酒カテゴリ）
 * - Amazonアソシエイト: 報酬率8.0%（お酒カテゴリ）
 * - もしもアフィリエイト: W報酬制度あり
 */

import { useEffect, useRef, useState } from "react";

// ===== Affiliate Link Configuration =====
// 実際の運用時は自分のアフィリエイトIDに置き換えてください
const AFFILIATE_LINKS = {
  // 楽天アフィリエイト（報酬率4.0%）
  rakuten: {
    yamazaki: "https://hb.afl.rakuten.co.jp/ichiba/53717089.d5ab6064.5371708b.7357bb63/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fkawachi%2F3939220001481%2F&link_type=picttext&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0dGV4dCIsInNpemUiOiIyNDB4MjQwIiwibmFtIjoxLCJuYW1wIjoicmlnaHQiLCJjb20iOjEsImNvbXAiOiJkb3duIiwicHJpY2UiOjEsImJvciI6MSwiY29sIjoxLCJiYnRuIjoxLCJwcm9kIjowLCJhbXAiOmZhbHNlfQ%3D%3D",
    hakushu: "https://hb.afl.rakuten.co.jp/ichiba/53717443.92c5e772.53717444.5a6c8d6d/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fsoukaidrink%2F4901777453067%2F&link_type=picttext&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0dGV4dCIsInNpemUiOiIyNDB4MjQwIiwibmFtIjoxLCJuYW1wIjoicmlnaHQiLCJjb20iOjEsImNvbXAiOiJkb3duIiwicHJpY2UiOjEsImJvciI6MSwiY29sIjoxLCJiYnRuIjoxLCJwcm9kIjowLCJhbXAiOmZhbHNlfQ%3D%3D",
    hibiki: "https://hb.afl.rakuten.co.jp/ichiba/537175f7.0582b266.537175f8.65bc81cc/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fkomoriliquor%2F16-3%2F&link_type=picttext&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0dGV4dCIsInNpemUiOiIyNDB4MjQwIiwibmFtIjoxLCJuYW1wIjoicmlnaHQiLCJjb20iOjEsImNvbXAiOiJkb3duIiwicHJpY2UiOjEsImJvciI6MSwiY29sIjoxLCJiYnRuIjoxLCJwcm9kIjowLCJhbXAiOmZhbHNlfQ%3D%3D",
  },
  // Amazonアソシエイト（報酬率8.0%）
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
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return { ref, isVisible };
}

// ===== Product Data =====
const products = [
  {
    id: "yamazaki",
    name: "山崎",
    nameEn: "THE YAMAZAKI",
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
    seoKeywords: "山崎ウイスキー 購入,山崎12年 値段,山崎18年 最安値",
  },
  {
    id: "hakushu",
    name: "白州",
    nameEn: "THE HAKUSHU",
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
    seoKeywords: "白州ウイスキー 購入,白州12年 値段,白州 最安値",
  },
  {
    id: "hibiki",
    name: "響",
    nameEn: "HIBIKI",
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
    seoKeywords: "響ウイスキー 購入,響ジャパニーズハーモニー 値段,響21年 最安値",
  },
];

// ===== Star Rating Component =====
function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`w-4 h-4 ${star <= Math.floor(rating) ? "text-amber-400" : "text-gray-600"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
      <span className="text-sm ml-1" style={{ color: "#C9A84C" }}>{rating}</span>
    </div>
  );
}

// ===== Product Card Component =====
function ProductCard({ product, index }: { product: typeof products[0]; index: number }) {
  const { ref, isVisible } = useScrollReveal();

  return (
    <div
      ref={ref}
      id={product.id}
      className={`product-card rounded-sm border transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{
        borderColor: "rgba(201, 168, 76, 0.2)",
        backgroundColor: "rgba(26, 18, 8, 0.8)",
        transitionDelay: `${index * 150}ms`,
      }}
    >
      {/* Product Header */}
      <div className="p-8 pb-4">
        <div className="flex items-start justify-between mb-4">
          <div>
            <p className="text-xs tracking-[0.3em] uppercase mb-1" style={{ color: "#C9A84C", fontFamily: "'Cormorant Garamond', serif" }}>
              {product.subtitle}
            </p>
            <h3
              className="text-4xl font-bold mb-1"
              style={{ fontFamily: "'Noto Serif JP', serif", color: "#F5F0E8" }}
            >
              {product.name}
            </h3>
            <p className="text-sm tracking-widest" style={{ color: "#8B7355", fontFamily: "'Playfair Display', serif", fontStyle: "italic" }}>
              {product.nameEn}
            </p>
          </div>
          <div className="text-right">
            <StarRating rating={product.rating} />
            <p className="text-xs mt-1" style={{ color: "#8B7355" }}>世界評価</p>
          </div>
        </div>
        
        <p className="text-sm italic mb-4" style={{ color: "#C9A84C", fontFamily: "'Playfair Display', serif" }}>
          "{product.tagline}"
        </p>
        
        <hr className="amber-rule mb-4" />
        
        <p className="text-sm leading-relaxed" style={{ color: "rgba(245, 240, 232, 0.8)" }}>
          {product.description}
        </p>
      </div>
      
      {/* Flavor Profile */}
      <div className="px-8 py-4" style={{ backgroundColor: "rgba(181, 101, 29, 0.08)" }}>
        <p className="text-xs tracking-widest uppercase mb-2" style={{ color: "#8B7355" }}>テイスティングノート</p>
        <p className="text-sm" style={{ color: "#F5F0E8" }}>{product.flavor}</p>
      </div>
      
      {/* Age Variants */}
      <div className="px-8 py-4">
        <p className="text-xs tracking-widest uppercase mb-3" style={{ color: "#8B7355" }}>ラインナップ</p>
        <div className="flex flex-wrap gap-2">
          {product.age.map((age) => (
            <span
              key={age}
              className="px-3 py-1 text-xs rounded-sm border"
              style={{ borderColor: "rgba(201, 168, 76, 0.3)", color: "#C9A84C" }}
            >
              {age}
            </span>
          ))}
        </div>
      </div>
      
      {/* Awards */}
      <div className="px-8 py-4">
        <p className="text-xs tracking-widest uppercase mb-3" style={{ color: "#8B7355" }}>受賞歴</p>
        {product.awards.map((award) => (
          <div key={award} className="flex items-center gap-2 mb-1">
            <span style={{ color: "#C9A84C" }}>✦</span>
            <span className="text-xs" style={{ color: "rgba(245, 240, 232, 0.7)" }}>{award}</span>
          </div>
        ))}
      </div>
      
      {/* Price & CTA */}
      <div className="px-8 pb-8 pt-4">
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-xs tracking-widest uppercase mb-1" style={{ color: "#8B7355" }}>価格帯</p>
            <p className="text-lg font-bold" style={{ color: "#F5F0E8", fontFamily: "'Noto Serif JP', serif" }}>
              {product.priceRange}
            </p>
          </div>
        </div>
        
        {/* Affiliate CTA Buttons */}
        <div className="flex flex-col gap-3">
          <a
            href={product.rakutenLink}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="btn-amber shimmer flex items-center justify-center gap-3 px-6 py-3 text-sm font-bold rounded-sm"
            aria-label={`${product.name}を楽天市場で購入する`}
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z"/>
            </svg>
            楽天市場で最安値を確認する
            <span className="text-xs opacity-70">（報酬率4.0%）</span>
          </a>
          <a
            href={product.amazonLink}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="btn-outline-amber flex items-center justify-center gap-3 px-6 py-3 text-sm rounded-sm"
            aria-label={`${product.name}をAmazonで購入する`}
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z"/>
            </svg>
            Amazonで価格を確認する
            <span className="text-xs opacity-70">（報酬率8.0%）</span>
          </a>
        </div>
        
        <p className="text-xs mt-3 text-center" style={{ color: "#8B7355" }}>
          ※ 本ページはアフィリエイトプログラムによる収益を得ています
        </p>
      </div>
    </div>
  );
}

// ===== FAQ Item Component =====
function FAQItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);
  const { ref, isVisible } = useScrollReveal();

  return (
    <div
      ref={ref}
      className={`border-b transition-all duration-500 ${isVisible ? "opacity-100" : "opacity-0"}`}
      style={{ borderColor: "rgba(201, 168, 76, 0.2)", transitionDelay: `${index * 100}ms` }}
    >
      <button
        className="w-full flex items-center justify-between py-5 text-left"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span className="text-sm font-medium pr-4" style={{ color: "#F5F0E8", fontFamily: "'Noto Serif JP', serif" }}>
          {q}
        </span>
        <span
          className="flex-shrink-0 transition-transform duration-300"
          style={{ color: "#C9A84C", transform: open ? "rotate(45deg)" : "rotate(0)" }}
        >
          ＋
        </span>
      </button>
      {open && (
        <div className="pb-5 text-sm leading-relaxed" style={{ color: "rgba(245, 240, 232, 0.75)" }}>
          {a}
        </div>
      )}
    </div>
  );
}

// ===== Main Home Component =====
export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const faqs = [
    {
      q: "山崎・白州・響はどこで購入できますか？",
      a: "楽天市場やAmazonなどのECサイトで購入可能です。ただし、特に12年以上の熟成品や限定品は入手困難で、定価の数倍以上の価格で取引されることもあります。本サイトのアフィリエイトリンクから最新の在庫状況と価格を確認できます。",
    },
    {
      q: "山崎・白州・響の価格はなぜこんなに高いのですか？",
      a: "需要が世界的に急増している一方、熟成に長年かかるため供給が追いつかない希少性が主な理由です。また、世界的な品評会での受賞歴が高い評価を確立し、コレクターや投資目的の需要も価格を押し上げています。",
    },
    {
      q: "山崎・白州・響はギフトに適していますか？",
      a: "非常に適しています。特に父の日、誕生日、お歳暮・お中元、結婚祝いなどの特別な贈り物として人気があります。化粧箱付きのギフトセットも楽天・Amazonで購入できます。予算に応じてNV（ノンビンテージ）から高年数品まで選べます。",
    },
    {
      q: "山崎と白州の違いは何ですか？",
      a: "山崎は大阪府の山崎蒸溜所で製造され、甘くリッチな果実香とミズナラ樽由来の独特の香りが特徴です。白州は山梨県の白州蒸溜所で製造され、南アルプスの清冽な水を使用した爽やかでハーブ感のある味わいが特徴です。",
    },
    {
      q: "響ジャパニーズハーモニーと響17年の違いは？",
      a: "響ジャパニーズハーモニー（JH）は年数表記なしのブレンデッドウイスキーで、比較的入手しやすく価格も手頃です。響17年は17年以上熟成した原酒のみを使用した高品質品で、現在は生産終了のため希少価値が高く、市場価格も高騰しています。",
    },
    {
      q: "楽天とAmazonどちらで購入するのがお得ですか？",
      a: "楽天市場はポイント還元率が高く、楽天スーパーセール等のキャンペーン時に特にお得です。Amazonはプライム会員なら翌日配送が可能で、定価に近い価格で購入できることもあります。両方の価格を比較することをおすすめします。",
    },
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#0D0B07" }}>
      
      {/* ===== Age Verification Notice ===== */}
      <div className="text-center py-2 text-xs" style={{ backgroundColor: "rgba(181, 101, 29, 0.15)", color: "#C9A84C" }}>
        ⚠️ 本サイトは20歳以上の方を対象としています。未成年者の飲酒は法律で禁止されています。
      </div>

      {/* ===== Navigation ===== */}
      <nav
        className="sticky top-0 z-50 border-b"
        style={{
          backgroundColor: scrollY > 50 ? "rgba(13, 11, 7, 0.95)" : "transparent",
          borderColor: scrollY > 50 ? "rgba(201, 168, 76, 0.2)" : "transparent",
          backdropFilter: scrollY > 50 ? "blur(10px)" : "none",
          transition: "all 0.3s ease",
        }}
      >
        <div className="container flex items-center justify-between py-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: "rgba(181, 101, 29, 0.3)", border: "1px solid rgba(201, 168, 76, 0.5)" }}>
              <span style={{ color: "#C9A84C", fontSize: "14px" }}>蒸</span>
            </div>
            <div>
              <p className="text-xs tracking-[0.2em] uppercase" style={{ color: "#C9A84C", fontFamily: "'Cormorant Garamond', serif" }}>
                Japanese Whisky Guide
              </p>
              <p className="text-xs" style={{ color: "#8B7355" }}>ジャパニーズウイスキー完全ガイド</p>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-8">
            {[
              { label: "山崎", href: "#yamazaki" },
              { label: "白州", href: "#hakushu" },
              { label: "響", href: "#hibiki" },
              { label: "購入ガイド", href: "#guide" },
              { label: "FAQ", href: "#faq" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm transition-colors hover:text-amber-400"
                style={{ color: "rgba(245, 240, 232, 0.7)", fontFamily: "'Noto Serif JP', serif" }}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* ===== Hero Section ===== */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Image with Parallax */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${IMAGES.hero})`,
            transform: `translateY(${scrollY * 0.4}px)`,
            filter: "brightness(0.35)",
          }}
        />
        {/* Gradient Overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to bottom, rgba(13,11,7,0.3) 0%, rgba(13,11,7,0.1) 40%, rgba(13,11,7,0.8) 100%)",
          }}
        />
        
        {/* Hero Content */}
        <div className="container relative z-10 py-32">
          <div className="max-w-3xl">
            {/* Eyebrow */}
            <div className="flex items-center gap-4 mb-8 animate-fade-in-up">
              <div className="h-px w-12" style={{ backgroundColor: "#C9A84C" }} />
              <span
                className="text-xs tracking-[0.4em] uppercase"
                style={{ color: "#C9A84C", fontFamily: "'Cormorant Garamond', serif" }}
              >
                Since 1923 · Suntory Whisky
              </span>
            </div>
            
            {/* Main Heading - SEO H1 */}
            <h1
              className="text-5xl md:text-7xl font-black leading-tight mb-6 animate-fade-in-up delay-100"
              style={{ fontFamily: "'Noto Serif JP', serif", color: "#F5F0E8" }}
            >
              日本が誇る
              <br />
              <span className="text-gold-gradient">プレミアム</span>
              <br />
              ウイスキー
            </h1>
            
            {/* Subtitle */}
            <p
              className="text-xl md:text-2xl mb-4 animate-fade-in-up delay-200"
              style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", color: "rgba(245, 240, 232, 0.8)" }}
            >
              山崎・白州・響 — 完全購入ガイド
            </p>
            
            <p
              className="text-sm md:text-base leading-relaxed mb-10 max-w-xl animate-fade-in-up delay-300"
              style={{ color: "rgba(245, 240, 232, 0.65)" }}
            >
              世界が認めた日本のウイスキー文化。山崎・白州・響の魅力、テイスティングノート、
              最安値での購入方法まで、愛好家のための完全ガイドをお届けします。
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-400">
              <a
                href="#products"
                className="btn-amber shimmer px-8 py-4 text-sm font-bold rounded-sm inline-flex items-center justify-center gap-2"
              >
                銘柄を探す
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
              <a
                href="#guide"
                className="btn-outline-amber px-8 py-4 text-sm rounded-sm inline-flex items-center justify-center gap-2"
              >
                購入ガイドを読む
              </a>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 scroll-indicator">
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs tracking-widest" style={{ color: "#8B7355" }}>SCROLL</span>
            <div className="w-px h-12" style={{ background: "linear-gradient(to bottom, #C9A84C, transparent)" }} />
          </div>
        </div>
      </section>

      {/* ===== Brand Stats Section ===== */}
      <section className="py-16 border-y" style={{ borderColor: "rgba(201, 168, 76, 0.15)", backgroundColor: "rgba(181, 101, 29, 0.05)" }}>
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { num: "100+", label: "年の歴史", sub: "1923年創業" },
              { num: "50+", label: "国際受賞", sub: "世界最高峰の評価" },
              { num: "3", label: "主要蒸溜所", sub: "山崎・白州・知多" },
              { num: "180+", label: "カ国で愛飲", sub: "グローバルブランド" },
            ].map((stat, i) => {
              const { ref, isVisible } = useScrollReveal();
              return (
                <div
                  key={i}
                  ref={ref}
                  className={`text-center transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <p className="text-4xl font-black mb-1 text-gold-gradient" style={{ fontFamily: "'Playfair Display', serif" }}>
                    {stat.num}
                  </p>
                  <p className="text-sm font-medium mb-1" style={{ color: "#F5F0E8", fontFamily: "'Noto Serif JP', serif" }}>
                    {stat.label}
                  </p>
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
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.4em] uppercase mb-4" style={{ color: "#C9A84C", fontFamily: "'Cormorant Garamond', serif" }}>
              The Collection
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: "'Noto Serif JP', serif", color: "#F5F0E8" }}>
              三大銘柄 完全解説
            </h2>
            <p className="text-sm max-w-xl mx-auto" style={{ color: "rgba(245, 240, 232, 0.6)" }}>
              山崎・白州・響それぞれの個性、テイスティングノート、購入方法を詳しく解説します
            </p>
            <hr className="amber-rule mt-8 max-w-xs mx-auto" />
          </div>
          
          {/* Product Cards Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {products.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* ===== Distillery Story Section ===== */}
      <section className="py-24 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${IMAGES.barrels})`, filter: "brightness(0.25)" }}
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(13,11,7,0.9) 0%, rgba(13,11,7,0.6) 100%)" }} />
        
        <div className="container relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs tracking-[0.4em] uppercase mb-4" style={{ color: "#C9A84C", fontFamily: "'Cormorant Garamond', serif" }}>
                The Story
              </p>
              <h2 className="text-4xl font-bold mb-6" style={{ fontFamily: "'Noto Serif JP', serif", color: "#F5F0E8" }}>
                熟成の時間が
                <br />
                生む、深み
              </h2>
              <p className="text-sm leading-relaxed mb-6" style={{ color: "rgba(245, 240, 232, 0.75)" }}>
                ジャパニーズウイスキーの歴史は1923年、鳥井信治郎が山崎に日本初のモルトウイスキー蒸溜所を建設したことに始まります。
                日本の四季と豊かな自然水が育む独自の熟成環境が、世界に類を見ない繊細で複雑な風味を生み出します。
              </p>
              <p className="text-sm leading-relaxed mb-8" style={{ color: "rgba(245, 240, 232, 0.75)" }}>
                ミズナラ（水楢）樽を使った熟成は日本独自の技法で、バニラ・ビャクダン・ほのかなお香のような独特の香りを付与します。
                この「ジャパニーズオーク」の風味こそ、世界のウイスキー愛好家を魅了する秘密です。
              </p>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { label: "ミズナラ樽", desc: "日本独自の熟成" },
                  { label: "シェリー樽", desc: "甘く豊かな香り" },
                  { label: "バーボン樽", desc: "バニラの甘さ" },
                ].map((item) => (
                  <div key={item.label} className="text-center p-3 rounded-sm" style={{ border: "1px solid rgba(201, 168, 76, 0.2)" }}>
                    <p className="text-xs font-bold mb-1" style={{ color: "#C9A84C", fontFamily: "'Noto Serif JP', serif" }}>{item.label}</p>
                    <p className="text-xs" style={{ color: "#8B7355" }}>{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <img
                src={IMAGES.glass}
                alt="プレミアムウイスキーグラス"
                className="w-full rounded-sm"
                style={{ maxHeight: "500px", objectFit: "cover" }}
              />
              <div
                className="absolute -bottom-4 -left-4 p-6 rounded-sm"
                style={{ backgroundColor: "rgba(13, 11, 7, 0.9)", border: "1px solid rgba(201, 168, 76, 0.3)" }}
              >
                <p className="text-xs tracking-widest uppercase mb-1" style={{ color: "#C9A84C" }}>Tasting Note</p>
                <p className="text-sm italic" style={{ color: "#F5F0E8", fontFamily: "'Playfair Display', serif" }}>
                  "複雑で深みのある<br/>琥珀色の芸術"
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Purchase Guide Section ===== */}
      <section id="guide" className="py-24">
        <div className="container">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.4em] uppercase mb-4" style={{ color: "#C9A84C", fontFamily: "'Cormorant Garamond', serif" }}>
              Buying Guide
            </p>
            <h2 className="text-4xl font-bold mb-4" style={{ fontFamily: "'Noto Serif JP', serif", color: "#F5F0E8" }}>
              賢い購入ガイド
            </h2>
            <p className="text-sm max-w-xl mx-auto" style={{ color: "rgba(245, 240, 232, 0.6)" }}>
              希少なジャパニーズウイスキーを最安値・最適な方法で入手するためのガイド
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* 楽天 */}
            <div className="p-8 rounded-sm border" style={{ borderColor: "rgba(201, 168, 76, 0.2)", backgroundColor: "rgba(26, 18, 8, 0.8)" }}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold" style={{ backgroundColor: "rgba(181, 101, 29, 0.3)", color: "#C9A84C", fontFamily: "'Noto Serif JP', serif" }}>
                  楽
                </div>
                <div>
                  <h3 className="text-lg font-bold" style={{ fontFamily: "'Noto Serif JP', serif", color: "#F5F0E8" }}>楽天市場</h3>
                  <p className="text-xs" style={{ color: "#C9A84C" }}>報酬率 4.0% · ポイント還元あり</p>
                </div>
              </div>
              <ul className="space-y-3 mb-6">
                {[
                  "楽天ポイントが貯まる・使える",
                  "楽天スーパーセール時に大幅割引",
                  "ギフト包装・熨斗対応が充実",
                  "レビュー数が多く参考にしやすい",
                  "楽天カード利用でさらにポイントアップ",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm" style={{ color: "rgba(245, 240, 232, 0.8)" }}>
                    <span style={{ color: "#C9A84C" }}>✦</span>
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href={AFFILIATE_LINKS.rakuten.yamazaki}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="btn-amber shimmer w-full flex items-center justify-center gap-2 px-6 py-3 text-sm font-bold rounded-sm"
              >
                楽天市場でウイスキーを探す →
              </a>
            </div>
            
            {/* Amazon */}
            <div className="p-8 rounded-sm border" style={{ borderColor: "rgba(201, 168, 76, 0.2)", backgroundColor: "rgba(26, 18, 8, 0.8)" }}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold" style={{ backgroundColor: "rgba(181, 101, 29, 0.3)", color: "#C9A84C", fontFamily: "'Noto Serif JP', serif" }}>
                  A
                </div>
                <div>
                  <h3 className="text-lg font-bold" style={{ fontFamily: "'Noto Serif JP', serif", color: "#F5F0E8" }}>Amazon</h3>
                  <p className="text-xs" style={{ color: "#C9A84C" }}>報酬率 8.0% · 翌日配送対応</p>
                </div>
              </div>
              <ul className="space-y-3 mb-6">
                {[
                  "Primeなら翌日〜2日以内に配送",
                  "お酒カテゴリで報酬率8%と高率",
                  "定期おトク便で継続購入が割安",
                  "返品・交換ポリシーが明確",
                  "Alexa連携でリピート購入が簡単",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm" style={{ color: "rgba(245, 240, 232, 0.8)" }}>
                    <span style={{ color: "#C9A84C" }}>✦</span>
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href={AFFILIATE_LINKS.amazon.yamazaki}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="btn-outline-amber w-full flex items-center justify-center gap-2 px-6 py-3 text-sm rounded-sm"
              >
                Amazonでウイスキーを探す →
              </a>
            </div>
          </div>
          
          {/* Price Comparison Table */}
          <div className="rounded-sm border overflow-hidden" style={{ borderColor: "rgba(201, 168, 76, 0.2)" }}>
            <div className="p-6" style={{ backgroundColor: "rgba(181, 101, 29, 0.1)" }}>
              <h3 className="text-lg font-bold" style={{ fontFamily: "'Noto Serif JP', serif", color: "#F5F0E8" }}>
                銘柄別 参考価格表（2026年現在）
              </h3>
              <p className="text-xs mt-1" style={{ color: "#8B7355" }}>
                ※ 市場価格は需給により大きく変動します。最新価格は各リンクよりご確認ください。
              </p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr style={{ borderBottom: "1px solid rgba(201, 168, 76, 0.2)", backgroundColor: "rgba(26, 18, 8, 0.9)" }}>
                    {["銘柄", "種別", "定価（税込）", "市場価格目安", "入手難易度"].map((h) => (
                      <th key={h} className="px-4 py-3 text-left text-xs tracking-wider" style={{ color: "#C9A84C" }}>
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    { name: "山崎 NV", type: "シングルモルト", price: "¥5,500", market: "¥6,000〜¥12,000", difficulty: "★★★☆☆" },
                    { name: "山崎 12年", type: "シングルモルト", price: "¥12,100", market: "¥30,000〜¥80,000", difficulty: "★★★★☆" },
                    { name: "山崎 18年", type: "シングルモルト", price: "¥38,500", market: "¥150,000〜¥300,000", difficulty: "★★★★★" },
                    { name: "白州 NV", type: "シングルモルト", price: "¥5,500", market: "¥6,000〜¥12,000", difficulty: "★★★☆☆" },
                    { name: "白州 12年", type: "シングルモルト", price: "¥12,100", market: "¥25,000〜¥70,000", difficulty: "★★★★☆" },
                    { name: "響 JH", type: "ブレンデッド", price: "¥5,500", market: "¥7,000〜¥15,000", difficulty: "★★★☆☆" },
                    { name: "響 17年", type: "ブレンデッド", price: "生産終了", market: "¥80,000〜¥200,000", difficulty: "★★★★★" },
                    { name: "響 21年", type: "ブレンデッド", price: "¥55,000", market: "¥150,000〜¥400,000", difficulty: "★★★★★" },
                  ].map((row, i) => (
                    <tr
                      key={i}
                      style={{
                        borderBottom: "1px solid rgba(201, 168, 76, 0.1)",
                        backgroundColor: i % 2 === 0 ? "rgba(26, 18, 8, 0.8)" : "rgba(26, 18, 8, 0.5)",
                      }}
                    >
                      <td className="px-4 py-3 font-medium" style={{ color: "#F5F0E8", fontFamily: "'Noto Serif JP', serif" }}>{row.name}</td>
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

      {/* ===== Distillery Section ===== */}
      <section className="py-24 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${IMAGES.distillery})`, filter: "brightness(0.2)" }}
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(13,11,7,0.95) 0%, rgba(13,11,7,0.7) 60%, rgba(13,11,7,0.4) 100%)" }} />
        
        <div className="container relative z-10">
          <div className="max-w-2xl">
            <p className="text-xs tracking-[0.4em] uppercase mb-4" style={{ color: "#C9A84C", fontFamily: "'Cormorant Garamond', serif" }}>
              The Distilleries
            </p>
            <h2 className="text-4xl font-bold mb-8" style={{ fontFamily: "'Noto Serif JP', serif", color: "#F5F0E8" }}>
              三つの蒸溜所が
              <br />
              生む、三つの世界
            </h2>
            
            <div className="space-y-6">
              {[
                {
                  name: "山崎蒸溜所",
                  location: "大阪府三島郡島本町",
                  year: "1923年創業",
                  desc: "日本最古のモルトウイスキー蒸溜所。木津川・宇治川・桂川の三川合流地点に位置し、霧が多く湿度の高い環境が独特の熟成を生む。",
                },
                {
                  name: "白州蒸溜所",
                  location: "山梨県北杜市白州町",
                  year: "1973年創業",
                  desc: "標高約700mの南アルプス山麓に位置する「森の蒸溜所」。豊かな森林と清冽な水が、爽やかで清涼感あふれるウイスキーを生み出す。",
                },
                {
                  name: "知多蒸溜所",
                  location: "愛知県知多市",
                  year: "1972年創業",
                  desc: "グレーンウイスキー専門の蒸溜所。響のブレンドに欠かせない軽やかで甘いグレーン原酒を生産する。",
                },
              ].map((distillery, i) => {
                const { ref, isVisible } = useScrollReveal();
                return (
                  <div
                    key={i}
                    ref={ref}
                    className={`flex gap-4 transition-all duration-700 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}
                    style={{ transitionDelay: `${i * 150}ms` }}
                  >
                    <div className="flex-shrink-0 w-1 rounded-full" style={{ backgroundColor: "#C9A84C" }} />
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <h3 className="text-base font-bold" style={{ fontFamily: "'Noto Serif JP', serif", color: "#F5F0E8" }}>
                          {distillery.name}
                        </h3>
                        <span className="text-xs px-2 py-0.5 rounded-sm" style={{ backgroundColor: "rgba(201, 168, 76, 0.15)", color: "#C9A84C" }}>
                          {distillery.year}
                        </span>
                      </div>
                      <p className="text-xs mb-2" style={{ color: "#8B7355" }}>{distillery.location}</p>
                      <p className="text-sm" style={{ color: "rgba(245, 240, 232, 0.7)" }}>{distillery.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ===== Gift Guide Section ===== */}
      <section className="py-24" style={{ backgroundColor: "rgba(181, 101, 29, 0.05)" }}>
        <div className="container">
          <div className="text-center mb-12">
            <p className="text-xs tracking-[0.4em] uppercase mb-4" style={{ color: "#C9A84C", fontFamily: "'Cormorant Garamond', serif" }}>
              Gift Guide
            </p>
            <h2 className="text-4xl font-bold mb-4" style={{ fontFamily: "'Noto Serif JP', serif", color: "#F5F0E8" }}>
              ギフト選びの完全ガイド
            </h2>
            <p className="text-sm max-w-xl mx-auto" style={{ color: "rgba(245, 240, 232, 0.6)" }}>
              父の日・誕生日・お歳暮・結婚祝いに最適なプレミアムウイスキーをご提案
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                budget: "〜¥10,000",
                title: "エントリーギフト",
                desc: "ウイスキー入門者や普段使いのギフトに",
                items: ["山崎 NV（¥5,500）", "白州 NV（¥5,500）", "響 Japanese Harmony（¥5,500）"],
                link: AFFILIATE_LINKS.rakuten.yamazaki,
              },
              {
                budget: "¥10,000〜¥50,000",
                title: "プレミアムギフト",
                desc: "特別な記念日や目上の方への贈り物に",
                items: ["山崎 12年（市場価格¥30,000〜）", "白州 12年（市場価格¥25,000〜）", "響 21年（¥55,000）"],
                link: AFFILIATE_LINKS.rakuten.yamazaki,
              },
              {
                budget: "¥50,000〜",
                title: "ラグジュアリーギフト",
                desc: "最高の感謝を伝える究極の一本",
                items: ["山崎 18年（市場価格¥150,000〜）", "響 21年 限定品", "山崎 25年（超希少品）"],
                link: AFFILIATE_LINKS.rakuten.yamazaki,
              },
            ].map((tier, i) => {
              const { ref, isVisible } = useScrollReveal();
              return (
                <div
                  key={i}
                  ref={ref}
                  className={`p-8 rounded-sm border transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                  style={{
                    borderColor: i === 1 ? "rgba(201, 168, 76, 0.5)" : "rgba(201, 168, 76, 0.2)",
                    backgroundColor: i === 1 ? "rgba(181, 101, 29, 0.1)" : "rgba(26, 18, 8, 0.8)",
                    transitionDelay: `${i * 150}ms`,
                  }}
                >
                  <p className="text-xs tracking-widest uppercase mb-2" style={{ color: "#C9A84C" }}>予算</p>
                  <p className="text-2xl font-bold mb-2" style={{ fontFamily: "'Playfair Display', serif", color: "#F5F0E8" }}>
                    {tier.budget}
                  </p>
                  <h3 className="text-base font-bold mb-2" style={{ fontFamily: "'Noto Serif JP', serif", color: "#F5F0E8" }}>
                    {tier.title}
                  </h3>
                  <p className="text-xs mb-4" style={{ color: "#8B7355" }}>{tier.desc}</p>
                  <hr className="amber-rule mb-4" />
                  <ul className="space-y-2 mb-6">
                    {tier.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm" style={{ color: "rgba(245, 240, 232, 0.8)" }}>
                        <span style={{ color: "#C9A84C" }}>✦</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={tier.link}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className={`w-full flex items-center justify-center gap-2 px-6 py-3 text-sm rounded-sm ${i === 1 ? "btn-amber shimmer font-bold" : "btn-outline-amber"}`}
                  >
                    楽天で探す →
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
            <p className="text-xs tracking-[0.4em] uppercase mb-4" style={{ color: "#C9A84C", fontFamily: "'Cormorant Garamond', serif" }}>
              FAQ
            </p>
            <h2 className="text-4xl font-bold mb-4" style={{ fontFamily: "'Noto Serif JP', serif", color: "#F5F0E8" }}>
              よくある質問
            </h2>
          </div>
          
          <div className="border-t" style={{ borderColor: "rgba(201, 168, 76, 0.2)" }}>
            {faqs.map((faq, i) => (
              <FAQItem key={i} q={faq.q} a={faq.a} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ===== Final CTA Section ===== */}
      <section className="py-24 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${IMAGES.collection})`, filter: "brightness(0.2)" }}
        />
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at center, rgba(181,101,29,0.15) 0%, rgba(13,11,7,0.95) 70%)" }} />
        
        <div className="container relative z-10 text-center">
          <p className="text-xs tracking-[0.4em] uppercase mb-4" style={{ color: "#C9A84C", fontFamily: "'Cormorant Garamond', serif" }}>
            Find Your Bottle
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: "'Noto Serif JP', serif", color: "#F5F0E8" }}>
            あなたの一本を
            <br />
            見つけよう
          </h2>
          <p className="text-sm max-w-lg mx-auto mb-10" style={{ color: "rgba(245, 240, 232, 0.7)" }}>
            山崎・白州・響の最新在庫と最安値を楽天市場・Amazonで確認できます。
            特別な一本との出会いが、あなたを待っています。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={AFFILIATE_LINKS.rakuten.yamazaki}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="btn-amber shimmer px-10 py-4 text-sm font-bold rounded-sm inline-flex items-center justify-center gap-2"
            >
              楽天市場で探す
            </a>
            <a
              href={AFFILIATE_LINKS.amazon.yamazaki}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="btn-outline-amber px-10 py-4 text-sm rounded-sm inline-flex items-center justify-center gap-2"
            >
              Amazonで探す
            </a>
          </div>
        </div>
      </section>

      {/* ===== Footer ===== */}
      <footer className="py-12 border-t" style={{ borderColor: "rgba(201, 168, 76, 0.15)", backgroundColor: "#0A0805" }}>
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <p className="text-sm font-bold mb-3" style={{ color: "#F5F0E8", fontFamily: "'Noto Serif JP', serif" }}>
                ジャパニーズウイスキー完全ガイド
              </p>
              <p className="text-xs leading-relaxed mb-4" style={{ color: "#8B7355" }}>
                山崎・白州・響などのプレミアムジャパニーズウイスキーの購入ガイド、テイスティングノート、
                価格比較情報を提供するアフィリエイトサイトです。
              </p>
              <p className="text-xs" style={{ color: "#8B7355" }}>
                ⚠️ 本サイトは20歳以上の方を対象としています。<br />
                未成年者の飲酒は法律で禁止されています。
              </p>
            </div>
            <div>
              <p className="text-xs tracking-widest uppercase mb-4" style={{ color: "#C9A84C" }}>銘柄</p>
              {[
                { label: "山崎ウイスキー", href: "#yamazaki" },
                { label: "白州ウイスキー", href: "#hakushu" },
                { label: "響ウイスキー", href: "#hibiki" },
              ].map((link) => (
                <a key={link.label} href={link.href} className="block text-xs mb-2 hover:text-amber-400 transition-colors" style={{ color: "#8B7355" }}>
                  {link.label}
                </a>
              ))}
            </div>
            <div>
              <p className="text-xs tracking-widest uppercase mb-4" style={{ color: "#C9A84C" }}>購入先</p>
              {[
                { label: "楽天市場で探す", href: AFFILIATE_LINKS.rakuten.yamazaki },
                { label: "Amazonで探す", href: AFFILIATE_LINKS.amazon.yamazaki },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="block text-xs mb-2 hover:text-amber-400 transition-colors"
                  style={{ color: "#8B7355" }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
          
          <hr className="amber-rule mb-6" />
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs" style={{ color: "#8B7355" }}>
              © 2026 ジャパニーズウイスキー完全ガイド. All rights reserved.
            </p>
            <p className="text-xs text-center" style={{ color: "#8B7355" }}>
              本サイトはアフィリエイトプログラム（楽天アフィリエイト・Amazonアソシエイト）に参加しています。
              掲載リンクから購入された場合、当サイトに報酬が発生することがあります。
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
