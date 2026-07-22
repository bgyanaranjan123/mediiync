import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./components/About/About";
import OurTeamPage from "./pages/OurTeamPage";
import Contact from "./components/Contact/Contact.jsx";         
import Gallery from "./components/Gallery/Gallery";
import GalleryDetails from "./components/Gallery/galleryDetail";
import Services from "./components/Services/Services.jsx";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/team" element={<OurTeamPage />} />
        <Route path="/Contact" element={<Contact />} /> 
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/Gallery/:id" element={<GalleryDetails />} />
        <Route path="/Services" element={<Services />} />

      </Routes>
    </BrowserRouter>
  );}


export default App;

