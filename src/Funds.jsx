import React, { useState, useEffect } from "react";
import maticLogo from "./assets/maticLogo.png";
import StakeInfo from "./components/StakeInfo";
import Buttons from "./components/Buttons";
import { STAKING_CONTRACT_ADDRESS, TOKEN_ADDRESS } from "./constants";
import { ethers, formatEther, parseEther } from "ethers";
import { getSigner } from "./utils/signer";
import { useAccount } from "wagmi";
import { getStakedUserData } from "./utils/getStakedData";
import { getTokenBalance } from "./utils/getBalance";

function Funds() {
  const { address } = useAccount();
  const [stakedData, setStakedData] = useState();
  const [tokenBalance, setTokenBalance] = useState(0);

  async function stakedDataFn() {
    const stakedData = await getStakedUserData(address);
    setStakedData(stakedData);
  }

  async function getBalanceFn() {
    const balance = await getTokenBalance(address);
    setTokenBalance(balance);
  }

  useEffect(() => {
    stakedDataFn();
    getBalanceFn();
  }, []);

  return (
    <div className="fundsContainer">
      <div className="fundsSection">
        <div>
          <img src={maticLogo} className="tokenIcon" />
        </div>
        <StakeInfo
          title="My Funds"
          subTitle="WMatic staked"
          amount={stakedData?.stakedAmount || 0}
        />
        <div className="avlBalance">Availabe: {tokenBalance} MPEL</div>
        <Buttons label="Stake" />
        <Buttons label="Unstake" className="stakeOff" />
      </div>
    </div>
  );
}

export default Funds;
