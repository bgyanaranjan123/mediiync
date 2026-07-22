import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landingpage from "./pages/Landing Page/Landingpage.jsx";

 function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Landingpage />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;