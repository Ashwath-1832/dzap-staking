import { ethers } from "ethers";
import { STAKING_CONTRACT_ADDRESS } from "../constants";
import StakeAbi from "../abi/staking.json";
import { getSigner } from "./signer";

export const unstake = async () => {
  const stakeContract = new ethers.Contract(
    STAKING_CONTRACT_ADDRESS,
    StakeAbi,
    await getSigner()
  );
  try {
    const tx = await stakeContract.unstake();
    tx.wait(1);
    alert("Unstake successfull!");
  } catch (err) {
    console.log("Something went worng!:", err);
  }
};
