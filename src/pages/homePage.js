import React from "react";
import HomeGrid from "../components/homeGrid/homeGrid";
import Service from "../components/services/service";
import Feature from "../components/feature/feature";
import Footer from "../components/footer/footer";

function homePage() {
  return (
    <>
      <HomeGrid />
      <Service />
      <Feature />
      <Footer />
    </>
  );
}

export default homePage;
