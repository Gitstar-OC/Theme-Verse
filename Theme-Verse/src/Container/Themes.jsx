// Themes.js
// import React from 'react';
import {FilterSidebar, Navigation, Footer } from '../components/Exports';

const Themes = () => {
  return (
    <>
      <Navigation />
      <div className="flex mt-16"> {/* Added margin-top to avoid overlap with navbar */}
        <FilterSidebar />
        <div className="main-content flex-1 p-4">
          {/* Your main content goes here */}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Themes;
