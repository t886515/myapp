import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Home from "./home/Home.jsx";
import AppBar from "./appbar/AppBar.jsx";
import About from "./about/About.jsx";
import ContactMe from "./contact_me/ContactMe.jsx";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <AppBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactMe />} />
      </Routes>
    </>
  );
}

export default App;
