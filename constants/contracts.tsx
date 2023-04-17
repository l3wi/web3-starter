interface Contracts {
  [key: number]: {
    name: string;
    isTestnet: boolean;
    DSU: `0x${string}`;
    USDC: `0x${string}`;
    RESERVE: `0x${string}`;
  };
}

const Contracts: Contracts = {
  42161: {
    name: "Arbitrum",
    isTestnet: false,
    DSU: "0x52C64b8998eB7C80b6F526E99E29ABdcC86B841b",
    USDC: "0xff970a61a04b1ca14834a43f5de4533ebddb5cc8",
    RESERVE: "0x0d49c416103Cbd276d9c3cd96710dB264e3A0c27",
  },
  1: {
    name: "Ethereum",
    isTestnet: false,
    DSU: "0x605d26fbd5be761089281d5cec2ce86eea667109",
    USDC: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
    RESERVE: "0xD05aCe63789cCb35B9cE71d01e4d632a0486Da4B",
  },
  10: {
    name: "Optimism",
    isTestnet: false,
    DSU: "0x52C64b8998eB7C80b6F526E99E29ABdcC86B841b",
    USDC: "0x7f5c764cbc14f9669b88837ca1490cca17c31607",
    RESERVE: "0x0d49c416103Cbd276d9c3cd96710dB264e3A0c27",
  },

  421613: {
    name: "Arbitrum Testnet",
    isTestnet: true,
    DSU: "0x52C64b8998eB7C80b6F526E99E29ABdcC86B841b",
    USDC: "0x6775842ae82bf2f0f987b10526768ad89d79536e",
    RESERVE: "0x0d49c416103Cbd276d9c3cd96710dB264e3A0c27",
  },
  84531: {
    name: "Base Testnet",
    isTestnet: true,
    DSU: "0x52C64b8998eB7C80b6F526E99E29ABdcC86B841b",
    USDC: "0x7b4adf64b0d60ff97d672e473420203d52562a84",
    RESERVE: "0x13b7A79e050ef2C3fDc858EFD5c066c3655be841",
  },
};

export default Contracts;
