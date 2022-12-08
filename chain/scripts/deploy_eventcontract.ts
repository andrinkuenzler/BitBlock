import { ethers } from "hardhat";

async function main() {
  const Events = await ethers.getContractFactory('EventContract')
  const Tickets = await ethers.getContractFactory('BitBlockToken')
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
