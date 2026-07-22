import "./About.css";
import aboutImage from "../../assets/Private Events/98a3cbc44ddc58d6b37e95bd3620d7ff.jpg";

function About() {
  return (
    <section className="about-page" id="about">

      {/* Hero Section */}
      <div className="about-hero">
        <h1>
          ABOUT <strong>AURELIA</strong>
        </h1>

        <p>
          Every celebration tells a story. At Aurelia, we transform ideas
          into unforgettable experiences through creativity and elegance.
        </p>
      </div>

      {/* About Section */}
      <div className="about-container">

        <div className="about-image">
          <img src={aboutImage} alt="About Aurelia" />
        </div>

        <div className="about-content">
          <h2>Who We Are</h2>

          <p>
            Aurelia Events specializes in creating unforgettable weddings,
            birthdays, corporate events, private celebrations, and luxury
            occasions. Our experienced team combines creativity, precision,
            and flawless execution to transform every vision into a memorable
            experience that exceeds expectations.
          </p>

          <button>Explore More</button>
        </div>

      </div>

      {/* About Divider Section */}
      <section className="about-divider">

        <h2>Creating Experiences That Last Forever</h2>

        <p>
          At Aurelia, every event is designed with passion, creativity,
          and attention to detail. From intimate family gatherings to
          grand weddings and corporate celebrations, we carefully plan
          every moment to deliver elegant, seamless, and unforgettable
          experiences that leave lasting memories for our clients and
          their guests.
        </p>

      </section>

      {/* Why Choose Aurelia */}
      <section className="why-us">

        <h2>Why Choose Aurelia</h2>

        <div className="why-grid">

          <div className="why-card">
            <h3>Creative Planning</h3>
            <p>
              Unique event concepts designed to perfectly match every
              celebration and personal style.
            </p>
          </div>

          <div className="why-card">
            <h3>Professional Team</h3>
            <p>
              Experienced planners, designers, and coordinators ensuring
              every detail is executed flawlessly.
            </p>
          </div>

          <div className="why-card">
            <h3>Premium Decoration</h3>
            <p>
              Elegant themes, luxury décor, and stunning visual styling
              that create unforgettable experiences.
            </p>
          </div>

          <div className="why-card">
            <h3>Memorable Experience</h3>
            <p>
              We transform your special moments into timeless memories
              through creativity, quality, and exceptional service.
            </p>
          </div>

        </div>

      </section>

    </section>
  );
}

export default About;