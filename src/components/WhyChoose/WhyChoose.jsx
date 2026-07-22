import React from "react";
import "./WhyChoose.css";

const features = [
  {
    number: "01",
    title: "Luxury Planning",
    desc: "Every event is designed with creativity, elegance and detailed planning."
  },
  {
    number: "02",
    title: "Professional Team",
    desc: "Experienced planners, decorators and coordinators for flawless execution."
  },
  {
    number: "03",
    title: "Premium Decoration",
    desc: "Luxury floral styling, lighting, stage design and venue transformation."
  },
  {
    number: "04",
    title: "24/7 Support",
    desc: "Dedicated support before, during and after your celebration."
  }
];

const stats = [
  {
    value: "500+",
    title: "Events"
  },
  {
    value: "15+",
    title: "Years"
  },
  {
    value: "120+",
    title: "Corporate Clients"
  },
  {
    value: "98%",
    title: "Happy Customers"
  }
];

function WhyChoose() {

return (

<section
className="why"
id="why">

<div className="whyGlow glow1"></div>

<div className="whyGlow glow2"></div>

<div className="whyContainer">

<div className="whyLeft">

<span>

WHY CHOOSE US

</span>

<h2>

Creating Luxury Experiences

<strong>

With Passion & Precision

</strong>

</h2>

<p>

We combine creativity,
innovation and years of experience
to create unforgettable events
that perfectly reflect your vision.

</p>

<div className="statsGrid">

{stats.map((item,index)=>(

<div
className="statCard"
key={index}
>

<h3>

{item.value}

</h3>

<p>

{item.title}

</p>

</div>

))}

</div>

</div>

<div className="whyRight">

<div className="whyImage">

<img
src="/src/assets/whychoose/why.jpg"
alt="Luxury Event"
/>

</div>

<div className="featureGrid">

{features.map((item,index)=>(

<div
className="featureCard"
key={index}
>

<div className="featureNumber">

{item.number}

</div>

<h3>

{item.title}

</h3>

<p>

{item.desc}

</p>

</div>

))}

</div>

</div>

</div>

</section>

);

}

export default WhyChoose;