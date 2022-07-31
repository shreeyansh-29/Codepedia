import React from "react";
import image from "../../assests/images/Rectangle1.png";
import "./homeGrid.css";

function homeGrid() {
  return (
    <div className="row banner">
      <div className="col-md-6">
        <h1 className="banner-h1">Let's Start The Magic</h1>
        <p className="banner-p">
          CODEPEDIA helps people to learn new things without spending
          <br />
          too much money on unnecessary things.we give beat set of
          <br /> resources to follow your dream
        </p>
        <a href="#ser" target="" className="banner-a">
          EXPLORE MORE
        </a>
      </div>
      <div className="col-md-6 text-center">
        <img src={image} alt="first" className="img-fluid banner-img" />
      </div>
    </div>
  );
}

export default homeGrid;
