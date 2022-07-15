import React, { useState } from "react";

function Header(props) {
  const { children } = props;
  return (
    <div className="navbar">
      <h1>Sophie Miller</h1>
      {children}
    </div>
  );
}

export default Header;
