import { useLocation } from "wouter";

export default function Contact() {
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

      <main className="max-w-2xl mx-auto px-6 py-16">
        <p className="text-xs tracking-widest uppercase mb-3" style={{ color: "#C9A84C" }}>Get in Touch</p>
        <h1 className="text-3xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif", color: "#F5F0E8" }}>
          Contact Us
        </h1>
        <p className="text-sm leading-relaxed mb-12" style={{ color: "#A89070" }}>
          Have a question about Japanese whisky, a product recommendation, or an enquiry about affiliate partnerships?
          We'd love to hear from you.
        </p>

        <div
          className="rounded-lg p-8 mb-10"
          style={{ backgroundColor: "rgba(201,168,76,0.05)", border: "1px solid rgba(201,168,76,0.2)" }}
        >
          <h2 className="text-sm tracking-widest uppercase mb-6" style={{ color: "#C9A84C" }}>Contact Information</h2>

          <div className="space-y-4">
            <div>
              <p className="text-xs uppercase tracking-widest mb-1" style={{ color: "#8B7355" }}>Email</p>
              <a
                href="mailto:7good7ness@gmail.com"
                className="text-sm hover:text-amber-300 transition-colors"
                style={{ color: "#F5F0E8" }}
              >
                7good7ness@gmail.com
              </a>
            </div>

            <div>
              <p className="text-xs uppercase tracking-widest mb-1" style={{ color: "#8B7355" }}>Website</p>
              <p className="text-sm" style={{ color: "#F5F0E8" }}>https://japanese-whisky.pages.dev</p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-widest mb-1" style={{ color: "#8B7355" }}>Response Time</p>
              <p className="text-sm" style={{ color: "#F5F0E8" }}>Within 2–3 business days</p>
            </div>
          </div>
        </div>

        <div
          className="rounded-lg p-6"
          style={{ backgroundColor: "rgba(201,168,76,0.03)", border: "1px solid rgba(201,168,76,0.1)" }}
        >
          <h2 className="text-sm tracking-widest uppercase mb-4" style={{ color: "#C9A84C" }}>Affiliate &amp; Business Enquiries</h2>
          <p className="text-sm leading-relaxed" style={{ color: "#A89070" }}>
            We are open to affiliate partnerships with premium spirits retailers and whisky brands.
            For partnership or collaboration enquiries, please email us with the subject line
            <strong style={{ color: "#F5F0E8" }}> "Affiliate Partnership"</strong>.
          </p>
        </div>

        <hr className="my-10" style={{ borderColor: "rgba(201,168,76,0.2)" }} />
        <p className="text-xs" style={{ color: "#8B7355" }}>⚠️ This site is intended for adults aged 20 and over. Underage drinking is prohibited by law.</p>
      </main>
    </div>
  );
}
