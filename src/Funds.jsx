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
import { stakeContractCall } from "./utils/stake";
import { unstake } from "./utils/unstake";

function Funds() {
  const { address } = useAccount();
  const [stakedData, setStakedData] = useState();
  const [tokenBalance, setTokenBalance] = useState(0);
  const [inputAmount, setInputAmount] = useState(0);

  const handleChange = (event) => {
    setInputAmount(event.target.value);

    console.log("amount:", event.target.value);
  };

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

  const OnStakeClick = () => {
    stakeContractCall(address, inputAmount);
  };

  const onUnstakeClick = () => {
    unstake();
  };

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
        <div className="stakeFieldContainer">
          <div className="stakeField">
            <img src={maticLogo} alt="logo" className="stakingLogo" />
            WMatic
          </div>
          <input
            type="number"
            className="amountInput"
            placeholder="0.0000"
            onChange={handleChange}
            value={inputAmount}
          ></input>
        </div>
        <div className="avlBalance">Availabe: {tokenBalance} MPEL</div>
        <Buttons label="Stake" onClick={OnStakeClick} />
        <Buttons
          label="Unstake"
          className="stakeOff"
          onClick={onUnstakeClick}
        />
      </div>
    </div>
  );
}

export default Funds;
