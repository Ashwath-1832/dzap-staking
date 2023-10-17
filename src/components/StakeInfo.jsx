import React from "react";

function StakeInfo({ title, subTitle, amount, className }) {
  return (
    <div className="stakeInfoContainer">
      <div className="stakeTitle">{title}</div>
      <div className="stakeSub">{subTitle}</div>
      <div className="stakeAmount">{amount}</div>
    </div>
  );
}

export default StakeInfo;
