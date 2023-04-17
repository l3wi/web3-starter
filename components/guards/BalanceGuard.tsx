import { BigNumber, constants, ethers, utils } from "ethers";
import React, { useState } from "react";
import { useAccount, useBalance } from "wagmi";

type Props = {
  token: `0x${string}`;
  amount: BigNumber;
  children?: React.ReactNode;
};

export default function BalanceGuard(props: Props) {
  const { token, amount } = props;
  const { address } = useAccount();
  const { data } = useBalance({ token, address });

  const enoughTokens = data ? data.value.gte(amount) : true;

  return (
    <div>
      {enoughTokens && (!token || !address || data?.value.isZero) ? (
        props.children
      ) : (
        <button
          disabled
          className="w-full py-3 mb-4 font-bold text-white bg-indigo-600 rounded hover:bg-indigo-500"
        >
          Not Enough Balance
        </button>
      )}
    </div>
  );
}
