import React from "react";
import {Link} from "react-router-dom";
import "./footer.css";

function footer() {
  let date = new Date().getFullYear();

  return (
    <section className="footer text-center">
      <div className="container">
        <h2 className="footer-h2">Thank you for visiting</h2>
        <form>
          <Link to="/contactus" className="btn1" target="_parent">
            CONTACT US
          </Link>
          <small className="footer-small">Copyright @{date}, Designed by Shreeyansh</small>
        </form>
      </div>
    </section>
  );
}

export default footer;
