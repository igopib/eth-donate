import React from "react"
import Link from "next/link"
import { ConnectButton } from "@rainbow-me/rainbowkit"

const Navbar = () => {
    return (
        <div className="fixed w-full p-4">
            <div className="flex justify-between">
                <div className="flex items-center gap-8 text-xl">
                    <div className="transform duration-300">
                        <Link href="/">home</Link>
                    </div>
                    <div className="transform duration-300">
                        <Link href="https://github.com/igopib/eth-donate">
                            github
                        </Link>
                    </div>
                </div>
                <div>
                    <ConnectButton />
                </div>
            </div>
        </div>
    )
}

export default Navbar
