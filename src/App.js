import React from "react";
import { Routes, Route } from "react-router-dom";
import "./index.css";
import Nav from "./components/Nav";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Courts from "./components/Courts";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="flex justify-center items-center h-full w-full">
      <h1>Coming Soon...</h1>
    </div>
    // <div className="h-screen w-screen">
    //   <Nav />
    //   <Routes>
    //     <Route path="/" element={<Home />} />
    //     <Route path="/about" element={<About />} />
    //     <Route path="/services" element={<Services />} />
    //     <Route path="/courts" element={<Courts />} />
    //     <Route path="/contact" element={<Contact />} />
    //   </Routes>
    // </div>
  );
}

export default App;
