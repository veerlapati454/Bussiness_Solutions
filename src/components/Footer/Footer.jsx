import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

import "./Footer.css";
import logo from "../../assets/stackly logo.webp";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Brand */}
        <div className="footer-brand">
          <Link to="/">
            <img
              src={logo}
              alt="Stackly Logo"
              className="footer-logo"
            />
          </Link>

          <p>
            Empowering businesses through modern digital innovation and
            scalable technology solutions.
          </p>

          <div className="social-icons">
            <Link to="/facebook"><FaFacebookF /></Link>
            <Link to="/instagram"><FaInstagram /></Link>
            <Link to="/linkedin"><FaLinkedinIn /></Link>
            <Link to="/twitter"><FaTwitter /></Link>
            <Link to="/youtube"><FaYoutube /></Link>
          </div>
        </div>

        {/* Services */}
        <div className="footer-links">
          <h4>Services</h4>
          <Link to="/consulting">Consulting</Link>
          <Link to="/cloud-solutions">Cloud Solutions</Link>
          <Link to="/software-development">Software Development</Link>
        </div>

        {/* Company */}
        <div className="footer-links">
          <h4>Company</h4>
          <Link to="/about">About Us</Link>
          <Link to="/careers">Careers</Link>
          
        </div>

        {/* Contact */}
        <div className="footer-links">
          <h4>Contact Us</h4>

          <div className="contact-item">
            <FaMapMarkerAlt />
            <span>Hyderabad, India</span>
          </div>

          <div className="contact-item">
            <FaPhoneAlt />
            <span>+91 98765 43210</span>
          </div>

          <div className="contact-item">
            <FaEnvelope />
            <span>info@stackly.com</span>
          </div>
        </div>

      </div>
      <div className="footer-divider"></div>

      <div className="copyright">
        © 2026 Stackly. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;