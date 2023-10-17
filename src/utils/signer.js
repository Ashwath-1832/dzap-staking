import { ethers } from "ethers";

export async function getSigner() {
  const provider = new ethers.BrowserProvider(window.ethereum);

  const signer = await provider.getSigner();
  return signer;
}
