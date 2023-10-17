import React from "react";
import logo from "./assets/logo.svg";

function Header() {
  return (
    <header>
      <div className="header">
        <div className="leftHeading">
          <img src={logo} alt="Logo" className="logo" />
        </div>
        <div className="rightHeading">
          <span className="activeIcon" />
          Polygon
          <button className="connectBtn">Connect to a wallet</button>
        </div>
      </div>
    </header>
  );
}

export default Header;
