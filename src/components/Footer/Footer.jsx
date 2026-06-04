import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube
} from "react-icons/fa";

import "./Footer.css";
import logo from "../../assets/stackly logo.webp";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Logo Section */}
        <div className="footer-brand">

          <Link to="/">
            <img
              src={logo}
              alt="Stackly Logo"
              className="footer-logo"
            />
          </Link>

          <p>
            Empowering businesses through modern digital
            innovation and scalable technology solutions.
          </p>

          {/* Social Icons */}
          <div className="social-icons">

            <Link to="/facebook">
              <FaFacebookF />
            </Link>

            <Link to="/instagram">
              <FaInstagram />
            </Link>

            <Link to="/linkedin">
              <FaLinkedinIn />
            </Link>

            <Link to="/twitter">
              <FaTwitter />
            </Link>

            <Link to="/youtube">
              <FaYoutube />
            </Link>

          </div>

        </div>

        {/* Services */}
        <div>
          <h4>Services</h4>

          <Link to="/consulting">Consulting</Link>
          <Link to="/cloud-solutions">Cloud Solutions</Link>
          <Link to="/software-development">
            Software Development
          </Link>
        </div>

        {/* Company */}
        <div>
          <h4>Company</h4>

          <Link to="/about">About</Link>
          <Link to="/careers">Careers</Link>
          <Link to="/contact">Contact</Link>
        </div>

      </div>

      <div className="copyright">
        © 2026 Stackly. All rights reserved.
      </div>

    </footer>
  );
}

export default Footer;