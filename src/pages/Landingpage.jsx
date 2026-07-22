import React from "react";

import Navbar from "../components/Navbar/Navbar";
import Header from "../components/Header/Header";
import About from "../components/About/About";
import Services from "../components/Services/Services";
import WhyChoose from "../components/WhyChoose/WhyChoose";
import FeaturedEvents from "../components/FeaturedEvents/FeaturedEvents";
import Process from "../components/Process/Process";
import Testimonials from "../components/Testimonials/Testimonials";
import Pricing from "../components/Pricing/Pricing";
import FAQ from "../components/FAQ/FAQ";
import CTA from "../components/CTA/CTA";
import Footer from "../components/Footer/Footer";

function LandingPage() {

  return (

    <>

      <Navbar />

      <Header />

      <About />

      <Services />

      <WhyChoose />

      <FeaturedEvents />

      <Process />

      <Testimonials />

      <Pricing />

      <FAQ />

      <CTA />

      <Footer />

    </>

  );

}

export default LandingPage;