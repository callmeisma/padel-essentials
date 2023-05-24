import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "./index.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
// import Courts from "./components/Courts";
import PageNotFound from "./components/PageNotFound";
import Contact from "./components/Contact";

function App() {
  return (
    // <div className="flex flex-col items-center justify-center min-h-screen px-6">
    //   <h1>Coming</h1>
    //   <h1>🎾</h1>
    //   <h1>Soon</h1>
    // </div>
    <div className="flex min-h-screen flex-col">
      <Nav />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        {/* <Route path="/courts" element={<Courts />} /> */}
        <Route path="/contact" element={<Contact />} />
        <Route path="/404" element={<PageNotFound />} />
        <Route path="*" element={<Navigate to="/404" />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
