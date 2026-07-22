import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./components/About/About";
import OurTeamPage from "./pages/OurTeamPage";
import Services from "./components/Services/Services.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/team" element={<OurTeamPage />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;