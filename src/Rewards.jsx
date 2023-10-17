import React from "react";
import maticLogo from "./assets/maticLogo.png";
import StakeInfo from "./components/StakeInfo";
import MMlogo from "./assets/MetaMask.svg";
import Buttons from "./components/Buttons";

function Rewards() {
  return (
    <div className="rewardsContainer">
      <div className="rewardsSection">
        <div>
          <img src={maticLogo} className="tokenIcon" />
        </div>
        <StakeInfo
          title="My Rewards"
          subTitle="Unclaimed Rewards"
          amount="1200 WMatic"
        />
        <div className="totalRewards">
          Total Rewards Claimed: 1.8015 WMatic{" "}
          <img src={MMlogo} alt="logo" className="mmLogo" />
        </div>
        <Buttons label="Claim Rewards" className="rewardsBtn" />
      </div>
    </div>
  );
}

export default Rewards;
