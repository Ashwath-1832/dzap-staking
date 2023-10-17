import { ethers, formatEther, formatUnits } from "ethers";
import { STAKING_CONTRACT_ADDRESS } from "../constants";
import { getSigner } from "./signer";
import StakeAbi from "../abi/staking.json";

export const getStakedUserData = async (address) => {
  const stakeContract = new ethers.Contract(
    STAKING_CONTRACT_ADDRESS,
    StakeAbi,
    await getSigner()
  );

  const contractRes = await stakeContract.getStakerInfo(address);
  const formattedValue = {
    stakedAmount: formatEther(contractRes[0]),
    unclaimedRewards: formatEther(contractRes[1]),
    totalRewardsClaimed: formatEther(contractRes[2]),
    claimCheckpoint: formatEther(contractRes[3]),
    unstakeTime: formatEther(contractRes[4]),
  };
  return formattedValue;
};

export const getStakeDetails = async () => {
  const stakeContract = new ethers.Contract(
    STAKING_CONTRACT_ADDRESS,
    StakeAbi,
    await getSigner()
  );

  const stakeDetail = await stakeContract.getDetails();
  const apy = formatUnits(stakeDetail[3], 1);

  return apy;
};

export const getTotalStakedData = async () => {
  const stakeContract = new ethers.Contract(
    STAKING_CONTRACT_ADDRESS,
    StakeAbi,
    await getSigner()
  );
  const data = await stakeContract.getTVLDetails();
  const formattedDate = {
    totalFundsStaked: formatEther(data[0]),
    totalFundsUnstaked: formatEther(data[1]),
    totalRewardsDistributed: formatEther(data[2]),
  };
  return formattedDate;
};
