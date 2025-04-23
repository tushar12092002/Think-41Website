import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import "./App.css";
import CareerPage from "./pages/CareerPage";
import NotFound from "./pages/NotFound";
import AboutUs from "./pages/AboutUs";
import TrapezoidGrid from "./pages/Test";
import CareerPage2 from "./pages/CareerPage2";

function App() {
  return (
    <div>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/career" element={<CareerPage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/career2" element={<CareerPage2 />} />
          <Route path="/test" element={<TrapezoidGrid />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
