import React from "react";
import "./service.css";
import image1 from "../../assests/images/Icon-1.png";
import image2 from "../../assests/images/Icon-2.png";
import image3 from "../../assests/images/Icon-3.png";
import {Link} from "react-router-dom";

function service() {
  return (
    <section id="ser" className="service">
      <div className="container">
        <h2 className="title1">
          We provide a wide range
          <br /> of services
        </h2>
        <p className="subtitle1">
          Let's start learning with CODEPEDIA for better upgrade in your skills
        </p>
        <div className="row">
          <div className="col-md-4">
            <div className="service-box">
              <img src={image1} alt="first" className="service-box-img" />
              <h6 className="service-box-h6">BUILT YOUR SKILLS</h6>
              <p className="service-box-p">learn new data structures,languages and algorithms</p>
              <Link to="/skills" target="_blank">
                <i className="fa fa-arrow-right" />
              </Link>
            </div>
          </div>
          <div className="col-md-4">
            <div className="service-box active-service">
              <img src={image2} alt="second" className="service-box-img" />
              <h6 className="service-box-h6">LEARN AND CODE</h6>
              <p className="service-box-p">
                Use your learn skills on diffrent fields and compete with others
              </p>
              <Link to="/learn/code" target="_blank">
                <i className="fa fa-arrow-right"></i>
              </Link>
            </div>
          </div>
          <div className="col-md-4">
            <div className="service-box">
              <img src={image3} alt="third" className="service-box-img"/>
              <h6 className="service-box-h6">PRATICE</h6>
              <p className="service-box-p">Pratice our selected question to prepare for interviews</p>
              <Link to="/practice" target="_blank">
                <i className="fa fa-arrow-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default service;
