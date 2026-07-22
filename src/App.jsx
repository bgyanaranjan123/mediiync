import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./components/About/About";
import OurTeamPage from "./pages/OurTeamPage";
<<<<<<< HEAD
=======
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
>>>>>>> 876cdad88efb7dfbe943350087eebb73b2026e68
import Contact from "./components/Contact/Contact.jsx";         
import Gallery from "./components/Gallery/Gallery";
import GalleryDetails from "./components/Gallery/galleryDetail";
import Services from "./components/Services/Services.jsx";



function App() {
  return (
    <BrowserRouter>
        <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/team" element={<OurTeamPage />} />
        <Route path="/Contact" element={<Contact />} /> 
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/Gallery/:id" element={<GalleryDetails />} />
        <Route path="/Services" element={<Services />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );}


export default App;

