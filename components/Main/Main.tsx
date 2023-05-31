import React, { useState, ChangeEvent } from "react"
import { customMessage, buttonText } from "../../src/custom"
import Style from "./Main.module.css"

// Smart Contract Imports for Wagmi.sh
import { useAccount, usePrepareContractWrite, useContractWrite } from "wagmi"
import { parseEther, parseGwei } from "viem"
import contractInterface from "../../src/contractABI.json"

const Main: React.FC = () => {
    const [inputValue, setInputValue] = useState<string>("0")

    // Using the Wagmi.sh useContractWrite hook to set up a transaction.
    const { data, isLoading, isSuccess, write } = useContractWrite({
        address: "0x8ccaf90ea4f9425d14cb982ace979c542881a147",
        abi: contractInterface,
        functionName: "donateEth",
    })

    // Special thanks to chatgpt for this replace and match.
    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value
        let sanitizedValue = value.replace(/[^0-9.]+/g, "") // Remove non-numeric characters except decimal point
        const decimalCount = (sanitizedValue.match(/\./g) || []).length // Count the decimal points

        // Limit to one decimal point
        if (decimalCount > 1) {
            const parts = sanitizedValue.split(".")
            sanitizedValue = parts[0] + "." + parts.slice(1).join("")
        }

        setInputValue(sanitizedValue)
    }

    // Function runs on click of the button and runs the wagmi write to process the transaction.
    const handleButtonClick = () => {
        const parsedValue = parseEther(`${parseFloat(inputValue) || 0}`)

        /* Write() here uses inputs to use pass in donateEth function. parsedValue is used as an parameter for function and also to pass in as value for the payable function */
        write({
            args: ["Vegita", "It's over 9000!", parsedValue],
            value: parsedValue,
        })

        console.log(inputValue)
    }

    return (
        <div className="flex h-screen w-full flex-col items-center justify-center gap-2 text-center">
            <div>{customMessage}</div>
            <div className={Style.Input}>
                <div className="mt-4 flex items-center  justify-between gap-4 border border-black bg-white/5 p-2 py-4 pl-8">
                    <input
                        type="text"
                        inputMode="decimal"
                        className=""
                        value={inputValue}
                        onChange={handleInputChange}
                    />
                    <button
                        disabled={!write}
                        onClick={handleButtonClick}
                        className="m-2 cursor-pointer border-[1px]  border-white/40 bg-black text-lg text-white duration-200 hover:scale-105"
                    >
                        {buttonText}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Main
