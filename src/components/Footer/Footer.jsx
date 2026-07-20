import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

import logo from "/src/assets/logo.jpeg";

function Footer() {

  return (

    <footer className="aurelia-footer">

      {/* Background */}

      <div className="footer-background-image"></div>

      <div className="footer-overlay"></div>

      <div className="footer-noise"></div>

      <div className="footer-light"></div>

      {/* Aura */}

      <div className="footer-aura aura-one"></div>

      <div className="footer-aura aura-two"></div>

      <div className="footer-aura aura-three"></div>

      {/* Floating Particles */}

      <span className="footer-particle p1"></span>

      <span className="footer-particle p2"></span>

      <span className="footer-particle p3"></span>

      <span className="footer-particle p4"></span>

      <span className="footer-particle p5"></span>

      <div className="footer-content">

        {/* ================= BRAND ================= */}

        <div className="footer-brand glass-card">

          <div className="footer-logo-box">

            <div className="logo-glow"></div>

            <span className="footer-ring ring1"></span>

            <span className="footer-ring ring2"></span>

            <img

              src={logo}

              alt="Aurelia"

              className="footer-logo"

            />

          </div>

          <h2>

            AURELIA

          </h2>

          <h4>

            EVENTS & EXPERIENCES

          </h4>

          <p>

            Crafting timeless celebrations,

            unforgettable experiences,

            and elegant moments

            filled with emotion,

            creativity,

            and perfection.

          </p>

          <div className="footer-socials">

            <a href="#">

              <i className="fab fa-facebook-f"></i>

            </a>

            <a href="#">

              <i className="fab fa-instagram"></i>

            </a>

            <a href="#">

              <i className="fab fa-youtube"></i>

            </a>

            <a href="#">

              <i className="fab fa-whatsapp"></i>

            </a>

          </div>

        </div>

        {/* ================= LINKS ================= */}

        <div className="footer-links glass-card">

          <h3>

            Explore

          </h3>

          <a href="#home">Home</a>

          <a href="#about">About</a>

          <a href="#services">Services</a>

          <a href="#gallery">Gallery</a>

          <Link to="/team">Our Team</Link>

          <a href="#faq">FAQ</a>

          <a href="#contact">Contact</a>

        </div>

        {/* ================= SERVICES ================= */}

        <div className="footer-links glass-card">

          <h3>

            Experiences

          </h3>

          <a href="#">Luxury Weddings</a>

          <a href="#">Corporate Events</a>

          <a href="#">Birthday Celebrations</a>

          <a href="#">Destination Weddings</a>

          <a href="#">Concerts</a>

          <a href="#">Private Parties</a>

          <a href="#">Luxury Decor</a>

        </div>

        {/* ================= CONTACT ================= */}

        <div className="footer-contact glass-card">

          <h3>

            Let's Create Something Beautiful

          </h3>

          <p>

            Have an idea?

            Let's turn it into

            an unforgettable event.

          </p>

          <a

            href="#contact"

            className="footer-btn"

          >

            Book Consultation

            <span>

              →

            </span>

          </a>

          <div className="footer-contact-info">

            <div>

              📞

              +91 6372770370

            </div>

            <div>

              ✉

              aureliaevents.bam@gmail.com

            </div>

            <div>

              📍

              Berhampur, Odisha

            </div>

          </div>

        </div>

      </div>

      {/* Bottom */}

      <div className="footer-bottom">

        <p>

          © 2026 Aurelia Events.

          All Rights Reserved.

        </p>

        <div className="footer-bottom-links">

          <a href="#">

            Privacy

          </a>

          <a href="#">

            Terms

          </a>

          <a href="#">

            Support

          </a>

        </div>

      </div>

    </footer>

  );

}

export default Footer;