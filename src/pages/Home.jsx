import TopBar from "../components/TopBar/TopBar.jsx";
import Navbar from "../components/Navbar/NavBar.jsx";
import Header from "../components/Header/Header.jsx";

import About from "../components/About/About.jsx";
import Services from "../components/Services/Services.jsx";
import WhyChoose from "../components/WhyChoose/WhyChoose.jsx";
import FeaturedEvents from "../components/FeaturedEvents/FeaturedEvents.jsx";
import Process from "../components/Process/Process.jsx";
import Testimonials from "../components/Testimonials/Testimonials.jsx";
import Pricing from "../components/Pricing/Pricing.jsx";
import FAQ from "../components/FAQ/FAQ.jsx";
import CTA from "../components/CTA/CTA.jsx";

import Footer from "../components/Footer/Footer.jsx";

function Home() {
  return (
    <>
      <TopBar />

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

export default Home;