import React, { useState } from "react";
import "./Contact.css";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
  FaSyncAlt,
  FaPaperPlane
} from "react-icons/fa";

const generateCaptcha = () => {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let result = "";

  for (let i = 0; i < 5; i++) {
    result += chars.charAt(
      Math.floor(Math.random() * chars.length)
    );
  }

  return result;
};

function Contact() {

  const [captcha, setCaptcha] = useState(generateCaptcha());

  const [form, setForm] = useState({

    name: "",

    email: "",

    phone: "",

    subject: "",

    message: "",

    captchaInput: ""

  });

  const handleChange = (e) => {

    setForm({

      ...form,

      [e.target.name]: e.target.value

    });

  };

  const refreshCaptcha = () => {

    setCaptcha(generateCaptcha());

    setForm({

      ...form,

      captchaInput: ""

    });

  };

  const handleSubmit = (e) => {

    e.preventDefault();

    if (

      !form.name ||

      !form.email ||

      !form.phone ||

      !form.subject ||

      !form.message

    ) {

      alert("Please fill all fields.");

      return;

    }

    const emailRegex =

      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(form.email)) {

      alert("Enter a valid Email.");

      return;

    }

    const phoneRegex = /^[6-9]\d{9}$/;

    if (!phoneRegex.test(form.phone)) {

      alert("Enter a valid Phone Number.");

      return;

    }

    if (

      form.captchaInput.toUpperCase() !== captcha

    ) {

      alert("Captcha Incorrect");

      refreshCaptcha();

      return;

    }

    alert("Message Sent Successfully!");

    setForm({

      name: "",

      email: "",

      phone: "",

      subject: "",

      message: "",

      captchaInput: ""

    });

    setCaptcha(generateCaptcha());

  };

  return (

<section className="contact-page">

<div className="contact-bg"></div>

<div className="contact-aura aura1"></div>

<div className="contact-aura aura2"></div>

<div className="contact-light"></div>

<div className="contact-container">

<h1 className="contact-title">

Contact Us

</h1>

<div className="contact-grid">

<div className="contact-form-card">

<form onSubmit={handleSubmit}>

<div className="input-grid">

<input

type="text"

name="name"

placeholder="Full Name"

value={form.name}

onChange={handleChange}

/>

<input

type="email"

name="email"

placeholder="Email Address"

value={form.email}

onChange={handleChange}

/>

<input

type="text"

name="phone"

placeholder="Phone Number"

value={form.phone}

onChange={handleChange}

/>

<input

type="text"

name="subject"

placeholder="Subject"

value={form.subject}

onChange={handleChange}

/>

</div>

<textarea

rows="7"

name="message"

placeholder="Write your Message..."

value={form.message}

onChange={handleChange}

/>

<div className="captcha-area">

<div className="captcha-box">

{captcha}

</div>

<button

type="button"

className="refresh-btn"

onClick={refreshCaptcha}

>

<FaSyncAlt />

</button>

<input

type="text"

name="captchaInput"

placeholder="Enter Captcha"

value={form.captchaInput}

onChange={handleChange}

/>
              </div>

              <div className="button-wrapper">

                <button
                  type="submit"
                  className="send-btn"
                >
                  <FaPaperPlane />
                  <span> Send Message</span>
                </button>

              </div>

            </form>

          </div>

          <div className="contact-info-card">

            <h2>
              Contact Information
            </h2>

            <p className="info-text">
              We'd love to hear from you. Whether you have a
              question about our services, pricing, events,
              or anything else, our team is ready to answer
              all your questions.
            </p>

            <div className="info-list">

              <div className="info-item">

                <div className="info-icon">
                  <FaMapMarkerAlt />
                </div>

                <div className="info-content">
                  <h4>Location</h4>
                  <p>Berhampur, Odisha, India</p>
                </div>

              </div>

              <div className="info-item">

                <div className="info-icon">
                  <FaPhoneAlt />
                </div>

                <div className="info-content">
                  <h4>Phone</h4>
                  <p>+91 6372770370</p>
                </div>

              </div>

              <div className="info-item">

                <div className="info-icon">
                  <FaEnvelope />
                </div>

                <div className="info-content">
                  <h4>Email</h4>
                  <p>aureliaevents.bam@gmail.com</p>
                </div>

              </div>

            </div>

            <div className="social-links">

              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
              >
                <FaFacebookF />
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
              >
                <FaInstagram />
              </a>

              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
              >
                <FaYoutube />
              </a>

              <a
                href="https://wa.me/916372770370"
                target="_blank"
                rel="noreferrer"
              >
                <FaWhatsapp />
              </a>

            </div>

            <a
              href="https://www.google.com/maps/search/?api=1&query=Berhampur%2COdisha"
              target="_blank"
              rel="noreferrer"
              className="map-btn"
            >
              View On Google Maps
            </a>

          </div>

        </div>

      </div>

      <a
        href="https://wa.me/916372770370"
        className="floating-whatsapp"
        target="_blank"
        rel="noreferrer"
      >
        <FaWhatsapp />
      </a>

    </section>

  );

}

export default Contact;