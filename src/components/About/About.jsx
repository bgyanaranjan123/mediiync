import "./About.css";
import aboutImage from "../../assets/Private Events/98a3cbc44ddc58d6b37e95bd3620d7ff.jpg";

function About() {
  return (
    <section className="about-page" id="about">

      <div className="about-hero">
        <h1>ABO,kjhgfdUT <strong>AURELIA</strong></h1>

        <p>
          Every celebration tells a story. At Aurelia, we transform ideas
          into unforgettable experiences through creativity and elegance.
        </p>
      </div>

      <div className="about-container">

        <div className="about-image">
          <img src={aboutImage} alt="About Aurelia" />
        </div>

        <div className="about-content">
          <h2>Who We Are</h2>

          <p>
            Aurelia Events creates weddings, birthdays, corporate events,
            and unforgettable celebrations with creativity and perfection.
          </p>

          <button>Explore More</button>
        </div>

      </div>

      <section className="why-us">

        <h2>Why Choose Aurelia</h2>

        <div className="why-grid">

          <div className="why-card">
            <h3>Creative Planning</h3>
            <p>Unique event concepts for every celebration.</p>
          </div>

          <div className="why-card">
            <h3>Professional Team</h3>
            <p>Experienced planners and coordinators.</p>
          </div>

          <div className="why-card">
            <h3>Premium Decoration</h3>
            <p>Elegant themes with beautiful decoration.</p>
          </div>

          <div className="why-card">
            <h3>Memorable Experience</h3>
            <p>Creating moments that last forever.</p>
          </div>

        </div>

      </section>

    </section>
  );
}

export default About;