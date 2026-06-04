import { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../../assets/stackly.webp"

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="header">

      {/* Logo */}
      <Link to="/" className="logo" onClick={closeMenu}>
        <img
          src={logo}
          alt="Stackly Logo"
        />
      </Link>

      {/* Navigation */}
      <nav className={`nav ${menuOpen ? "active" : ""}`}>
        <Link to="/" onClick={closeMenu}>Home</Link>
        <Link to="/about" onClick={closeMenu}>About</Link>
        <Link to="/services" onClick={closeMenu}>Services</Link>
        <Link to="/solutions" onClick={closeMenu}>Solutions</Link>
        <Link to="/login" onClick={closeMenu}>Login</Link>
        <Link to="/pricing" onClick={closeMenu}>Pricing</Link>
      </nav>

      {/* Hamburger */}
      <div
        className={`hamburger ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

    </header>
  );
}

export default Header;