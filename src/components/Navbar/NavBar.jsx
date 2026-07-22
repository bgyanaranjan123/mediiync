import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className={`aurelia-navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <div className="navbar-bg"></div>
      <div className="navbar-noise"></div>
      <div className="navbar-light"></div>
      <div className="navbar-aura aura-one"></div>
      <div className="navbar-aura aura-two"></div>
      <div className="navbar-aura aura-three"></div>

      <Link to="/" className="aurelia-brand" onClick={closeMenu}>
        <div className="brand-logo">
          <div className="logo-ring ring-one"></div>
          <div className="logo-ring ring-two"></div>
          <div className="logo-glow"></div>
          <img src="/src/assets/logo.jpeg" alt="Aurelia Events" />
        </div>

        <div className="brand-content">
          <h2>AURELIA</h2>
          <p>EVENTS & EXPERIENCES</p>
        </div>
      </Link>

      <div className={`nav-links ${menuOpen ? "active" : ""}`}>
        <Link to="/" onClick={closeMenu}>
          <span>01</span>
          Home
        </Link>

        <a href="/about" onClick={closeMenu}>
          <span>02</span>
          About
        </a>

        <a href="/Services" onClick={closeMenu}>
          <span>03</span>
          Services
        </a>

        <a href="/Gallery" onClick={closeMenu}>
          <span>04</span>
          Gallery
        </a>

        <Link to="/team" onClick={closeMenu}>
          <span>05</span>
          Our Team
        </Link>

        <a href="/faq" onClick={closeMenu}>
          <span>06</span>
          FAQ
        </a>

        <a href="/contact" onClick={closeMenu}>
          <span>07</span>
          Contact
        </a>
      </div>

      <a href="/contact" className="navbar-button">
        Book Event
      </a>

      <button className={`menu-button ${menuOpen ? "open" : ""}`} onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div className="navbar-bottom-line"></div>
    </nav>
  );
}

export default Navbar;