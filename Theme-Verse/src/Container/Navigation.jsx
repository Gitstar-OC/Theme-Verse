import React from 'react'
import { FaOpencart } from "react-icons/fa";
//import BG from "../assets/Rectangle 4150.png"


const Navigation = () => {
  return (
        <>
    <header className='bg-hero w-[100%] h-[55px] bg-cover ' id='section' >
              <FaOpencart />
        <h1 className='text-white'> Hellow world</h1>
    {/* <img src={BG} alt='image' width=  '100%'/> */}
    </header>
    </>
  )
}

export default Navigation;
