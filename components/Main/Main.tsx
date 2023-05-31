import React, { useState, ChangeEvent } from "react"
import { customMessage, buttonText } from "../../src/custom"
import Style from "./Main.module.css"

// Smart Contract Imports for Wagmi.sh
import { useAccount, usePrepareContractWrite, useContractWrite } from "wagmi"
import { parseEther, parseGwei } from "viem"
import contractInterface from "../../src/contractABI.json"

const Main: React.FC = () => {
    const [name, setName] = useState<string>("")
    const [message, setMessage] = useState<string>("")
    const [inputValue, setInputValue] = useState<string>("0")

    // Using the Wagmi.sh useContractWrite hook to set up a transaction.
    const { data, isLoading, isSuccess, write } = useContractWrite({
        address: "0x8ccaf90ea4f9425d14cb982ace979c542881a147",
        abi: contractInterface,
        functionName: "donateEth",
        chainId: 11155111,
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

        console.log(inputValue)
    }

    return (
        <div className="flex h-screen w-full flex-col items-center justify-center gap-2 text-center">
            <div>{customMessage}</div>
            <div className={Style.Input}>
                <div className="max-w-[500px] flex-col items-center  gap-4 border border-black bg-white/5">
                    <input
                        type="text"
                        inputMode="text"
                        placeholder="Your Name"
                        maxLength={30}
                        className=""
                        value={name}
                        onChange={handleNameChange}
                    />
                    <input
                        type="text"
                        inputMode="text"
                        placeholder="Your Message"
                        maxLength={60}
                        className=""
                        value={message}
                        onChange={handleMessageChange}
                    />
                    <input
                        type="text"
                        inputMode="decimal"
                        className=""
                        maxLength={10}
                        placeholder="0.0"
                        value={inputValue}
                        onChange={handleInputChange}
                    />
                    <div className="flex justify-center">
                        <button
                            disabled={!write}
                            onClick={handleButtonClick}
                            className=" m-4 cursor-pointer items-center justify-center border-[1px] border-white/40 bg-black/90 text-xl text-white duration-200 hover:scale-105"
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
