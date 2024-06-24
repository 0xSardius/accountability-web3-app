"use client";

import {
  ConnectButton,
  useActiveAccount,
  useReadContract,
} from "thirdweb/react";
import { chain } from "@/app/chain";
import { client } from "@/app/client";

export const Accountability = () => {
  const account = useActiveAccount();

  const { data: depositAmount } = useReadContract();

  if (account) {
    return (
      <div style={{ textAlign: "center", minWidth: "500px" }}>
        <ConnectButton client={client} chain={chain} />
      </div>
    );
  }
};
