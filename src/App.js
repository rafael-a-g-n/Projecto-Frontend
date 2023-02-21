import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import About from "./pages/about/About";
import Offers from "./pages/offers/Offers";
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
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
