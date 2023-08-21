import React from "react";
import "./contactUs.css";
import image1 from "../../assests/images/address.png";
import image2 from "../../assests/images/email.png";
import image3 from "../../assests/images/call.png";

function contactUs() {
  return (
    <div className="section3">
      <div className="title4">
        <h1 className="he">Contact us</h1>
        <p className="section3-p">
          connect with us for any updates...thank you.
        </p>
      </div>
      <div className="contact">
        <div className="contact-form">
          <form>
            <div className="form-row">
              <div className="input50">
                <input
                  type="text"
                  placeholder="First Name"
                  autoComplete="off"
                />
              </div>
              <div className="input50">
                <input type="text" placeholder="Last Name" autoComplete="off" />
              </div>
            </div>
            <div className="form-row">
              <div className="input50">
                <input type="text" placeholder="Email" autoComplete="off" />
              </div>
              <div className="input50">
                <input type="text" placeholder="Subject" autoComplete="off" />
              </div>
            </div>
            <div className="form-row">
              <div className="input100">
                <textarea placeholder="Message" autoComplete="off"></textarea>
              </div>
            </div>
            <div className="row">
              <div className="input100">
                <input type="submit" value="Send" className="sendBtn" />
              </div>
            </div>
          </form>
        </div>

        <div className="contact-info">
          <div className="info-box">
            <img src={image1} className="contact-icon" alt="" />
            <div className="details">
              <h4>Address</h4>
              <p>Bengaluru, India</p>
            </div>
          </div>
          <div className="info-box">
            <img src={image2} className="contact-icon" alt="" />
            <div className="details">
              <h4>Email</h4>
              <a href="mailto:shreeyansh.rawat@gmail.com">
                shreeyansh.rawat@gmail.com
              </a>
              <br />
              <a href="mailto:anyone@example.com">shreeyansh.29@gmail.com</a>
            </div>
          </div>
          <div className="info-box">
            <img src={image3} className="contact-icon" alt="" />
            <div className="details">
              <h4>Call</h4>
              <p>9695072068</p>
              {/* <a href="tel:+19784444444">555 4444</a> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default contactUs;
