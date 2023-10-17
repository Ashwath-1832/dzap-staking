import "./App.css";
import Header from "./Header";
import Details from "./Details";
import Funds from "./Funds";
import Rewards from "./Rewards";

function App() {
  return (
    <div className="App">
      <Header />
      <Details />
      <div className="fundsRewardsBox">
        <Funds />
        <Rewards />
      </div>
    </div>
  );
}

export default App;
