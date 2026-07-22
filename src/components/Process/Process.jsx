import React from "react";
import "./Process.css";

const process = [
  {
    number: "01",
    title: "Consultation",
    desc: "Understanding your vision, style, budget and expectations."
  },
  {
    number: "02",
    title: "Planning",
    desc: "Preparing venue layouts, timelines and premium event concepts."
  },
  {
    number: "03",
    title: "Design",
    desc: "Luxury decoration, floral styling, stage concepts and lighting."
  },
  {
    number: "04",
    title: "Execution",
    desc: "Professional management to ensure every detail is perfectly delivered."
  }
];

function Process(){

return(

<section
className="process"
id="process">

<div className="processGlow glowOne"></div>

<div className="processGlow glowTwo"></div>

<div className="processContainer">

<div className="processHeading">

<span>

OUR PROCESS

</span>

<h2>

From Dream

<strong>

To Celebration

</strong>

</h2>

<p>

Every event follows a carefully crafted process,
ensuring perfection from the very first meeting
to the final celebration.

</p>

</div>

<div className="timeline">

<div className="timelineLine"></div>

{

process.map((item,index)=>(

<div
className="timelineCard"
key={index}
>

<div className="timelineCircle">

{item.number}

</div>

<h3>

{item.title}

</h3>

<p>

{item.desc}

</p>

</div>

))

}

</div>

</div>

</section>

);

}

export default Process;