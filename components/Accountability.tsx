"use client";

import { ConnectButton, useActiveAccount } from "thirdweb/react";
import { chain } from "@/app/chain";
import { client } from "@/app/client";

export const Accountability = () => {
  const account = useActiveAccount();

  if (account) {
    return (
      <div style={{ textAlign: "center", minWidth: "500px" }}>
        <ConnectButton client={client} chain={chain} />
      </div>
    );
  }
};
