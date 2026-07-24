import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landingpage from "./pages/LandingPage/Landingpage.jsx";

import About from "./components/About/About";
import OurTeamPage from "./pages/OurTeamPage";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Contact from "./components/Contact/Contact.jsx";         
import Gallery from "./components/Gallery/Gallery";
import FAQ from "./components/FAQ/FAQ.jsx";
import GalleryDetails from "./components/Gallery/galleryDetail";
import Services from "./components/Services/Services.jsx";
import ScrollToTop from "./components/ScrollToTop";



function App() {
  return (
   <BrowserRouter>
    <Header />

    <ScrollToTop />

    <main className="router-body">
        <Routes>
            <Route path="/" element={<Landingpage />} />
            <Route path="/Landingpage" element={<Landingpage />} />
            <Route path="/FAQ" element={<FAQ />} />
            <Route path="/about" element={<About />} />
            <Route path="/team" element={<OurTeamPage />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Gallery" element={<Gallery />} />
            <Route path="/Gallery/:id" element={<GalleryDetails />} />
            <Route path="/Services" element={<Services />} />
        </Routes>
    </main>

    <Footer />
</BrowserRouter>
  );
}


export default App;

