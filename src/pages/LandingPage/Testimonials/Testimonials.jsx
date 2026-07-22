import React from "react";
import "./Testimonials.css";


const testimonials = [

  {
    bg: "/src/assets/testimonials/bg1.jpg",
    image: "/src/assets/testimonials/client1.jpg",
    name: "Sophia Anderson",
    role: "Wedding Client",
    review:
      "Aurelia Events transformed our wedding into a dream celebration. Every detail was elegant, perfectly organized and beyond our expectations.",
  },


  {
    bg: "/src/assets/testimonials/bg2.jpg",
    image: "/src/assets/testimonials/client2.jpg",
    name: "Daniel Wilson",
    role: "Corporate Client",
    review:
      "The professionalism, creativity and flawless execution impressed everyone. The event looked luxurious from every angle.",
  },


  {
    bg: "/src/assets/testimonials/bg3.jpg",
    image: "/src/assets/testimonials/client3.jpg",
    name: "Emma Johnson",
    role: "Birthday Celebration",
    review:
      "Everything was beautifully designed. The decoration, lighting and atmosphere created unforgettable memories for our family.",
  },

];



function Testimonials() {


  return (

    <section className="testimonials" id="testimonials">


      {/* Background Glow */}

      <div className="testimonialGlow glowOne"></div>

      <div className="testimonialGlow glowTwo"></div>




      <div className="testimonialContainer">



        {/* Heading */}

        <div className="testimonialHeading">


          <span>
            CLIENT TESTIMONIALS
          </span>



          <h2>

            What Our
            <strong> Clients Say</strong>

          </h2>



          <p>
            We believe every successful event is measured by
            unforgettable memories and happy clients.
          </p>



        </div>





        {/* Cards */}

        <div className="testimonialGrid">


          {
            testimonials.map((item,index)=>(


              <div

                className="testimonialCard"

                key={index}

                style={{
                  backgroundImage:`url(${item.bg})`
                }}

              >



                {/* Background Overlay */}

                <div className="cardOverlay"></div>



                {/* Aura */}

                <div className="aura"></div>





                {/* Shine Animation */}

                <div className="shine"></div>




                <div className="quoteMark">

                  “

                </div>





                <div className="stars">

                  ★★★★★

                </div>





                <p className="review">

                  {item.review}

                </p>





                <div className="client">


                  <img

                    src={item.image}

                    alt={item.name}

                  />



                  <div>


                    <h3>

                      {item.name}

                    </h3>



                    <span>

                      {item.role}

                    </span>



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



export default Testimonials;