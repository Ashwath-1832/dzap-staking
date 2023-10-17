import { ethers, formatEther } from "ethers";
import { TOKEN_ADDRESS } from "../constants";
import { getSigner } from "./signer";
import ERC20Abi from "../abi/erc20.json";

export const getTokenBalance = async (address) => {
  const erc20Contract = new ethers.Contract(
    TOKEN_ADDRESS,
    ERC20Abi,
    await getSigner()
  );

  const balance = await erc20Contract.balanceOf(address);
  return formatEther(balance);
};
