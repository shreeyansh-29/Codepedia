import React from "react";
import "./learn.css";
import image1 from "../../assests/images/fcc2.jpg";
import image2 from "../../assests/images/cb.jpg";
import image3 from "../../assests/images/ud.png";
import image4 from "../../assests/images/w3s.jpg";
import image5 from "../../assests/images/gfg.jpg";
import image6 from "../../assests/images/cd.jpg";
import image7 from "../../assests/images/BitDegree.jpg";
import image8 from "../../assests/images/csra.png";
import image9 from "../../assests/images/cc.png";
import image10 from "../../assests/images/codeforces.png";
import image11 from "../../assests/images/hr.png";
import image12 from "../../assests/images/he3.jpg";
import image13 from "../../assests/images/lc.png";
import image14 from "../../assests/images/cb.jpg";
import image15 from "../../assests/images/gfg.jpg";
import image16 from "../../assests/images/ib.jpg";

function learn() {
  return (
    <div className="section2">
      <div className="title3">
        <h1 className="section2-h1">LEARN AND CODE</h1>
        <p className="section2-p">
          these are some selected websites which can learn you learn differnt
          skills and technologies which are currently used very widely and plus
          you can also learn about differnt projects works and problem solving
          skills for interviews because for any technical interviews one must
          have that .these websites have free as well as some paid content in
          this but the prices are quite low.
        </p>
      </div>
      <div class="portfolio">
        <div class="item">
          <img src={image1} alt="" className="item-img" />
          <div class="action">
            <a
              href="https://www.freecodecamp.org/"
              target="blank"
              className="action-a"
            >
              Freecodecmp
            </a>
          </div>
        </div>
        <div class="item">
          <img src={image2} alt="" className="item-img" />
          <div class="action">
            <a
              href="https://coderbyte.com/"
              target="blank"
              className="action-a"
            >
              coderbyte
            </a>
          </div>
        </div>
        <div class="item">
          <img src={image3} alt="" className="item-img" />
          <div class="action">
            <a
              href="https://www.udemy.com/"
              target="blank"
              className="action-a"
            >
              udemy
            </a>
          </div>
        </div>
        <div class="item">
          <img src={image4} alt="" className="item-img" />
          <div class="action">
            <a
              href="https://www.w3schools.com/"
              target="blank"
              className="action-a"
            >
              w3schools
            </a>
          </div>
        </div>
        <div class="item">
          <img src={image5} alt="" className="item-img" />
          <div class="action">
            <a
              href="https://www.geeksforgeeks.org/"
              target="blank"
              className="action-a"
            >
              GFG
            </a>
          </div>
        </div>
        <div class="item">
          <img src={image6} alt="" className="item-img" />
          <div class="action">
            <a
              href="https://www.codecademy.com/"
              target="blank"
              className="action-a"
            >
              codecademy
            </a>
          </div>
        </div>
        <div class="item">
          <img src={image7} alt="" className="item-img" />
          <div class="action">
            <a
              href="https://www.bitdegree.org/learn/"
              target="blank"
              className="action-a"
            >
              bitdegree
            </a>
          </div>
        </div>
        <div class="item">
          <img src={image8} alt="" className="item-img" />
          <div class="action">
            <a
              href="https://www.coursera.org/in"
              target="blank"
              className="action-a"
            >
              coursera
            </a>
          </div>
        </div>
        <div class="title3 b">
          <h1 className="section2-h1">PRATICE AND COMPETE</h1>
          <p className="section2-p">
            these are some best selected websites which can learn you learn
            differnt problem solving abilities which are very usefull for you.
            plus you can also learn about differnt methods to solve problem
            which are bit complex.there are some sites which are competative
            sites and some are purely on DS/AlGO its your choice which on eto
            opt for.good luch and keep coding.
          </p>
        </div>

        <div class="item">
          <img src={image9} alt="" className="item-img" />
          <div class="action">
            <a href="https://www.codechef.com/" className="action-a" target="blank">
              codechef
            </a>
          </div>
        </div>
        <div class="item">
          <img src={image10} alt="" className="item-img" />
          <div class="action">
            <a href="https://codeforces.com/" className="action-a" target="blank">
              codeforces
            </a>
          </div>
        </div>
        <div class="item">
          <img src={image11} alt="" className="item-img" />
          <div class="action">
            <a href="https://www.hackerrank.com/" className="action-a" target="blank">
              hackerrank
            </a>
          </div>
        </div>
        <div class="item">
          <img src={image12} alt="" className="item-img" />
          <div class="action">
            <a href="https://www.hackerearth.com/" className="action-a" target="blank">
              hackerearth
            </a>
          </div>
        </div>
        <div class="item">
          <img src={image13} alt="" className="item-img" />
          <div class="action">
            <a href="https://leetcode.com/" className="action-a" target="blank">
              leetcode
            </a>
          </div>
        </div>
        <div class="item">
          <img src={image14} alt="" className="item-img" />
          <div class="action">
            <a href="https://www.codingame.com/" className="action-a" target="blank">
              coderbyte
            </a>
          </div>
        </div>
        <div class="item">
          <img src={image15} alt="" className="item-img" />
          <div class="action">
            <a
              href="https://practice.geeksforgeeks.org/explore/?"
              className="action-a"
              target="blank"
            >
              GFG
            </a>
          </div>
        </div>
        <div class="item">
          <img src={image16} alt="" className="item-img" />
          <div class="action">
            <a
              href="https://www.interviewbit.com/practice/"
              className="action-a"
              target="blank"
            >
              interviewbit
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default learn;
