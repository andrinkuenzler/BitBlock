import { ethers } from "hardhat";
import { hrtime } from "process";

async function main() {
  const Events = await ethers.getContractFactory('EventContract')
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
