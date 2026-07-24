import React from "react";
import "./Services.css";

// import images1 from "../../assets/floating Images/images1.jpg"; 


import images1 from "../../assets/floating Images/images1.jpg";
import images2 from "../../assets/floating Images/images2.jpg";
import images3 from "../../assets/floating Images/images3.jpg";
import images4 from "../../assets/floating Images/images4.jpg";

const popularServices = [
  {
    title: "Wedding Planner",
    image: images1,
    desc: "Planning a wedding can be stressful. Our wedding planner ensures your big day is perfect.",
  },
  {
    title: "Corporate Events",
    image: images2,
    desc: "We help you organize corporate events with creativity and professionalism.",
  },
  {
    title: "Mini Events",
    image: images3,
    desc: "Mini events are intimate gatherings tailored to your requirements.",
  },
  {
    title: "Private Parties",
    image: images4,
    desc: "Private parties are a great way to celebrate with friends and family.",
  },
];

export default function Services() {
  return (
    <>
      {/* Top Section */}

      <section className="services-offer">

        <h1>Services We Offer</h1>

        <p>
          We are professional Event Planners in Berhampur, creating memorable
          events with style and precision.
        </p>

        <button className="book-btn">
          Book Your Event
        </button>

        <div className="offer-grid">

          <div className="offer-card">
            <h3>Event Planning</h3>
            <p>We organize events with attention to detail.</p>
          </div>

          <div className="offer-card">
            <h3>Catering Services</h3>
            <p>Delicious and customized menu for your guests.</p>
          </div>

          <div className="offer-card">
            <h3>Venue Selection</h3>
            <p>We help you choose the perfect venue.</p>
          </div>

          <div className="offer-card">
            <h3>Decoration</h3>
            <p>Creative and elegant decoration for every event.</p>
          </div>

        </div>

      </section>

      {/* Bottom Section */}

      <section className="popular-services">

        <h1>OUR POPULAR SERVICES</h1>

        <p>
          We have more than 15 years' experience, and we travel all over Odisha
          for our clients!
        </p>

        <div className="popular-grid">

          {popularServices.map((service, index) => (

            <div className="popular-card" key={index}>

              <img
                src={service.image}
                alt={service.title}
              />

              <h3>{service.title}</h3>

              <p>{service.desc}</p>

              <button className="arrow-btn">
                →
              </button>

            </div>

          ))}

        </div>

      </section>
    </>
  );
}