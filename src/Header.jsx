import React from "react";
import logo from "./assets/logo.svg";
import mmLogo from "./assets/MetaMask.svg";

function Header(props) {
  const { address, isConnected, connect } = props;
  return (
    <header>
      <div className="header">
        <div className="leftHeading">
          <img src={logo} alt="Logo" className="logo" />
        </div>
        <div className="rightHeading">
          <span className="activeIcon" />
          Polygon
          <button
            className={`connectBtn ${isConnected ? "connected" : ""}`}
            onClick={connect}
          >
            {isConnected ? (
              <>
                <img src={mmLogo} alt="MetaMask" className="mmLogo" />
                {address.slice(0, 4) + "..." + address.slice(38)}
              </>
            ) : (
              <>Connect to a wallet</>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
