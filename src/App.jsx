import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
// import About from './pages/About';
import CareerPage from "./pages/CareerPage";
import NotFound from "./pages/NotFound";
import AboutUs from "./pages/AboutUs";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} /> */}
        <Route path="/career" element={<CareerPage />} />
        <Route path="/about" element={<AboutUs/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
