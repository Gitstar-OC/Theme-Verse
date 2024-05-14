import React from 'react'
import TV1 from "../assets/Logos/TV.1.png"
import { FaOpencart } from "react-icons/fa";

const Navigation = () => {
  return (
    <>
    <header className='bg-slate-400 flex'>
    <img className="w-[160px] h-[120px]" src={TV1} alt="logo" />
    <FaOpencart />
    <nav className="font-bold font-mono text-4xl bg-black text-white flex"> 

    {/* Soon adding other navigation paths and completing the figma filew */}
    </nav>
    </header>
    </>
  )
}

export default Navigation
