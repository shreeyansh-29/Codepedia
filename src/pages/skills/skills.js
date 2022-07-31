import React from "react";
import image1 from "../../assests/images/001.png";
import image2 from "../../assests/images/002.png";
import image3 from "../../assests/images/003.png";
import image4 from "../../assests/images/004.png";
import image5 from "../../assests/images/005.png";
import image6 from "../../assests/images/006.png";
import "./skills.css";

function skills() {
  return (
    <>
      <section className="section1">
        <div className="title1">
          <h1 className="section1-h1">Skills that can help you</h1>
          <p className="note">
            these are some selected websites which can learn you learn differnt
            languages which are currently used very widely and plus you can also
            learn data structure for interviews because for any technical
            interviews one must have the knowleadge of data structure.you can
            also learn differnt algorithms for solving complex problems
          </p>
        </div>
        <div className="services">
          <div className="service1">
            <div className="icon">
              <img src={image1} alt="" className="icon-img" />
            </div>
            <h2 className="service1-h2">
              <a
                className="service-a"
                href="https://docs.python.org/3/tutorial/index.html"
                target="blank"
              >
                PYTHON
              </a>
            </h2>
            currently the most used and hot treanding language to learn
          </div>
          <div className="service1">
            <div className="icon">
              <img src={image2} alt="" className="icon-img" />
            </div>
            <h2 className="service1-h2">
              <a
                className="service-a"
                href="https://www.geeksforgeeks.org/data-structures"
                target="blank"
              >
                DATA STRUCTURE
              </a>
            </h2>
            DS are the most important think to learnafter learning any language
            for securing better job in big companies.
          </div>
          <div className="service1">
            <div className="icon">
              <img src={image3} alt="" className="icon-img" />
            </div>
            <h2 className="service1-h2">
              <a
                href="https://www.cplusplus.com/ "
                target="blank"
                className="service-a"
              >
                C++
              </a>
            </h2>
            it is one of the core language ,its a bit old but still very widly
            use in industries.
          </div>
          <div className="service1">
            <div className="icon">
              <img src={image4} alt="" className="icon-img" />
            </div>
            <h2 className="service1-h2">
              <a
                href="https://www.javatpoint.com/java-tutorial"
                target="blank"
                className="service-a"
              >
                JAVA
              </a>
            </h2>
            just like c++,its also an one of the core langauge and have an very
            vast use in industies almost 70% of todays companies still use it.
          </div>
          <div className="service1">
            <div className="icon">
              <img src={image5} alt="" className="icon-img" />
            </div>
            <h2 className="service1-h2"> 
              <a
                className="service-a"
                href="https://www.geeksforgeeks.org/fundamentals-of-algorithms/"
                target="blank"
              >
                ALGORITHMS
              </a>
            </h2>
            ALGOs are also very important if one is preparing for big tech
            companies ,its helps user to solve tough and complex programming
            questions.
          </div>
          <div className="service1">
            <div className="icon">
              <img src={image6} alt="" className="icon-img" />
            </div>
            <h2 className="service1-h2">
              <a
                className="service-a"
                href="https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics"
                target="blank"
              >
                JAVASCRIPT
              </a>
            </h2>
            just like python it is also an very hot and trending language in
            industies.iths widely use in web Development almost 90% companies
            uses this language for there web related work.
          </div>
        </div>
      </section>
    </>
  );
}

export default skills;
