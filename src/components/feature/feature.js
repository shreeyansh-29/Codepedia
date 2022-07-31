import React from "react";
import {Link} from "react-router-dom";
import image1 from "../../assests/images/Rectangle2.png";
import image2 from "../../assests/images/Rectangle3.png";
import "./feature.css";

function feature() {
  return (
    <>
      <section className="feature">
        <div className="container">
          <div className="row">
            <div className="col-md-6 text-center">
              <img src={image1} alt="first" className="feature-img"/>
            </div>
            <div className="col-md-6">
              <h2 className="feature-h2">
                learn and compete with other real coders on our <br /> selected
                platforms
              </h2>
              <p className="feature-p">
                we have selected worlds few best sites for learning and for
                pratising your skills and for better insight of your knowleadge
              </p>
              <Link className="feature-a" to="learn/code" target="_blank">
                learn and code
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="explore">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h2 className="explore-h2">
                Who am I...??? <br />
                and What I do...???<span>&#128517;</span>
              </h2>
              <p className="feature-p">
                I am a programmer and currently in my final year of graduation
                <br />  and have made this website for
                the fellow programmer to learn new skills and to compete with
                real programmer.
                <br /> I have selected few top websites for learning and
                praticing for your interviews and all.
                <br />
                Hope you all got that and good luck .<br />
                If you want to know about the Developer of this website follow
                the <br />
                below link.
              </p>
              <Link className="explore-a" to="/about" target="_blank">About the Developer</Link>
            </div>
            <div className="col-md-6">
              <img src={image2} className="img-fluid img1" alt="second" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default feature;
