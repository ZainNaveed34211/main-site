import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="wrap header-inner">
        <a className="logo-link" href="/" aria-label="Kluzar home">
          <img className="logo-img" src="/logo.png" alt="Kluzar" width="120" height="60" />
        </a>
        <nav className={open ? "main-nav open" : "main-nav"} aria-label="Main navigation">
          <a href="/">Home</a>
          <a href="/#services">Services</a>
          <a href="/#pricing">Pricing</a>
          <a href="/faq/">FAQ</a>
          <a href="https://support.kluzar.com">Support</a>
        </nav>
        <div>
          <a className="btn btn-dark header-support" href="https://support.kluzar.com">
            Support
          </a>
          <button
            className="nav-toggle"
            type="button"
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            Menu
          </button>
        </div>
      </div>
    </header>
  );
}
