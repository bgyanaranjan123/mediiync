import React from "react";
import "./Services.css";

const services = [
  {
    title: "Luxury Weddings",
    image: "/src/assets/services/wedding.jpg",
    number: "01",
    desc: "Elegant wedding planning with luxury decoration and unforgettable moments."
  },
  {
    title: "Corporate Events",
    image: "/src/assets/services/corporate.jpg",
    number: "02",
    desc: "Professional conferences, launches and corporate celebrations."
  },
  {
    title: "Birthday Parties",
    image: "/src/assets/services/birthday.jpg",
    number: "03",
    desc: "Creative birthday celebrations designed for every age."
  },
  {
    title: "Destination Events",
    image: "/src/assets/services/destination.jpg",
    number: "04",
    desc: "Beautiful destination weddings and private luxury experiences."
  },
  {
    title: "Photography",
    image: "/src/assets/services/photography.jpg",
    number: "05",
    desc: "Professional photography and cinematic videography."
  },
  {
    title: "Decoration",
    image: "/src/assets/services/decoration.jpg",
    number: "06",
    desc: "Luxury floral decoration, lighting and stage design."
  }
];

function Services() {
  return (
    <section className="services" id="services">

      <div className="service-glow glow-left"></div>
      <div className="service-glow glow-right"></div>

      <div className="services-container">

        <div className="services-heading">

          <span>OUR PREMIUM SERVICES</span>

          <h2>

            We Design
            <br />

            Every Celebration
            <strong> Beautifully</strong>

          </h2>

          <p>

            From intimate celebrations to luxurious destination weddings,
            we create timeless experiences with creativity,
            elegance and flawless execution.

          </p>

        </div>

        <div className="services-grid">

          {services.map((service,index)=>(

            <div
            className="service-card"
            key={index}
            >

              <div className="service-image">

                <img
                src={service.image}
                alt={service.title}
                />

                <span className="service-number">

                  {service.number}

                </span>

              </div>

              <div className="service-content">

                <h3>{service.title}</h3>

                <p>{service.desc}</p>

                <button>

                  Explore

                  <span>↗</span>

                </button>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Services;