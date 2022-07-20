import React from "react";
import "../styles/header.css";

function Header(props) {
  const { children } = props;
  return (
    <div className="navbar header-bkg">
      <h1 className="header-name">SOPHIE MILLER</h1>
      {children}
    </div>
  );
}

export default Header;
