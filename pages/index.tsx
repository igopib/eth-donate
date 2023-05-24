import { ConnectButton } from "@rainbow-me/rainbowkit"
import type { NextPage } from "next"
import Head from "next/head"
import styles from "../styles/Home.module.css"

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Eth Donate</title>
        <meta content="Donate ETH." name="description" />
        <link href="/favicon.ico" rel="icon" />
      </Head>
      <div>
        <ConnectButton />
      </div>
    </div>
  )
}

export default Home
