export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-grid">
          <div className="footer-brand">
            <a href="/" aria-label="Kluzar home">
              <img src="/logo.png" alt="Kluzar" width="120" height="60" />
            </a>
            <p>
              Kluzar creates digital products, websites and business-focused digital solutions for
              companies worldwide.
            </p>
          </div>
          <div>
            <h3>Navigate</h3>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/services/">Services</a>
              </li>
              <li>
                <a href="/tech/">Tech Tools</a>
              </li>
              <li>
                <a href="/work/">Work</a>
              </li>
              <li>
                <a href="/about/">About</a>
              </li>
              <li>
                <a href="/#pricing">Pricing</a>
              </li>
              <li>
                <a href="/faq/">FAQ</a>
              </li>
              <li>
                <a href="/contact/">Contact</a>
              </li>
            </ul>
          </div>
          <div>
            <h3>Kluzar</h3>
            <ul>
              <li>
                <a href="https://dash.kluzar.com/">Dashboard</a>
              </li>
              <li>
                <a href="https://payments.kluzar.com/">Payments</a>
              </li>
              <li>
                <a href="https://blog.kluzar.com/">Blog</a>
              </li>
              <li>
                <a href="https://tech.kluzar.com/">Tech Tools</a>
              </li>
              <li>
                <a href="https://support.kluzar.com">Support</a>
              </li>
              <li>
                <a href="https://www.youtube.com/@kluzar.official">YouTube</a>
              </li>
              <li>
                <a href="mailto:info@kluzar.com">info@kluzar.com</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© Kluzar, 2026.</span>
          <nav className="footer-legal" aria-label="Legal">
            <a href="/privacy/">Privacy</a>
            <a href="/terms/">Terms</a>
            <a href="/refund/">Refund</a>
            <a href="/payment-terms/">Payment Terms</a>
            <a href="/disclaimer/">Disclaimer</a>
            <a href="/sitemap/">Sitemap</a>
          </nav>
          <span>Sialkot, Pakistan — Serving businesses worldwide.</span>
        </div>
      </div>
    </footer>
  );
}
