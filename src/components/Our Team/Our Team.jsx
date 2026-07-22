import { Link } from "react-router-dom";
import "./Our Team.css";

import alok from "../../assets/team/alok.jpeg";
import sonali from "../../assets/team/sonali.jpeg";
import akash from "../../assets/team/akash.jpeg";
import pritam from "../../assets/team/pritam.jpeg";
import satabdhi from "../../assets/team/satabdhi.jpeg";
import kusum from "../../assets/team/kusum.jpeg";

const team = [
  {
    name: "Mr. Alok",
    role: "Founder",
    image: alok,
    quote: "Crafting bold ideas into unforgettable experiences.",
  },
  {
    name: "Miss. Sonali",
    role: "Director",
    image: sonali,
    quote: "Turning vision into seamless celebration and style.",
  },
  {
    name: "Mr. Akash",
    role: "Director",
    image: akash,
    quote: "Bringing precision, heart, and flawless execution together.",
  },
  {
    name: "Mr. Pritam",
    role: "Management Head",
    image: pritam,
    quote: "Great events are built through vision, teamwork, and flawless execution.",
  },
  {
    name: "Miss. Satabdhi",
    role: "Production Head",
    image: satabdhi,
    quote: "Leading every detail with creativity and calm confidence.",
  },
  {
    name: "Miss. Kusum",
    role: "Production Head",
    image: kusum,
    quote: "Turning vision into reality with precision and passion.",
  },
];

function OurTeam({ pageView = false }) {
  return (
    <section className={`our-team-section ${pageView ? "our-team-page" : ""}`}>
      {/* Background Glow */}
      <div className="our-team-glow glow-one"></div>
      <div className="our-team-glow glow-two"></div>
      <div className="our-team-glow glow-three"></div>

      <div className="our-team-inner">
        {/* Header */}
        <div className="our-team-header">
          <p className="eyebrow">Behind every flawless celebration</p>

          <h2>Meet Our Team</h2>

          <p className="our-team-description">
            A passionate group of planners, creatives, and production
            specialists building elegant events that feel effortless.
          </p>
        </div>

        {/* Team Cards */}
        <div className="teamGrid">
          {team.map((member, index) => (
            <article
              key={member.name}
              className="teamCard"
              style={{
                animationDelay: `${index * 0.12}s`,
              }}
            >
              <div className="teamImageWrap">
                <img src={member.image} alt={member.name} />
              </div>

              <div className="teamCardContent">
                <h3>{member.name}</h3>

                <span>{member.role}</span>

                <p>{member.quote}</p>
              </div>
            </article>
          ))}
        </div>

        {/* Back Button */}
        {pageView && (
          <div className="teamPageActions">
            <Link to="/" className="backHomeBtn">
              Back to Home
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
export default OurTeam;