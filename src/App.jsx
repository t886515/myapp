import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Home from "./home/Home.jsx";
import AppBar from "./appbar/AppBar.jsx";
import About from "./about/About.jsx";
import { Routes, Route } from "react-router-dom";

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
];

function App() {
  return (
    <>
      <AppBar />
      <div>
        <Routes>
          {routes.map((route, index) => (
            <Route path={route.path} element={route.element} />
          ))}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
