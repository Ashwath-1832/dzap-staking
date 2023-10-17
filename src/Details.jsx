import React from "react";

function Details() {
  return (
    <div className="detailsContainer">
      <div className="detailsSection">
        <div className="apySection">
          <div className="apyInfo">100%</div>
          <div className="apyDisplay">%APY</div>
        </div>
        <div className="balanceSection">
          <div className="balanceInfo">450,202 WMatic</div>
          <div className="balanceDisplay">Total WMatic Staked</div>
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
