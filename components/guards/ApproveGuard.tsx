import { BigNumber, constants, ethers, utils } from "ethers";
import React, { useState } from "react";
import {
  erc20ABI,
  useAccount,
  useContractRead,
  useContractWrite,
  usePrepareContractWrite
} from "wagmi";

type Props = {
  token: `0x${string}`;
  spender: `0x${string}`;
  amount: BigNumber;
  children?: React.ReactNode;
};

export default function ApproveGuard(props: Props) {
  const { token, spender, amount } = props;
  const { address } = useAccount();

  const { data } = useContractRead({
    address: token,
    abi: erc20ABI,
    functionName: "allowance",
    args: [address || constants.AddressZero, spender],
    watch: true
  });

  const approved = data ? data.gte(amount) : false;
  return (
    <div>
      {approved || !token || !address ? (
        props.children
      ) : (
        <ApproveButton token={token} spender={spender} />
      )}
    </div>
  );
}

const ApproveButton = ({
  token,
  spender
}: {
  token: `0x${string}`;
  spender: `0x${string}`;
}) => {
  const { config } = usePrepareContractWrite({
    address: token,
    abi: erc20ABI,
    functionName: "approve",
    args: [spender, ethers.constants.MaxUint256]
  });

  const { write } = useContractWrite({
    ...config,
    onSettled(data, error) {
      if (error) console.log("Failed", error);
      if (data) console.log("Success", data);
    }
  });

  return (
    <button
      onClick={() => write && write()}
      className="w-full py-3 mb-4 font-bold text-white bg-indigo-600 rounded hover:bg-indigo-500"
    >
      Approve Token
    </button>
  );
};
