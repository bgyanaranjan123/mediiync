import "./Services.css";



function Services() {
  return (
    <section className="services">
      <div className="container">
        <h1>Services We Offer</h1>
        <p className="subtitle">
          We create memorable events with style and precision.
        </p>

        <button className="book-btn">Book Your Event</button>

        <div className="service-grid">
          {services.map((item, index) => (
            <div className="card" key={index}>
              <div className="icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

    </section>
    
  );
}
const services = [
  {
    title: "Event Planning",
    desc: "We organize events with attention to detail.",
    icon: "🎉",
  },
  {
    title: "Catering Services",
    desc: "Delicious and customized menu for your guests.",
    icon: "🍽️",
  },
  {
    title: "Venue Selection",
    desc: "We help you choose the perfect venue.",
    icon: "🏛️",
  },
  {
    title: "Decoration",
    desc: "Creative and elegant decoration for every event.",
    icon: "🎈",
  },
];
export default Services;