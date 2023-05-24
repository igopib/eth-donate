import React from "react"
import Link from "next/link"
import { ConnectButton } from "@rainbow-me/rainbowkit"

const Navbar = () => {
  return (
    <div className="flex justify-between p-2">
      <div className="flex gap-8 text-xl">
        <p>home</p>
        <p>github</p>
        <p>code</p>
      </div>
      <div>
        <ConnectButton />
      </div>
    </div>
  )
}

export default Navbar
