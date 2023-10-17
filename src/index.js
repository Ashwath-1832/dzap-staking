import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { configureChains, WagmiConfig, createConfig } from "wagmi";
import { publicProvider } from "wagmi/providers/public";
import { polygonMumbai } from "wagmi/chains";

const { provider, webSocketProvider } = configureChains(
  [polygonMumbai],
  [publicProvider()]
);

const config = createConfig({
  autoConnect: true,
  provider,
  webSocketProvider,
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <WagmiConfig config={config}>
      <App />
    </WagmiConfig>
  </React.StrictMode>
);
