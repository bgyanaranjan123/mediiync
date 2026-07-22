import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./components/About/About";
import OurTeamPage from "./pages/OurTeamPage";
import Gallery from "./components/Gallery/Gallery";
import GalleryDetails from "./components/Gallery/GalleryDetail";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/team" element={<OurTeamPage />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/gallery/:id" element={<GalleryDetails />} />
       
      </Routes>
    </BrowserRouter>
  );}


export default App;