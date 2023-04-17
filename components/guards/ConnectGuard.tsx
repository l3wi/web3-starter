import { useConnectModal } from "@rainbow-me/rainbowkit";
import React from "react";
import { useAccount } from "wagmi";

type Props = {
  children?: React.ReactNode;
};

export default function ConnectGuard(props: Props) {
  const { address, isConnected } = useAccount();
  return <div>{isConnected ? props.children : <ConnectButton />}</div>;
}

const ConnectButton: React.FC<{ smol?: boolean }> = ({ smol }) => {
  const { openConnectModal } = useConnectModal();
  return (
    <>
      <button
        onClick={() => openConnectModal && openConnectModal()}
        className="w-full py-3 mb-4 font-bold text-white bg-indigo-600 rounded hover:bg-indigo-500"
      >
        Connect Wallet
      </button>
    </>
  );
};
