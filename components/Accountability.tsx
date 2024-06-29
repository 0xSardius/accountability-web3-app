"use client";

import {
  ConnectButton,
  useActiveAccount,
  useReadContract,
} from "thirdweb/react";
import { chain } from "@/app/chain";
import { client } from "@/app/client";
import { contract } from "../utils/contract";
import { deposit } from "thirdweb/extensions/erc20";

export const Accountability = () => {
  const account = useActiveAccount();

  const { data: depositAmount } = useReadContract(
    contract: contract,
    method: "getDeposit"
  );

  const {data: taskCount} = useReadContract({
    contract: contract,
    method: "getTaskCount",
  });
  }

  if (account) {
    return (
      <div style={{ textAlign: "center", minWidth: "500px" }}>
        <ConnectButton client={client} chain={chain} />
        <div>
          {depositAmount?.toString() == 0 && taskCount?.toString() == 0 ? (
            <></>
          ) : depositAmount?.toString() !== "0" && taskCount?.toString() === "0" ? (
            <></>
          ) : (
            <></>
          )}
        </div>
      </div>
    );
  }
};
