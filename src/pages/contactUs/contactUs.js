import React, {useReducer, useState} from "react";
import {send} from "emailjs-com";
import "./contactUs.css";
import image1 from "../../assests/images/address.png";
import image2 from "../../assests/images/email.png";
import image3 from "../../assests/images/call.png";

let initialMailState = {
  from_name: "",
  to_name: "Shreeyansh",
  message: "",
  reply_to: "",
};

let initialState = {
  data: null,
  isLoading: false,
  error: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "REQUEST":
      return {...state, isLoading: true};
    case "SUCCESS":
      return {...state, data: action.response.status, isLoading: false};
    case "ERROR":
      return {
        ...state,
        data: null,
        isLoading: false,
        error: action.response.status,
      };
    case "RESET":
      return {...state, data: null, isLoading: false, error: null};
    default:
      return state;
  }
};

function ContactUs() {
  const [toSend, setToSend] = useState(initialMailState);
  const [status, dispatch] = useReducer(reducer, initialState);
  const controller = new AbortController();
  let signal = controller.signal;

  const handleChange = (e) => {
    setToSend({...toSend, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!/\S+@\S+\.\S+/.test(toSend.reply_to)) {
      dispatch({type: "ERROR", response: {status: 400}});
      setToSend(initialMailState);
      setTimeout(() => {
        dispatch({type: "RESET"});
      }, 3000);
      return;
    }
    controller.abort();
    let serviceId = process.env.REACT_APP_SERVICE_ID;
    let templateId = process.env.REACT_APP_TEMPLATE_ID;
    let key = process.env.REACT_APP_PUBLIC_KEY;
    let timerId = null;
    dispatch({type: "REQUEST"});

    send(serviceId, templateId, toSend, key, {signal})
      .then((response) => {
        clearTimeout(timerId);
        dispatch({type: "SUCCESS", response: response});
        setToSend(initialMailState);
        setTimeout(() => {
          dispatch({type: "RESET"});
        }, 3000);
      })
      .catch((err) => {
        clearTimeout(timerId);
        dispatch({type: "ERROR", response: {status: 500}});
        setToSend(initialMailState);
        setTimeout(() => {
          dispatch({type: "RESET"});
        }, 3000);
      });
    timerId = setTimeout(() => {
      controller.abort();
      setToSend(initialMailState);
    }, 5000);
  };

  return (
    <div className="section3">
      <div className="title4">
        <h1 className="he">Contact us</h1>
        <p className="section3-p">
          connect with me for any updates...thank you.
        </p>
      </div>
      <div className="contact">
        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="input50">
                <input
                  type="text"
                  placeholder="Enter Name"
                  autoComplete="off"
                  required
                  value={toSend.from_name}
                  onChange={handleChange}
                  name="from_name"
                />
              </div>
              <div className="input50">
                <input
                  type="text"
                  placeholder="Enter Email"
                  autoComplete="off"
                  required
                  value={toSend.reply_to}
                  onChange={handleChange}
                  name="reply_to"
                />
              </div>
            </div>
            <div className="form-row">
              <div className="input100">
                <textarea
                  placeholder="Message"
                  autoComplete="off"
                  required
                  value={toSend.message}
                  onChange={handleChange}
                  name="message"
                ></textarea>
              </div>
            </div>
            <div className="row">
              <div className="input100">
                <div>
                  <button
                    type="submit"
                    value="Send"
                    className="sendBtn"
                    disabled={status.isLoading}
                  >
                    Send
                  </button>
                </div>
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {status.data === 200 && (
                    <div className="success-message">
                      Mail Sent Successfully
                    </div>
                  )}
                  {status.error === 500 && (
                    <div className="error-message">
                      Something went wrong, please try again
                    </div>
                  )}
                  {status.error === 400 && (
                    <div className="info-message">
                      Please enter email in correct format
                    </div>
                  )}
                </div>
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
              <h4>My Email</h4>
              <a href="mailto:shreeyansh.rawat@gmail.com">
                shreeyansh.rawat@gmail.com
              </a>
              <br />
            </div>
          </div>
          <div className="info-box">
            <img src={image3} className="contact-icon" alt="" />
            <div className="details">
              <h4>Call</h4>
              <p>9695072068</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
