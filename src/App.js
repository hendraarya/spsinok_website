import React, { useState, useEffect } from "react";
import { Routes, Route} from "react-router-dom";
import "./App.css";
import Dropdown from "./components/dropdown";
import Footer from "./components/footer";
import Home from "./pages/Home";
import NavigationBar from "./components/navigationBar";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 640 && isOpen) {
        setIsOpen(false);
        console.log("i resizeed");
      }
    };
    window.addEventListener("resize", hideMenu);
    return () => {
      window.removeEventListener("reisze", hideMenu);
    };
  });
  return (
    <>
      <NavigationBar toggle={toggle} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<Home />} />
      </Routes>
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Footer />
    </>
  );
}

export default App;
