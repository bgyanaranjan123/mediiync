import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="aurelia-footer">

      {/* Full Footer Background Image */}

      <div className="footer-background-image"></div>

      {/* Soft Transparent Overlay */}

      <div className="footer-overlay"></div>


      {/* Aura Effects */}

      <div className="footer-aura footer-aura-one"></div>
      <div className="footer-aura footer-aura-two"></div>


      <div className="footer-content">


        {/* BRAND SECTION */}

        <div className="footer-brand">

          <div className="footer-logo-wrap">

            <span className="footer-orbit footer-orbit-one"></span>
            <span className="footer-orbit footer-orbit-two"></span>

            <img
              src="/src/assets/logo.jpg"
              alt="Aurelia Logo"
              className="footer-logo"
            />

          </div>


          <h2>
            AURELIA
          </h2>


          <p className="footer-tagline">
            Crafting Moments.
            <br />
            Creating Memories.
          </p>


          <p className="footer-description">

            We transform celebrations,
            ideas, and occasions into
            unforgettable experiences.

          </p>


          {/* SOCIAL ICONS */}

          <div className="aurelia-socials">


            {/* Instagram */}

            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="social-instagram"
            >

              <svg viewBox="0 0 24 24">

                <rect
                  x="3"
                  y="3"
                  width="18"
                  height="18"
                  rx="5"
                  ry="5"
                />

                <circle
                  cx="12"
                  cy="12"
                  r="4.2"
                />

                <circle
                  cx="17.5"
                  cy="6.5"
                  r="1"
                  className="instagram-dot"
                />

              </svg>

            </a>


            {/* Facebook */}

            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="social-facebook"
            >

              <svg viewBox="0 0 24 24">

                <path
                  d="M14.5 8H17V4.5C16.57 4.44 15.1 4.3 13.4 4.3C9.85 4.3 7.42 6.47 7.42 10.45V13.5H3.5V17.4H7.42V24H11.23V17.4H15.03L15.63 13.5H11.23V10.9C11.23 9.77 11.54 8 14.5 8Z"
                />

              </svg>

            </a>


            {/* Google */}

            <a
              href="https://www.google.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Google"
              className="social-google"
            >

              <svg viewBox="0 0 24 24">

                <path
                  d="M21.35 12.27C21.35 11.56 21.29 10.86 21.16 10.18H12V14.1H17.04C16.82 15.36 16.1 16.43 15.08 17.15V19.69H18.36C20.28 17.92 21.35 15.31 21.35 12.27Z"
                  className="google-blue"
                />

                <path
                  d="M12 21.5C14.7 21.5 16.96 20.61 18.36 19.69L15.08 17.15C14.17 17.76 13.01 18.12 12 18.12C9.39 18.12 7.18 16.36 6.37 13.99H2.98V16.61C4.66 19.87 8.1 21.5 12 21.5Z"
                  className="google-green"
                />

                <path
                  d="M6.37 13.99C6.17 13.39 6.06 12.75 6.37 10.17V7.55H2.98C2.33 8.85 1.96 10.31 1.96 12.08C1.96 13.85 2.33 15.31 2.98 16.61L6.37 13.99Z"
                  className="google-yellow"
                />

                <path
                  d="M12 6.04C13.47 6.04 14.78 6.55 15.82 7.55L18.43 4.94C16.95 3.55 14.7 2.66 12 2.66C8.1 2.66 4.66 4.29 2.98 7.55L6.37 10.17C7.18 7.8 9.39 6.04 12 6.04Z"
                  className="google-red"
                />

              </svg>

            </a>

          </div>

        </div>


        {/* QUICK LINKS */}

        <div className="footer-column">

          <h3>
            Explore
          </h3>

          <a href="#home">
            Home
          </a>

          <a href="#about">
            About Us
          </a>

          <a href="#services">
            Services
          </a>

          <a href="#gallery">
            Gallery
          </a>

          <a href="#team">
            Our Team
          </a>

          <a href="#faq">
            FAQ
          </a>

          <a href="#contact">
            Contact
          </a>


        </div>


        {/* SERVICES */}

        <div className="footer-column">

          <h3>
            Experiences
          </h3>

          <a href="#services">
            Weddings
          </a>

          <a href="#services">
            Corporate Events
          </a>

          <a href="#services">
            Birthday Celebrations
          </a>

          <a href="#services">
            Concerts
          </a>

          <a href="#services">
            Private Events
          </a>

          <a href="#services">
            Luxury Experiences
          </a>

        </div>


        {/* CONTACT */}

        <div className="footer-column footer-contact">

          <h3>
            Let's Create
          </h3>

          <p>
            Have an event in mind?
          </p>

          <p>
            Let's make it unforgettable.
          </p>

          <a
            href="#contact"
            className="footer-contact-button"
          >

            Start a Conversation

            <span>
              ↗
            </span>

          </a>

        </div>

      </div>


      {/* FOOTER BOTTOM */}

      <div className="footer-bottom">

        <span>
          © 2026 AURELIA EVENTS
        </span>

        <span>
          Crafted for unforgettable moments
        </span>

        <span>
          Privacy · Terms
        </span>

      </div>

    </footer>
  );
};

export default Footer;