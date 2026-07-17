import React, { useState, useEffect } from "react";
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

    <nav
      className={`aurelia-navbar ${
        scrolled ? "navbar-scrolled" : ""
      }`}
    >

      {/* BACKGROUND */}

      <div className="navbar-bg"></div>

      <div className="navbar-noise"></div>

      <div className="navbar-light"></div>

      <div className="navbar-aura aura-one"></div>

      <div className="navbar-aura aura-two"></div>

      <div className="navbar-aura aura-three"></div>

      {/* BRAND */}

      <a
        href="#home"
        className="aurelia-brand"
        onClick={closeMenu}
      >

        <div className="brand-logo">

          <div className="logo-ring ring-one"></div>

          <div className="logo-ring ring-two"></div>

          <div className="logo-glow"></div>

          <img
            src="/src/assets/logo.jpeg"
            alt="Aurelia Events"
          />

        </div>

        <div className="brand-content">

          <h2>

            AURELIA

          </h2>

          <p>

            EVENTS & EXPERIENCES

          </p>

        </div>

      </a>

      {/* NAVIGATION */}

      <div
        className={`nav-links ${
          menuOpen ? "active" : ""
        }`}
      >

        <a href="#home" onClick={closeMenu}>
          <span>01</span>
          Home
        </a>

        <a href="#about" onClick={closeMenu}>
          <span>02</span>
          About
        </a>

        <a href="#services" onClick={closeMenu}>
          <span>03</span>
          Services
        </a>

        <a href="#gallery" onClick={closeMenu}>
          <span>04</span>
          Gallery
        </a>

        <a href="#team" onClick={closeMenu}>
          <span>05</span>
          Our Team
        </a>

        <a href="#faq" onClick={closeMenu}>
          <span>06</span>
          FAQ
        </a>

        <a href="#contact" onClick={closeMenu}>
          <span>07</span>
          Contact
        </a>

      </div>

      {/* CTA */}

      <a
        href="#contact"
        className="navbar-button"
      >

        Book Event

      </a>

      {/* MOBILE */}

      <button

        className={`menu-button ${
          menuOpen ? "open" : ""
        }`}

        onClick={() => setMenuOpen(!menuOpen)}

      >

        <span></span>

        <span></span>

        <span></span>

      </button>

      {/* Bottom Animated Line */}

      <div className="navbar-bottom-line"></div>

    </nav>

  );

}

export default Navbar;