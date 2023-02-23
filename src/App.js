import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import About from "./pages/about/About";
import Offers from "./pages/offers/Offers";
import Team from "./pages/team/Team";
import Partnerships from "./pages/partnerships/Partnerships";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="offers" element={<Offers />} />
          <Route path="team" element={<Team />} />
          <Route path="partnerships" element={<Partnerships />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
