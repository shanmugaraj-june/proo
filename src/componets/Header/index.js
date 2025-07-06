import React, { useState } from "react";
import { Link } from "react-scroll";
import "./index.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-left">
          <img src="/nav.jpg" alt="Logo" className="header-logo" />
          <span className="brand-name">Vinayaga</span>
          <span className="brand-sub">Construction</span>
        </div>

        <nav className={`header-nav ${menuOpen ? "active" : ""}`}>
          <Link to="home" smooth={true} duration={500} onClick={toggleMenu}>
            Home
          </Link>
          <Link to="about" smooth={true} duration={500} onClick={toggleMenu}>
            About
          </Link>
          <Link to="service" smooth={true} duration={500} onClick={toggleMenu}>
            Service
          </Link>
          <Link to="project" smooth={true} duration={500} onClick={toggleMenu}>
            Project
          </Link>
          <Link to="contact" smooth={true} duration={500} onClick={toggleMenu}>
            Contact
          </Link>
        </nav>

        <div
          className={`hamburger ${menuOpen ? "active" : ""}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  );
};

export default Header;
