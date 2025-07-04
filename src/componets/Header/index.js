import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './index.css';

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

        <nav className={`header-nav ${menuOpen ? 'active' : ''}`}>
          <Link to="/" onClick={toggleMenu}>Home</Link>
          <Link to="/about" onClick={toggleMenu}>About</Link>
          <Link to="/service" onClick={toggleMenu}>Service</Link>
          <Link to="/project" onClick={toggleMenu}>Project</Link>
          <Link to="/contact" onClick={toggleMenu}>Contact</Link>
        </nav>

        <div className={`hamburger ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  );
};

export default Header;
