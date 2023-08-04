import React from "react";
import Home from "./home/Home.jsx";
import AppBar from "./appbar/AppBar.jsx";
import About from "./about/About.jsx";
import Resume from "./resume/Resume.jsx";
import Projects from "./projects/Projects.jsx";
import ContactMe from "./contact_me/ContactMe.jsx";
import { Routes, Route } from "react-router-dom";
import style from "styled-components";

const AppContainer = style.div`
  margin-top: 60px;
`;

function App() {
  return (
    <>
      <AppBar />
      <AppContainer>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactMe />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </AppContainer>
    </>
  );
}

export default App;
