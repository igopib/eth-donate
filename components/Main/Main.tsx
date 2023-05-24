import React from "react"
import { customMessage, buttonText, ethAmount } from "../../src/custom"
import Style from "./Main.module.css"

const Main = () => {
  return (
    <div className="w-full h-screen flex flex-col gap-2 justify-center items-center text-center">
      <div>{customMessage}</div>
      <div className={Style.Input}>
        <div className="flex items-center justify-between  pl-8 mt-4 p-2 py-4 gap-4 bg-white/5 border border-black">
          <input type="text" placeholder={ethAmount} className="" />
          <button className="bg-black hover:scale-105 text-white  border-white/40 border-[1px] cursor-pointer duration-200 text-lg m-2 ">
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  )
}

export default Main
