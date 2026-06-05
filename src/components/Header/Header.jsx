import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";
import logo from "../../assets/stackly logo.webp";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/solutions", label: "Solutions" },
  { to: "/pricing", label: "Pricing" },
];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [indicatorStyle, setIndicatorStyle] = useState({});
  const navRef = useRef(null);
  const location = useLocation();

  const closeMenu = () => setMenuOpen(false);

  /* Scroll-based glass effect */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Lock body scroll when mobile menu is open */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  /* Active nav indicator */
  useEffect(() => {
    if (!navRef.current) return;
    const activeLink = navRef.current.querySelector(".nav-link.active");
    if (activeLink) {
      const { offsetLeft, offsetWidth } = activeLink;
      setIndicatorStyle({ left: offsetLeft, width: offsetWidth });
    }
  }, [location.pathname]);

  return (
    <>
      <header className={`header ${scrolled ? "scrolled" : ""}`}>
        {/* Logo */}
        <Link to="/" className="logo" onClick={closeMenu}>
          <img src={logo} alt="Stackly" />
        </Link>

        {/* Desktop Nav */}
        <nav className="nav-desktop" ref={navRef}>
          {navLinks.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className={`nav-link ${location.pathname === to ? "active" : ""}`}
            >
              {label}
            </Link>
          ))}
          {/* Sliding active indicator */}
          <span className="nav-indicator" style={indicatorStyle} />
        </nav>

        {/* CTA + Hamburger */}
        <div className="header-actions">
          <Link to="/login" className="btn-login" onClick={closeMenu}>
            Login
          </Link>
          <Link to="/start-project" className="btn-cta" onClick={closeMenu}>
            Get Started
          </Link>

          <button
            className={`hamburger ${menuOpen ? "open" : ""}`}
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        className={`mobile-overlay ${menuOpen ? "visible" : ""}`}
        onClick={closeMenu}
      />

      <nav className={`mobile-nav ${menuOpen ? "open" : ""}`}>
        <div className="mobile-nav-inner">
          {navLinks.map(({ to, label }, i) => (
            <Link
              key={to}
              to={to}
              className={`mobile-link ${location.pathname === to ? "active" : ""}`}
              onClick={closeMenu}
              style={{ animationDelay: menuOpen ? `${i * 60}ms` : "0ms" }}
            >
              <span className="mobile-link-num">0{i + 1}</span>
              {label}
            </Link>
          ))}

          <div className="mobile-nav-footer">
            <Link to="/login" className="btn-login mobile" onClick={closeMenu}>Login</Link>
            <Link to="/start-project" className="btn-cta mobile" onClick={closeMenu}>Get Started</Link>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;