import React from 'react'
import { FaOpencart } from "react-icons/fa";
import BG from "../assets/Rectangle 4150.png"


const Navigation = () => {
  return (
        <>
    <header /*style={{backgroundImage: {BG}}} */  className='' id='section' >
      {/* <img src={BG} alt="Image" />  */}
        <FaOpencart />
        <h1 className='text-white'> Hellow world</h1>
    <img src={BG} alt='image' width=  '100%'/>


    </header>
    </>
  )
}

export default Navigation;
