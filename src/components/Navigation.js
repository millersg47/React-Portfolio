import React, { useState } from "react";
import "../styles/nav.css";

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
    </ul>
  );
}

export default Nav;
