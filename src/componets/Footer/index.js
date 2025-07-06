import React from "react";
import { Link } from "react-scroll";
import "./index.css";

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-content">
        <div className="footer-left">
          <img src="/nav.jpg" className="footer-logo" alt="footer" />
          <h2 className="footer-title">Vinayaga Construction</h2>
          <p className="footer-desc">
            Building homes and dreams for over 15 years. We specialize in
            residential and commercial projects across Tamil Nadu.
          </p>
        </div>

        <div className="footer-middle">
          <h4>Quick Links</h4>
          <ul>
            <Link to="home" className="Link">
              {" "}
              <li>
                <p>Home</p>
              </li>
            </Link>
            <Link to="about" className="Link">
              <li>
                <p>About</p>
              </li>
            </Link>
            <Link to="service" className="Link">
              {" "}
              <li>
                <p>Services</p>
              </li>
            </Link>
            <Link to="project" className="Link">
              <li>
                <p>Projects</p>
              </li>
            </Link>
            <Link to="contact" className="Link">
              {" "}
              <li>
                <p>Contact</p>
              </li>
            </Link>
          </ul>
        </div>

        <div className="footer-right">
          <h4>Contact Us</h4>
          <p>📍karapaga Vinayagar Kovil Street Ekkatttuthangal chennai-32</p>
          <p>📞 +91 9092642503</p>
          <p>✉️ vinayagaconstruction2024@gmail.com</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 Vinayaga Construction. All Rights Reserved.</p>
        <div className="footer-policy">
          <p>Privacy Policy</p>
          <p>Terms & Conditions</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
