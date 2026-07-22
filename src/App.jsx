import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./components/About/About";
import OurTeamPage from "./pages/OurTeamPage";
<<<<<<< HEAD
import Gallery from "./components/Gallery/Gallery";
import GalleryDetails from "./components/Gallery/GalleryDetail";
=======
import Services from "./components/Services/Services.jsx";

>>>>>>> 2226d5107102524630c006f44e5137d3b6c636bf
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/team" element={<OurTeamPage />} />
<<<<<<< HEAD
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/gallery/:id" element={<GalleryDetails />} />
       
=======
        <Route path="/services" element={<Services />} />
>>>>>>> 2226d5107102524630c006f44e5137d3b6c636bf
      </Routes>
    </BrowserRouter>
  );}


export default App;