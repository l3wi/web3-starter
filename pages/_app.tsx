import "../styles/globals.css";
import "@rainbow-me/rainbowkit/styles.css";

import type { AppProps } from "next/app";
import { WagmiConfig, createClient, configureChains } from "wagmi";
import { Toaster } from "react-hot-toast";

import {
  mainnet,
  arbitrum,
  optimism,
  arbitrumGoerli,
  baseGoerli,
} from "@wagmi/core/chains";

import { publicProvider } from "wagmi/providers/public";
import {
  getDefaultWallets,
  lightTheme,
  RainbowKitProvider,
} from "@rainbow-me/rainbowkit";

const { chains, provider } = configureChains(
  process.env.NODE_ENV === "development"
    ? [mainnet, arbitrum, optimism, arbitrumGoerli, baseGoerli]
    : [mainnet, arbitrum, optimism],
  [publicProvider()]
);
const { connectors } = getDefaultWallets({
  appName: "Digital Standard Unit",
  chains,
});
const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider
        chains={chains}
        theme={lightTheme({
          accentColor: "rgb(79 70 229)",
          borderRadius: "medium",
        })}
      >
        <Component {...pageProps} />
        <Toaster />
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default MyApp;
