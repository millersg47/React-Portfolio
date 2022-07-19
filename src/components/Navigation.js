import React, { useState } from "react";
import "../styles/nav.css";
//add link to resume file location;
import resume from "../assets/SM_Resume0717.pdf";

function Nav(props) {
  const { page, setPage } = props;
  return (
    <ul className="navbar-nav nav-ul custom-navbar">
      <li className="nav-item custom-nav-item" onClick={() => setPage("About")}>
        About
      </li>
      <li
        className="nav-item custom-nav-item"
        onClick={() => setPage("AllProjects")}
      >
        Projects
      </li>
      <li
        className="nav-item custom-nav-item"
        onClick={() => setPage("Contact")}
      >
        Contact
      </li>
      <a href={resume} target="_blank" className="resume">
        <li className="nav-item custom-nav-item">Resume</li>
      </a>
    </ul>
  );
}

export default Nav;
