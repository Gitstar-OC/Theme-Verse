import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import Arrow from "../assets/SuccessArrow.png";
import { FaGithubSquare, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const SuccessfulMessage = ({ onClose }) => {
  return (
    <div className="bg-message rounded-[25px] relative mt-32 mb-32 ml-96 mr-[25rem]">
      <IoClose
        className="cursor-pointer absolute top-4 right-4 text-[#0500FF] w-[3rem] h-[3rem] hover:text-[#09FFB5] dark:hover:text-[#09FFB5]"
        onClick={onClose} // Add onClick event handler
      />
      
      <div className="flex flex-col ml-10 ">
        <div className="flex mt-10">
          <img src={Arrow} alt="Arrow Image" className="w-16 h-16 mt-4" />
          <h1 className="font-cF text-[3rem] ml-10 text-black dark:text-white">Message Sent Successfully</h1>
        </div>

        <p className="font-cL text-[2.25rem] text-black dark:text-white mt-4 ml-24 mr-10">
          Your message has been sent successfully, and you will hear from me within 24 hours. 😃 
        </p>
        
        <div className="mt-4  mb-4">
          <p className="underline text-black dark:text-white font-cL text-[1.5rem]">Follow on other platforms</p>
          <div className="flex space-x-4 mt-4">
            <a href="https://github.com/Gitstar-OC" className="text-black dark:text-white icon-bounce w-10 h-10 hover:text-[#09FFB5] dark:hover:text-[#09FFB5]">
              <FaGithubSquare className="w-full h-full" />
            </a>
            <a href="https://www.instagram.com/oc__coder/" className="text-black dark:text-white icon-bounce w-10 h-10 hover:text-[#09FFB5] dark:hover:text-[#09FFB5]">
              <FaInstagram className="w-full h-full" />
            </a>
            <a href="https://www.linkedin.com/in/om-chandankar/" className="text-black dark:text-white icon-bounce w-10 h-10 hover:text-[#09FFB5] dark:hover:text-[#09FFB5]">
              <FaLinkedin className="w-full h-full" />
            </a>
            <a href="https://x.com/Om_Chandankar" className="text-black dark:text-white icon-bounce w-10 h-10 hover:text-[#09FFB5] dark:hover:text-[#09FFB5]">
              <FaSquareXTwitter className="w-full h-full" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessfulMessage;
