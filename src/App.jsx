import React from "react";
import Navbar from "./Navbar + Footer/Navbar/Navbar";
import HeroSection from "./Components/HeroSection/HeroSection";
import Titlesection from "./Components/titlesection/titlesection";
import Features from "./Components/Features/Features";
import Pricing from "./Components/Pricing/Pricing";
import Contact from "./Components/Contact/Contact";
import Joinus from "./Components/Join us/Joinus";
import Footer from "./Navbar + Footer/footer/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";  // Correct this line
import Login from "./Signuppage/Login";

const App = () => {
  return (
    <Router>  {/* This is the correct usage */}
      <div className="app">
        <Navbar />
        <HeroSection />
        <Features />
        <Pricing />
        <Contact />
        <Joinus />
        <Routes>

          
          <Route path="/signup" element={<Login />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
