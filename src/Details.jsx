import React, { useState, useEffect } from "react";
import { getStakeDetails, getTotalStakedData } from "./utils/getStakedData";

function Details() {
  const [apy, setApy] = useState(0);
  const [stakedData, setStakedData] = useState();

  async function apyDataFn() {
    const stakeDetails = await getStakeDetails();
    setApy(stakeDetails);
  }

  async function getTotalStakedDateFn() {
    const stakedData = await getTotalStakedData();
    setStakedData(stakedData);
  }

  useEffect(() => {
    apyDataFn();
    getTotalStakedDateFn();
  }, []);
  return (
    <div className="detailsContainer">
      <div className="detailsSection">
        <div className="apySection">
          <div className="apyInfo">{apy}%</div>
          <div className="apyDisplay">%APY</div>
        </div>
        <div className="balanceSection">
          <div className="balanceInfo">
            {stakedData?.totalFundsStaked || 0} MPEL
          </div>
          <div className="balanceDisplay">Total MPEL Staked</div>
        </div>
        <div className="stakeSection">
          <div className="stakeInfo">$200000</div>
          <div className="stakeDisplay">Staked Value</div>
        </div>
      </div>
    </div>
  );
}

export default Details;
