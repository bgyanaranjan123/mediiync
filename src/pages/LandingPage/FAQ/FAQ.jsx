import React, { useState } from "react";
import "./FAQ.css";

const faqs = [
  {
    question: "What types of events do you organize?",
    answer:
      "We specialize in weddings, receptions, birthdays, corporate events, engagements, destination weddings, anniversary celebrations, and luxury private events."
  },
  {
    question: "Can you customize event themes?",
    answer:
      "Absolutely. Every event is uniquely designed based on your preferences, venue, guest count, and budget."
  },
  {
    question: "Do you provide destination event planning?",
    answer:
      "Yes. We manage complete destination events including venue selection, accommodation, transportation, decoration, entertainment, and coordination."
  },
  {
    question: "How early should I book my event?",
    answer:
      "We recommend booking at least 2–6 months in advance to ensure availability and proper planning."
  },
  {
    question: "Do you offer complete event management?",
    answer:
      "Yes. From planning to execution, our team manages every detail so you can enjoy your celebration stress-free."
  }
];

function FAQ(){

const [active,setActive]=useState(0);

return(

<section className="faq" id="faq">

<div className="faqGlow glowLeft"></div>

<div className="faqGlow glowRight"></div>

<div className="faqContainer">

<div className="faqHeading">

<span>

FREQUENTLY ASKED QUESTIONS

</span>

<h2>

Everything You

<strong>

Need To Know

</strong>

</h2>

<p>

Have questions? We've answered the most common
queries to help you plan your perfect celebration.

</p>

</div>

<div className="faqWrapper">

{

faqs.map((item,index)=>(

<div
className={`faqItem ${active===index?"active":""}`}
key={index}
>

<button

className="faqQuestion"

onClick={()=>setActive(active===index?-1:index)}

>

<span>

{item.question}

</span>

<b>

{active===index?"−":"+"}

</b>

</button>

<div
className="faqAnswer"
style={{
maxHeight:
active===index
?
"250px"
:
"0px"
}}
>

<p>

{item.answer}

</p>

</div>

</div>

))

}

</div>

</div>

</section>

);

}

export default FAQ;