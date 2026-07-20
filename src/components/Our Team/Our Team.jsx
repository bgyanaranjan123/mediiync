import { Link } from "react-router-dom";
import "./Our Team.css";
import member1 from "../../assets/team/member1.svg";
import member2 from "../../assets/team/member2.svg";
import member3 from "../../assets/team/member3.svg";
import member4 from "../../assets/team/member4.svg";

const team = [
  {
    name: "Mr. Alok",
    role: "Founder",
    image: member1,
    quote: "Crafting bold ideas into unforgettable experiences.",
  },
  {
    name: "Miss. Sonali",
    role: "Director",
    image: member2,
    quote: "Turning vision into seamless celebration and style.",
  },
  {
    name: "Mr.Akash ",
    role: "Director",
    image: member3,
    quote: "Bringing precision, heart, and flawless execution together.",
  },
  {
    name: "Miss.Satabdhi",
    role: "Production Head",
    image: member4,
    quote: "Leading every detail with creativity and calm confidence.",
  },
];

export default function OurTeam({ pageView = false }) {
  return (
    <section className={`our-team-section ${pageView ? "our-team-page" : ""}`}>
      <div className="our-team-glow glow-one"></div>
      <div className="our-team-glow glow-two"></div>
      <div className="our-team-glow glow-three"></div>

      <div className="our-team-inner">
        <div className="our-team-header">
          <p className="eyebrow">Behind every flawless celebration</p>
          <h2>Meet Our Team</h2>
          <p className="our-team-description">
            A passionate group of planners, creatives, and production specialists building elegant events that feel effortless.
          </p>
        </div>

        <div className="teamGrid">
          {team.map((member, index) => (
            <article className="teamCard" key={member.name} style={{ animationDelay: `${index * 0.12}s` }}>
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