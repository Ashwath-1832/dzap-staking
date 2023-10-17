import "./App.css";
import Header from "./Header";
import Details from "./Details";
import Funds from "./Funds";
import Rewards from "./Rewards";
import { useConnect, useAccount } from "wagmi";
import { MetaMaskConnector } from "wagmi/connectors/metaMask";

function App() {
  const { address, isConnected } = useAccount();
  const { connect } = useConnect({
    connector: new MetaMaskConnector(),
  });

  return (
    <div className="App">
      <Header connect={connect} isConnected={isConnected} address={address} />
      <Details />
      <div className="fundsRewardsBox">
        <Funds />
        <Rewards />
      </div>
    </div>
  );
}

export default App;
