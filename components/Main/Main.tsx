import React from "react"
import { customMessage, buttonText, ethAmount } from "../../src/custom"
import Style from "./Main.module.css"

// Smart Contract Imports
import { useAccount, usePrepareContractWrite, useContractWrite } from "wagmi"
import contractInterface from "../../src/contractABI.json"
import { contractAddress } from "../../src/custom"

const sendETH = async (params: string) => {}

const Main = () => {
    return (
        <div className="flex h-screen w-full flex-col items-center justify-center gap-2 text-center">
            <div>{customMessage}</div>
            <div className={Style.Input}>
                <div className="mt-4 flex items-center  justify-between gap-4 border border-black bg-white/5 p-2 py-4 pl-8">
                    <input type="text" placeholder={ethAmount} className="" />
                    <button className="m-2 cursor-pointer border-[1px]  border-white/40 bg-black text-lg text-white duration-200 hover:scale-105 ">
                        {buttonText}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Main
