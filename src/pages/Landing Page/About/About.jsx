import React from "react";
import "./About.css";

const About = () => {
  return (
    <section className="about" id="about">

      <div className="about-bg-circle circle1"></div>
      <div className="about-bg-circle circle2"></div>
      <div className="about-bg-circle circle3"></div>

      <div className="about-container">

        {/* LEFT */}

        <div className="about-images">

          <div className="image-card main-image">

            <img
              src="/src/assets/about/about1.jpg"
              alt="Wedding Event"
            />

          </div>

          <div className="image-card floating-image">

            <img
              src="/src/assets/about/about2.jpg"
              alt="Decoration"
            />

          </div>

          <div className="experience-card">

            <h2>15+</h2>

            <span>Years of Luxury Event Experience</span>

          </div>

        </div>

        {/* RIGHT */}

        <div className="about-content">

          <span className="section-tag">

            ABOUT AURELIA EVENTS

          </span>

          <h2>

            Creating
            <br />

            Extraordinary
            <span> Celebrations</span>

          </h2>

          <p>

            We specialize in designing luxurious weddings,
            corporate events, destination celebrations,
            birthdays and unforgettable private experiences.
            Every celebration is crafted with creativity,
            elegance and flawless execution.

          </p>

          <div className="about-features">

            <div className="feature">

              <div className="icon">✓</div>

              <div>

                <h4>Luxury Planning</h4>

                <p>
                  Personalized concepts designed uniquely
                  for every client.
                </p>

              </div>

            </div>

            <div className="feature">

              <div className="icon">✓</div>

              <div>

                <h4>Premium Decoration</h4>

                <p>

                  Elegant floral themes,
                  lighting,
                  stage and venue styling.

                </p>

              </div>

            </div>

            <div className="feature">

              <div className="icon">✓</div>

              <div>

                <h4>Experienced Team</h4>

                <p>

                  Professional designers,
                  planners and event specialists.

                </p>

              </div>

            </div>

          </div>

          <button className="about-btn">

            Learn More

            <span>↗</span>

          </button>

        </div>

      </div>

    </section>
  );
};

export default About;