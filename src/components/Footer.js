import React from "react";
import linkedin from "../images/linkedin.png";
import email from "../images/email.png";
import github from "../images/github-logo.png";
import stackoverflow from "../images/stackoverflow.png";
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
      <a href="https://github.com/millersg47">
        <img className="icon" src={github} />
      </a>
      <a href="https://stackoverflow.com/users/17968918/sophiem">
        <img className="icon" src={stackoverflow} />
      </a>
    </div>
  );
}

export default Footer;
