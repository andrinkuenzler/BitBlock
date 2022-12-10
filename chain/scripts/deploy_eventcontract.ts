import { ethers } from "hardhat";

async function main() {
  const Events = await ethers.getContractFactory('EventContract')
  const Tickets = await ethers.getContractFactory('BitBlockToken')
  console.log('Deploying Contracts...');
  const events = await Events.deploy();
  await events.deployed();
  const tokens = await Tickets.deploy();
  await tokens.deployed();
  console.log('Events deployed to:', events.address);
  console.log('Tickets deployed to:', tokens.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
