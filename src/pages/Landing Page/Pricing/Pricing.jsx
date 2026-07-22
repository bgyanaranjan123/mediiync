import React from "react";
import "./Pricing.css";

const plans = [
  {
    title: "Silver",
    price: "$499",
    tag: "Perfect for Small Events",
    features: [
      "Venue Decoration",
      "Photography",
      "Music Setup",
      "Guest Management",
      "Basic Catering"
    ],
    featured: false
  },
  {
    title: "Gold",
    price: "$999",
    tag: "Most Popular",
    features: [
      "Premium Decoration",
      "Photography & Videography",
      "Luxury Catering",
      "Live Entertainment",
      "Complete Event Planning"
    ],
    featured: true
  },
  {
    title: "Platinum",
    price: "$1999",
    tag: "Luxury Experience",
    features: [
      "Destination Event",
      "Celebrity Artist",
      "Luxury Decoration",
      "Premium Catering",
      "Complete Management"
    ],
    featured: false
  }
];

function Pricing() {
  return (
    <section className="pricing" id="pricing">

      <div className="pricingGlow glowLeft"></div>
      <div className="pricingGlow glowRight"></div>

      <div className="pricingContainer">

        <div className="pricingHeading">

          <span>PRICING PLANS</span>

          <h2>

            Choose Your

            <strong> Perfect Package</strong>

          </h2>

          <p>

            Flexible pricing options designed for every celebration,
            from intimate gatherings to luxurious destination weddings.

          </p>

        </div>

        <div className="pricingGrid">

          {plans.map((plan,index)=>(

            <div
              className={`priceCard ${plan.featured ? "featured" : ""}`}
              key={index}
            >

              {plan.featured &&

                <div className="popular">

                  MOST POPULAR

                </div>

              }

              <h3>

                {plan.title}

              </h3>

              <h1>

                {plan.price}

              </h1>

              <span className="packageTag">

                {plan.tag}

              </span>

              <ul>

                {plan.features.map((item,i)=>(

                  <li key={i}>

                    ✓ {item}

                  </li>

                ))}

              </ul>

              <button>

                Choose Package

                <span>↗</span>

              </button>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Pricing;