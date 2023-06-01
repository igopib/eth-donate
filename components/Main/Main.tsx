import React, { useState, ChangeEvent } from "react"
import { customMessage, buttonText } from "../../src/custom"
import Style from "./Main.module.css"

// Smart Contract Imports for Wagmi.sh
import { useAccount, usePrepareContractWrite, useContractWrite } from "wagmi"
import { parseEther, parseGwei } from "viem"
import contractInterface from "../../src/contractABI.json"
import { contractAddress } from "../../src/custom"

const Main: React.FC = () => {
    const [name, setName] = useState<string>("")
    const [message, setMessage] = useState<string>("")
    const [inputValue, setInputValue] = useState<string>("0")

    /* Using the Wagmi.sh useContractWrite hook to set up a transaction. 
       Edit chainId to the Id of the blockchain where the contract is deployed
    */
    const { data, isLoading, isSuccess, write } = useContractWrite({
        address: `0x${contractAddress}`,
        abi: contractInterface,
        functionName: "donateEth",
        chainId: 11155111,
        onSuccess(data) {
            console.log("Success", data)
        },
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

    const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value)
    }

    const handleMessageChange = (event: ChangeEvent<HTMLInputElement>) => {
        setMessage(event.target.value)
    }

    // Function runs on click of the button and runs the wagmi write to process the transaction.
    const handleButtonClick = () => {
        const parsedValue = parseEther(`${parseFloat(inputValue)}`)

        /* Write() here uses inputs to use pass in donateEth function. parsedValue is used as a parameter for the function and also to pass in as value for the payable function */
        write({
            args: [name, message, parsedValue],
            value: parsedValue,
        })
    }

    return (
        <div className="flex h-screen w-full flex-col items-center justify-center gap-2 text-center">
            <div>{customMessage}</div>
            <div className={Style.Input}>
                <div className="max-w-[550px] flex-col items-center border border-black">
                    <input
                        type="text"
                        inputMode="text"
                        placeholder="Enter name"
                        maxLength={30}
                        className="border-b border-zinc-600"
                        value={name}
                        onChange={handleNameChange}
                    />
                    <input
                        type="text"
                        inputMode="text"
                        placeholder="Enter message"
                        maxLength={60}
                        className="border-b border-zinc-600"
                        value={message}
                        onChange={handleMessageChange}
                    />
                    <input
                        type="text"
                        inputMode="decimal"
                        className="border-b border-zinc-600"
                        maxLength={10}
                        placeholder="0.0"
                        value={inputValue}
                        onChange={handleInputChange}
                    />
                    <div className="flex items-center justify-center text-center">
                        <button
                            disabled={!write}
                            onClick={handleButtonClick}
                            className="h-full w-full cursor-pointer items-center justify-center border-[1px] border-white/40 bg-[#3A3B3F] py-5 text-xl uppercase text-white duration-200 hover:bg-[#1A1B1F]"
                        >
                            {buttonText}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main
