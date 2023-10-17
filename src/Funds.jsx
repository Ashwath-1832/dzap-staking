import React from "react";
import maticLogo from "./assets/maticLogo.png";
import StakeInfo from "./components/StakeInfo";
import Buttons from "./components/Buttons";

function Funds() {
  return (
    <div className="fundsContainer">
      <div className="fundsSection">
        <div>
          <img src={maticLogo} className="tokenIcon" />
        </div>
        <StakeInfo
          title="My Funds"
          subTitle="WMatic staked"
          amount="1220 WMatic"
        />
        <div className="avlBalance">Availabe: 12.5454 WMatic</div>
        <Buttons label="Stake" />
        <Buttons label="Unstake" className="stakeOff" />
      </div>
    </div>
  );
}

export default Funds;
