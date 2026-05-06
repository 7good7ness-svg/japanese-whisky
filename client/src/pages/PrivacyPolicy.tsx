import { useLocation } from "wouter";

export default function PrivacyPolicy() {
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
          Privacy Policy
        </h1>
        <p className="text-sm mb-10" style={{ color: "#8B7355" }}>Last updated: May 2026</p>

        <section className="mb-10">
          <h2 className="text-lg font-semibold mb-3" style={{ color: "#F5F0E8" }}>1. Overview</h2>
          <p className="text-sm leading-relaxed" style={{ color: "#A89070" }}>
            Japanese Whisky Guide ("we", "our", or "this site") is committed to protecting your privacy.
            This Privacy Policy explains what information we collect, how we use it, and your rights regarding that information.
            By using this website, you agree to the terms described below.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-lg font-semibold mb-3" style={{ color: "#F5F0E8" }}>2. Information We Collect</h2>
          <p className="text-sm leading-relaxed mb-3" style={{ color: "#A89070" }}>
            We do not collect personally identifiable information unless you voluntarily provide it (e.g., via a contact form).
            However, the following data may be collected automatically when you visit our site:
          </p>
          <ul className="list-disc list-inside text-sm leading-relaxed space-y-1" style={{ color: "#A89070" }}>
            <li>Browser type and version</li>
            <li>Pages visited and time spent on each page</li>
            <li>Referring URL</li>
            <li>IP address (anonymised where possible)</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-lg font-semibold mb-3" style={{ color: "#F5F0E8" }}>3. Cookies &amp; Tracking Technologies</h2>
          <p className="text-sm leading-relaxed mb-3" style={{ color: "#A89070" }}>
            This site uses cookies and similar tracking technologies for the following purposes:
          </p>
          <ul className="list-disc list-inside text-sm leading-relaxed space-y-1" style={{ color: "#A89070" }}>
            <li><strong style={{ color: "#C9A84C" }}>Analytics:</strong> We use Google Analytics to understand how visitors interact with our site. Google may set cookies on your device.</li>
            <li><strong style={{ color: "#C9A84C" }}>Affiliate tracking:</strong> When you click an affiliate link, third-party affiliate networks (Rakuten, Amazon Associates, AWIN, Adtraction, impact.com) may set tracking cookies to attribute purchases to our site.</li>
            <li><strong style={{ color: "#C9A84C" }}>Functional:</strong> We may store your language preference (English/Japanese) locally in your browser.</li>
          </ul>
          <p className="text-sm leading-relaxed mt-3" style={{ color: "#A89070" }}>
            You may disable cookies through your browser settings, though some features of the site may not function correctly if you do so.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-lg font-semibold mb-3" style={{ color: "#F5F0E8" }}>4. Affiliate Disclosure</h2>
          <p className="text-sm leading-relaxed" style={{ color: "#A89070" }}>
            This site participates in affiliate marketing programs including Rakuten Affiliate, Amazon Associates, AWIN,
            Adtraction, and impact.com. When you click on a product link and make a purchase, we may receive a commission
            at no additional cost to you. We only recommend products we believe are genuinely useful to our readers.
            Affiliate relationships do not influence our editorial content.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-lg font-semibold mb-3" style={{ color: "#F5F0E8" }}>5. Third-Party Services</h2>
          <p className="text-sm leading-relaxed mb-3" style={{ color: "#A89070" }}>
            Our site links to and integrates with third-party services. Each has its own privacy policy:
          </p>
          <ul className="list-disc list-inside text-sm leading-relaxed space-y-1" style={{ color: "#A89070" }}>
            <li>Google Analytics — <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" style={{ color: "#C9A84C" }}>Google Privacy Policy</a></li>
            <li>Rakuten Affiliate — <a href="https://affiliate.rakuten.co.jp/" target="_blank" rel="noopener noreferrer" style={{ color: "#C9A84C" }}>Rakuten Affiliate</a></li>
            <li>Amazon Associates — <a href="https://www.amazon.co.jp/" target="_blank" rel="noopener noreferrer" style={{ color: "#C9A84C" }}>Amazon.co.jp</a></li>
            <li>AWIN — <a href="https://www.awin.com/gb/legal/privacy-policy" target="_blank" rel="noopener noreferrer" style={{ color: "#C9A84C" }}>AWIN Privacy Policy</a></li>
            <li>Adtraction — <a href="https://adtraction.com/privacy-policy" target="_blank" rel="noopener noreferrer" style={{ color: "#C9A84C" }}>Adtraction Privacy Policy</a></li>
            <li>impact.com — <a href="https://impact.com/privacy-policy/" target="_blank" rel="noopener noreferrer" style={{ color: "#C9A84C" }}>impact.com Privacy Policy</a></li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-lg font-semibold mb-3" style={{ color: "#F5F0E8" }}>6. Data Retention &amp; Security</h2>
          <p className="text-sm leading-relaxed" style={{ color: "#A89070" }}>
            We do not store personal data on our servers. Any contact form submissions are handled via secure email and
            are retained only as long as necessary to respond to your enquiry. We take reasonable measures to protect
            your data but cannot guarantee the security of data transmitted over the internet.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-lg font-semibold mb-3" style={{ color: "#F5F0E8" }}>7. Your Rights</h2>
          <p className="text-sm leading-relaxed" style={{ color: "#A89070" }}>
            You have the right to request access to, correction of, or deletion of any personal data we hold about you.
            To exercise these rights, please contact us at the address below. For residents of the EU/EEA, you also have
            the right to lodge a complaint with your local data protection authority.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-lg font-semibold mb-3" style={{ color: "#F5F0E8" }}>8. Changes to This Policy</h2>
          <p className="text-sm leading-relaxed" style={{ color: "#A89070" }}>
            We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated
            revision date. Continued use of the site after changes constitutes acceptance of the updated policy.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-lg font-semibold mb-3" style={{ color: "#F5F0E8" }}>9. Contact</h2>
          <p className="text-sm leading-relaxed" style={{ color: "#A89070" }}>
            If you have any questions about this Privacy Policy, please contact us at:{" "}
            <a href="mailto:7good7ness@gmail.com" style={{ color: "#C9A84C" }}>7good7ness@gmail.com</a>
          </p>
        </section>

        <hr style={{ borderColor: "rgba(201,168,76,0.2)" }} className="mb-6" />
        <p className="text-xs" style={{ color: "#8B7355" }}>⚠️ This site is intended for adults aged 20 and over. Underage drinking is prohibited by law.</p>
      </main>
    </div>
  );
}
