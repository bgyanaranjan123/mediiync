import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="aurelia-navbar">

      {/* AURA BACKGROUND */}
      <div className="navbar-aura aura-left"></div>
      <div className="navbar-aura aura-right"></div>


      {/* BRAND */}

      <a
        href="#home"
        className="aurelia-brand"
        onClick={closeMenu}
      >

        <div className="aurelia-navbar-logo">

          <span className="navbar-orbit orbit-one"></span>
          <span className="navbar-orbit orbit-two"></span>

          <img
            src="/src/assets/logo.jpg"
            alt="The Event Wala Logo"
          />

        </div>


        <div className="brand-text">

          <span className="brand-title">
            AURELIA
          </span>

          <span className="brand-subtitle">
            EVENTS & EXPERIENCES
          </span>

        </div>

      </a>

{/* NAVIGATION */}

<div
  className={`aurelia-nav-links ${
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
    <span>06</span>
    Contact
  </a>

</div>
      {/* MOBILE MENU BUTTON */}

      <button
        className={`aurelia-menu-button ${
          menuOpen ? "open" : ""
        }`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation"
      >

        <span></span>
        <span></span>
        <span></span>

      </button>

    </nav>
  );
};

export default Navbar;