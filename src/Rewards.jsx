import React, { useState, useEffect } from "react";
import maticLogo from "./assets/maticLogo.png";
import StakeInfo from "./components/StakeInfo";
import MMlogo from "./assets/MetaMask.svg";
import Buttons from "./components/Buttons";
import { getStakedUserData } from "./utils/getStakedData";
import { useAccount } from "wagmi";
import { claim } from "./utils/claimrewards";

function Rewards() {
  const { address } = useAccount();
  const [stakedData, setStakedData] = useState();

  async function stakedDataFn() {
    const stakedData = await getStakedUserData(address);
    setStakedData(stakedData);
  }

  useEffect(() => {
    stakedDataFn();
  }, []);

  const OnRewardsClick = () => {
    claim();
  };

  return (
    <div className="rewardsContainer">
      <div className="rewardsSection">
        <div>
          <img src={maticLogo} alt="logo" className="tokenIcon" />
        </div>
        <StakeInfo
          title="My Rewards"
          subTitle="Unclaimed Rewards"
          amount={`${stakedData?.unclaimedRewards || 0} MPEL`}
        />
        <div className="totalRewards">
          Total Rewards Claimed: {stakedData?.totalRewardsClaimed || 0} MPEL{" "}
          <img src={MMlogo} alt="logo" className="mmLogo" />
        </div>
        <Buttons
          label="Claim Rewards"
          className="rewardsBtn"
          onClick={OnRewardsClick}
        />
      </div>
    </div>
  );
}

export default Rewards;
