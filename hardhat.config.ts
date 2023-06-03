import { HardhatUserConfig } from "hardhat/config"
import "@nomicfoundation/hardhat-toolbox"
import "@nomiclabs/hardhat-etherscan"
import * as dotenv from "dotenv"
dotenv.config()

const SEPOLIA_RPC_URL = process.env.SEPOLIA_RPC_URL
const PRIVATE_KEY = process.env.PRIVATE_KEY || ""
const ETHERSCAN_API = process.env.ETHERSCAN_API || ""

const config: HardhatUserConfig = {
    solidity: "0.8.18",
    networks: {
        sepolia: {
            chainId: 11155111,
            url: SEPOLIA_RPC_URL,
            accounts: [PRIVATE_KEY],
        },
    },
    etherscan: {
        // Your API key for Etherscan
        // Obtain one at https://etherscan.io/
        apiKey: ETHERSCAN_API,
    },
}

export default config
