import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Dropdown from "./components/dropdown";
import Footer from "./components/footer";
import Home from "./pages/Home";
// import Intro from "./components/Intro";
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
        <Route path="/" exact component={Home} />
      </Routes>
      <Dropdown isOpen={isOpen} toggle={toggle} />
      {/* <Intro /> */}
      <Footer />
    </>
  );
}

export default App;
