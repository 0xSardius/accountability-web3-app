import { ConnectEmbed } from "@/app/thirdweb";
import { client } from "@/app/client";
import { chain } from "@/app/chain";
import { Accountability } from "../../components/Accountability";

export default function Home() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
      }}
    >
      <h1 style={{ marginBottom: "20px" }}>Accountability dApp</h1>
      <ConnectEmbed client={client} chain={chain} />

      <Accountability />
    </div>
  );
}
