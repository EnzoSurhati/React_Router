import { Routes, Route, Link } from "react-router-dom";
import Red from "./Components/Red";
import Blue from "./Components/Blue";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Purple from "./Components/Purple";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <div id="container">
        <Navbar></Navbar>
        <Footer></Footer>
        <div id="main-section">
          <Routes>
            <Route path="/blue" element={<Blue />} />
            <Route path="/red" element={<Red />} />
            <Route path="/purple" element={<Purple />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
