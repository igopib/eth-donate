import React, { useState } from "react"
import { customMessage, buttonText, ethAmount } from "../../src/custom"
import Style from "./Main.module.css"

// Smart Contract Imports
import { useAccount, usePrepareContractWrite, useContractWrite } from "wagmi"
import { parseEther } from "viem"
import contractInterface from "../../src/contractABI.json"
import { contractAddress } from "../../src/custom"

const Main = () => {
    // App states
    const [ethValue, setEthValue] = useState(ethAmount)

    const { config, error } = usePrepareContractWrite({
        address: "0xE4aA5Ec56117830114370a5472a3161642C922C3",
        abi: contractInterface,
        functionName: "donateEth",
        args: ["Gurpreet", "My message", parseEther("1")],
    })

    const {
        data,
        isLoading,
        isSuccess,
        write: donateEth,
    } = useContractWrite(config)

    return (
        <div className="flex h-screen w-full flex-col items-center justify-center gap-2 text-center">
            <div>{customMessage}</div>
            <div className={Style.Input}>
                <div className="mt-4 flex items-center  justify-between gap-4 border border-black bg-white/5 p-2 py-4 pl-8">
                    <input type="text" className="" />
                    <button
                        onClick={() => donateEth?.()}
                        className="m-2 cursor-pointer border-[1px]  border-white/40 bg-black text-lg text-white duration-200 hover:scale-105 "
                    >
                        {buttonText}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Main
