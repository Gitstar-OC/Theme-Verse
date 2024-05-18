// import React from 'react'


import HomeLogo from "./assets/HomeLogo.svg";
import ExampleImage from "../assets/example-image.png"; // Ensure this path is correct

const Main = () => {
  return (
    <section className='h-[100vh] theme-bg flex items-center justify-center' id='section'>
      <div className='flex flex-col md:flex-row items-center justify-center w-full max-w-screen-xl mx-auto px-4'>
        <div className='text-center md:text-left md:w-1/2 mb-8 md:mb-0'>
          <img src={HomeLogo} alt="Home Logo" className='mx-auto md:mx-0 mb-8' />
          <h1 className='font-cF text-[64px] font-normal leading-normal text-heading mb-4'>App Heading</h1>
          <p className='font-cL text-[32px] font-normal leading-normal text-third mb-8'>
            This is a description about the app. It provides details about the features and functionalities.
          </p>
        </div>
        <div className='relative md:w-1/2'>
          <img
            src={ExampleImage}
            alt="Example"
            className='rounded-[25px] border-3 border-third'
          />
          <div className='absolute inset-0 rounded-[25px] bg-third opacity-50 md:opacity-0' />
        </div>
      </div>
    </section>
  );
};

export default Main;
