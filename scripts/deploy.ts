import { ethers } from "hardhat"

async function main() {
  const EthDonate = await ethers.getContractFactory("EthDonation")
  const ethdonate = await EthDonate.deploy()

  await ethdonate.deployed()

  console.log(`Contract deployed to ${ethdonate.address} `)

  // Checks for owner address.
  const ownerAdd = await ethdonate.owner()
  console.log("Address of owner is :", ownerAdd)
  // Call the donateEth function on the contract with custom parameters
  // const name = "Gurpreet" // Name of the donator
  // const message = "Let's check" // Message left by the donator
  // const ethAmount = ethers.utils.parseEther("1") // Donation amount in Ether

  // // Send the donation transaction with the custom ether amount
  // const overrides = {
  //   value: ethAmount,
  // }

  // const tx = await ethdonate.donateEth(name, message, ethAmount, overrides)
  // await tx.wait()

  // console.log("Donation successful!")
}

// We recommend this pattern to be ablze to use async/await everywhere
// and properly handle errors.
main().catch((error: Error) => {
  console.error(error)
  process.exitCode = 1
})
