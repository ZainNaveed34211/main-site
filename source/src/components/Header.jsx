import { useEffect, useRef, useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const searchInput = useRef(null);
  useEffect(() => {
    if (searchOpen && searchInput.current) searchInput.current.focus();
  }, [searchOpen]);
  return (
    <header className="site-header">
      <div className="wrap header-inner">
        <a className="logo-link" href="/" aria-label="Kluzar home">
          <img className="logo-img" src="/logo.png" alt="Kluzar" width="120" height="60" />
        </a>
        <nav className={open ? "main-nav open" : "main-nav"} aria-label="Main navigation">
          <a href="/">Home</a>
          <a href="/services/">Services</a>
          <a href="/tech/">Tech Tools</a>
          <a href="/work/">Work</a>
          <a href="/about/">About</a>
          <a href="/#pricing">Pricing</a>
          <a href="/faq/">FAQ</a>
          <a href="https://support.kluzar.com">Support</a>
        </nav>
        <div>
          <button
            className="search-toggle"
            type="button"
            aria-label="Search"
            aria-expanded={searchOpen}
            onClick={() => setSearchOpen(!searchOpen)}
          >
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true">
              <circle cx="11" cy="11" r="7" />
              <line x1="16.5" y1="16.5" x2="21" y2="21" />
            </svg>
          </button>
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
        <div className={searchOpen ? "site-search-panel open" : "site-search-panel"}>
          <input
            ref={searchInput}
            className="site-search-input"
            type="search"
            data-site-search
            placeholder="Search Kluzar…"
            aria-label="Search Kluzar"
          />
        </div>
      </div>
    </header>
  );
}
