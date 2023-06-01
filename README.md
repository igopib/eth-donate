# ETH Donation App

Next.js app, styled using tailwindcss and powered by Solidity smart contracts, built and tested using hardhat framework. Aditionally using Wagmi.sh library to handle the contract interactions.

## Clone

```bash
git clone https://github.com/igopib/eth-donate

yarn
```

## Usage

This is a very easy to customise bundle, there are very few changes you would need to do to the smart contract and the Next.js components mentioned below.

Start of by editing **src/custom.tsx**

```bash

export const customMessage: string = "Donate ETH"


export const buttonText: string = "Donate"


export const contractAddress: string =
    "8ccaf90ea4f9425d14cb982ace979c542881a147"

export const wagmiChainId: number = 11155111

```

**Note**: Enter contract address after 0x

Here you only need to update you deployed smart contract. Deploying your contract will make you the contract **owner** which will make all the donations being sent to your wallet address.

Easiest way to deploy the contract is with the inbuilt **hardhat script** or use [Remix]("https://remix.ethereum.org/").

```bash
yarn hardhat run scripts/deploy.js

npm hardhat run scripts/deploy.js
```
