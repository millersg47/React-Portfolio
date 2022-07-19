import React, { useState } from "react";
import linkedin from "../images/linkedin.png";
import email from "../images/email.png";
import "../styles/footer.css";

function Footer() {
  return (
    <div className="footer">
      <a href="https://www.linkedin.com/in/sophie-garner-miller/">
        <img className="icon" src={linkedin} />
      </a>
      <a href="mailto: millersg47@gmail.com">
        <img className="icon" src={email} />
      </a>
    </div>
  );
}

export default Footer;
