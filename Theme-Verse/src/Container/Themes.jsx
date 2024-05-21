// Themes.js
import React from 'react';
import { Navigation, Footer } from '../components/Exports';
import FilterSidebar from './FilterSidebar';

const Themes = () => {
  return (
    <>
      <Navigation />
      <div className="flex">
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
