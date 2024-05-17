import React from 'react'
import { FaOpencart } from "react-icons/fa";
import BG from "../assets/Rectangle 4150.png"


const Navigation = () => {
  return (
    <>
    <header /*style={{backgroundImage: {BG}}} */  className='bg-cover bg-fixed bg-gradient-to-r from-teal-500 via-blue-700 via- to-sky-300 ' >
      {/* <img src={BG} alt="Image" />  */}
        <FaOpencart />
        <h1> Hellow world</h1>
    <nav className="font-bold font-mono text-4xl bg-black text-white flex">

    {/* Soon adding other navigation paths and completing the figma filew */}
    This is navigation bar
    </nav>
    <img src={BG} alt='image' width=  '100%' height= "40px"/>
    </header>
    </>
  )
}

export default Navigation;
