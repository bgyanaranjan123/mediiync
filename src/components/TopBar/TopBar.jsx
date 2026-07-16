import React from "react";
import "./TopBar.css";

const TopBar = () => {
  return (
    <div className="aurelia-topbar">

      {/* Animated Aura */}

      <div className="topbar-aura topbar-aura-left"></div>
      <div className="topbar-aura topbar-aura-right"></div>


      {/* Contact Information */}

      <div className="topbar-contact">

        <a
          href="https://www.google.com/maps/search/?api=1&query=Berhampur%2C%20Odisha"
          target="_blank"
          rel="noopener noreferrer"
          className="topbar-item"
        >

          <span className="topbar-icon">
            <i className="fa-solid fa-location-dot"></i>
          </span>

          <span>
            Berhampur, Odisha
          </span>

        </a>


        <a
          href="mailto:theeventwala.bam@gmail.com"
          className="topbar-item"
        >

          <span className="topbar-icon">
            <i className="fa-solid fa-envelope"></i>
          </span>

          <span>
            aureliaevents.bam@gmail.com
          </span>

        </a>


        <div className="topbar-item">

          <span className="topbar-icon">
            <i className="fa-solid fa-phone"></i>
          </span>

          <span>
            6372770370
            <b> · </b>
            8917357254
            <b> · </b>
            9668089696
          </span>

        </div>

      </div>


      {/* SOCIAL MEDIA */}

      <div className="topbar-socials">

        <a
          href="https://www.facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          className="topbar-social facebook"
        >

          <i className="fa-brands fa-facebook-f"></i>

        </a>


        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="topbar-social instagram"
        >

          <i className="fa-brands fa-instagram"></i>

        </a>


        <a
          href="https://www.youtube.com/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="YouTube"
          className="topbar-social youtube"
        >

          <i className="fa-brands fa-youtube"></i>

        </a>


        <a
          href="https://wa.me/916372770370"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
          className="topbar-social whatsapp"
        >

          <i className="fa-brands fa-whatsapp"></i>

        </a>

      </div>

    </div>
  );
};

export default TopBar;