import { getContract } from "thirdweb";
import { client } from "@/app/client";
import { chain } from "@/app/chain";
import { contractABI } from "./contractABI.ts";

const contractAddress = "0xF1a554439ea1B97476F3d187Aec3C636b319E86B";

export const contract = getContract({
  client: client,
  chain: chain,
  address: contractAddress,
  abi: contractABI,
});
