import { ethers } from "ethers";
import { STAKING_CONTRACT_ADDRESS } from "../constants";
import claimRewards from "../abi/staking.json";
import { getSigner } from "./signer";

export const claim = async () => {
  const claimContract = new ethers.Contract(
    STAKING_CONTRACT_ADDRESS,
    claimRewards,
    await getSigner()
  );
  try {
    const tx = await claimContract.claimRewards();
    tx.wait(1);
    alert("Claim successfull!");
  } catch (err) {
    console.log("Something went worng!:", err);
  }
};
