import type { NextPage } from "next"
import Head from "next/head"
import Navbar from "../components/Navbar/Navbar"
import Main from "../components/Main/Main"

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Eth Donate</title>
        <meta content="Donate ETH." name="description" />
        <link href="/favicon.ico" rel="icon" />
      </Head>
      <div>
        <Navbar />
        <Main />
      </div>
    </div>
  )
}

export default Home
