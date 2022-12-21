import React from "react";
import Home from "./Components/Homepage/Home";
import Contact from "./Components/Contact/Contact";
import About from "./Components/About/About";
import Profile from "./Components/Profile/Profile";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/header/Header";
const App = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/profile" element={<Profile />} />
        <Route exact path="/header" element={<Header />} />
      </Routes>
    </>
  );
};

export default App;
