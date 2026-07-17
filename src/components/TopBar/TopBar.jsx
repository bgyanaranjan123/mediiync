import React from "react";
import "./TopBar.css";

function TopBar() {
  return (
    <section className="aurelia-topbar">

      {/* Animated Background */}

      <div className="topbar-bg"></div>

      <div className="topbar-noise"></div>

      <div className="topbar-aura aura-one"></div>

      <div className="topbar-aura aura-two"></div>

      <div className="topbar-light"></div>

      {/* Left Side */}

      <div className="topbar-left">

        <a
          href="https://www.google.com/maps/search/?api=1&query=Berhampur%2C%20Odisha"
          target="_blank"
          rel="noreferrer"
          className="topbar-item"
        >

          <div className="icon-box">

            <i className="fa-solid fa-location-dot"></i>

          </div>

          <div className="text-box">

            <small>Location</small>

            <span>Berhampur, Odisha</span>

          </div>

        </a>

        <a
          href="mailto:aureliaevents.bam@gmail.com"
          className="topbar-item"
        >

          <div className="icon-box">

            <i className="fa-solid fa-envelope"></i>

          </div>

          <div className="text-box">

            <small>Email</small>

            <span>aureliaevents.bam@gmail.com</span>

          </div>

        </a>

        <div className="topbar-item">

          <div className="icon-box">

            <i className="fa-solid fa-phone"></i>

          </div>

          <div className="text-box">

            <small>Contact</small>

            <span>

              +91 6372770370

            </span>

          </div>

        </div>

      </div>

      {/* Right Side */}

      <div className="topbar-right">

        <a
          href="https://facebook.com"
          className="social-circle"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa-brands fa-facebook-f"></i>
        </a>

        <a
          href="https://instagram.com"
          className="social-circle"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa-brands fa-instagram"></i>
        </a>

        <a
          href="https://youtube.com"
          className="social-circle"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa-brands fa-youtube"></i>
        </a>

        <a
          href="https://wa.me/916372770370"
          className="social-circle"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa-brands fa-whatsapp"></i>
        </a>

      </div>

      <div className="topbar-bottom-line"></div>

    </section>
  );
}

export default TopBar;