import { useLocation } from "wouter";

export default function TermsOfService() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#0A0805", color: "#F5F0E8" }}>
      <header className="border-b py-4 px-6" style={{ borderColor: "rgba(201,168,76,0.2)" }}>
        <button
          onClick={() => setLocation("/")}
          className="text-sm hover:text-amber-400 transition-colors"
          style={{ color: "#C9A84C" }}
        >
          ← Japanese Whisky Guide
        </button>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold mb-2" style={{ fontFamily: "'Playfair Display', serif", color: "#C9A84C" }}>
          Terms of Service
        </h1>
        <p className="text-sm mb-10" style={{ color: "#8B7355" }}>Last updated: May 2026</p>

        <section className="mb-10">
          <h2 className="text-lg font-semibold mb-3" style={{ color: "#F5F0E8" }}>1. Acceptance of Terms</h2>
          <p className="text-sm leading-relaxed" style={{ color: "#A89070" }}>
            By accessing or using Japanese Whisky Guide ("the Site"), you agree to be bound by these Terms of Service.
            If you do not agree to these terms, please do not use this site.
            These terms may be updated at any time; continued use of the site constitutes acceptance of any changes.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-lg font-semibold mb-3" style={{ color: "#F5F0E8" }}>2. Age Restriction</h2>
          <p className="text-sm leading-relaxed" style={{ color: "#A89070" }}>
            This site contains information about alcoholic beverages. By using this site, you confirm that you are of
            legal drinking age in your country of residence (20 years of age or older in Japan).
            <strong style={{ color: "#F5F0E8" }}> Underage drinking is illegal and harmful. Do not use this site if you are under the legal drinking age.</strong>
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-lg font-semibold mb-3" style={{ color: "#F5F0E8" }}>3. Affiliate Links &amp; Disclosure</h2>
          <p className="text-sm leading-relaxed" style={{ color: "#A89070" }}>
            Japanese Whisky Guide participates in affiliate marketing programs. Some links on this site are affiliate links,
            meaning we may earn a commission if you click through and make a purchase — at no additional cost to you.
            Affiliate programs include but are not limited to: Rakuten Affiliate, Amazon Associates, AWIN,
            Adtraction, and impact.com.
          </p>
          <p className="text-sm leading-relaxed mt-3" style={{ color: "#A89070" }}>
            Our editorial content is independent of these affiliate relationships. We only feature products that we
            genuinely believe provide value to our readers.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-lg font-semibold mb-3" style={{ color: "#F5F0E8" }}>4. Accuracy of Information</h2>
          <p className="text-sm leading-relaxed" style={{ color: "#A89070" }}>
            We strive to provide accurate and up-to-date information regarding whisky products, tasting notes, and prices.
            However, product availability, pricing, and specifications are subject to change without notice.
            We are not responsible for inaccuracies originating from third-party retailers or affiliate partners.
            Always verify current pricing and availability directly with the retailer before making a purchase.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-lg font-semibold mb-3" style={{ color: "#F5F0E8" }}>5. No Professional Advice</h2>
          <p className="text-sm leading-relaxed" style={{ color: "#A89070" }}>
            Content on this site is for informational and entertainment purposes only. It does not constitute
            professional advice of any kind. We are not liable for any decisions made based on information found on this site.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-lg font-semibold mb-3" style={{ color: "#F5F0E8" }}>6. Intellectual Property</h2>
          <p className="text-sm leading-relaxed" style={{ color: "#A89070" }}>
            All original content on this site, including text, design, and code, is the property of Japanese Whisky Guide.
            You may not reproduce, distribute, or republish any content without prior written permission.
            Product names, brand names, and trademarks referenced on this site remain the property of their respective owners.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-lg font-semibold mb-3" style={{ color: "#F5F0E8" }}>7. Limitation of Liability</h2>
          <p className="text-sm leading-relaxed" style={{ color: "#A89070" }}>
            To the fullest extent permitted by law, Japanese Whisky Guide shall not be liable for any indirect,
            incidental, special, or consequential damages arising from your use of this site or any products purchased
            through affiliate links. Your use of this site is at your own risk.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-lg font-semibold mb-3" style={{ color: "#F5F0E8" }}>8. External Links</h2>
          <p className="text-sm leading-relaxed" style={{ color: "#A89070" }}>
            This site contains links to third-party websites. These links are provided for your convenience.
            We have no control over the content of those sites and accept no responsibility for them or for any
            loss or damage that may arise from your use of them.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-lg font-semibold mb-3" style={{ color: "#F5F0E8" }}>9. Governing Law</h2>
          <p className="text-sm leading-relaxed" style={{ color: "#A89070" }}>
            These Terms of Service shall be governed by and construed in accordance with the laws of Japan.
            Any disputes arising in connection with these terms shall be subject to the exclusive jurisdiction
            of the courts of Japan.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-lg font-semibold mb-3" style={{ color: "#F5F0E8" }}>10. Contact</h2>
          <p className="text-sm leading-relaxed" style={{ color: "#A89070" }}>
            For questions about these Terms of Service, please contact us at:{" "}
            <a href="mailto:7good7ness@gmail.com" style={{ color: "#C9A84C" }}>7good7ness@gmail.com</a>
          </p>
        </section>

        <hr style={{ borderColor: "rgba(201,168,76,0.2)" }} className="mb-6" />
        <p className="text-xs" style={{ color: "#8B7355" }}>⚠️ This site is intended for adults aged 20 and over. Underage drinking is prohibited by law.</p>
      </main>
    </div>
  );
}
