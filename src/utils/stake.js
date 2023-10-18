import { ethers, formatEther, parseEther } from "ethers";
import { STAKING_CONTRACT_ADDRESS, TOKEN_ADDRESS } from "../constants";
import ERC20Abi from "../abi/erc20.json";
import StakeAbi from "../abi/staking.json";
import { getSigner } from "./signer";

export const stakeContractCall = async (address, amount) => {
  const tokenContract = new ethers.Contract(
    TOKEN_ADDRESS,
    ERC20Abi,
    await getSigner()
  );

  const stakeContract = new ethers.Contract(
    STAKING_CONTRACT_ADDRESS,
    StakeAbi,
    await getSigner()
  );

  const allowance = await tokenContract.allowance(
    address,
    STAKING_CONTRACT_ADDRESS
  );

  if (formatEther(allowance) < amount) {
    await tokenContract.approve(STAKING_CONTRACT_ADDRESS, amount);
  }
  try {
    const tx = await stakeContract.stake(parseEther(amount), "0x");
    tx.wait(1);
    alert(`You have successfully stake: ${amount}`);
  } catch (err) {
    console.log("Something went wrong:", err);
  }
};
