import React, { useState } from "react";

function Nav(props) {
  const { page, setPage } = props;
  return (
    <ul className="navbar-nav nav-ul">
      <li className="nav-item" onClick={() => setPage("About")}>
        About Me
      </li>
      <li className="nav-item" onClick={() => setPage("AllProjects")}>
        Projects
      </li>
      <li className="nav-item" onClick={() => setPage("Contact")}>
        Contact
      </li>
    </ul>
  );
}

export default Nav;
