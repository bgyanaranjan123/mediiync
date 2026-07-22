import React from "react";
import "./FeaturedEvents.css";

const events = [
  {
    image:"/src/assets/featured/event1.jpg",
    title:"Luxury Wedding",
    category:"Wedding"
  },
  {
    image:"/src/assets/featured/event2.jpg",
    title:"Corporate Gala",
    category:"Corporate"
  },
  {
    image:"/src/assets/featured/event3.jpg",
    title:"Birthday Celebration",
    category:"Birthday"
  },
  {
    image:"/src/assets/featured/event4.jpg",
    title:"Destination Wedding",
    category:"Destination"
  },
  {
    image:"/src/assets/featured/event5.jpg",
    title:"Reception Night",
    category:"Reception"
  },
  {
    image:"/src/assets/featured/event6.jpg",
    title:"Luxury Decoration",
    category:"Decoration"
  }
];

function FeaturedEvents(){

return(

<section
className="featured"
id="gallery">

<div className="featuredGlow glowLeft"></div>

<div className="featuredGlow glowRight"></div>

<div className="featuredContainer">

<div className="featuredHeading">

<span>

FEATURED EVENTS

</span>

<h2>

Our Recent

<strong>

Luxury Celebrations

</strong>

</h2>

<p>

Every celebration tells a story.
Here are some unforgettable
moments crafted by Aurelia Events.

</p>

</div>

<div className="featuredGrid">

{

events.map((item,index)=>(

<div
className="eventCard"
key={index}
>

<div className="eventImage">

<img

src={item.image}

alt={item.title}

/>

<div className="eventOverlay">

<h3>

{item.title}

</h3>

<p>

{item.category}

</p>

<button>

View Gallery

<span>

↗

</span>

</button>

</div>

</div>

</div>

))

}

</div>

</div>

</section>

);

}

export default FeaturedEvents;