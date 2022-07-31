import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "../pages/homePage";
import Skills from "../pages/skills/skills";
import Practice from "../pages/practice/practice";
import Learn from "../pages/learn/learn";
import ContactUs from "../pages/contactUs";
import Navbar from "../components/navbar/navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import About from "../pages/about"

function routes() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/learn/code" element={<Learn />} />
          <Route path="/practice" element={<Practice />} />
          <Route path="/about" element={<About />} />
          <Route path="/contactus" element={<ContactUs />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default routes;
