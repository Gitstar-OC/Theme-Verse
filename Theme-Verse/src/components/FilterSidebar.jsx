// FilterSidebar.js
// import React from 'react';

const FilterSidebar = () => {
  return (
    <div className="filter-sidebar relative p-4 mt-16 ml-4 theme-bg text-theme flex flex-col items-center">
      <h2 className="font-cL text-4xl theme-text mb-4">Filter</h2>
      <div className="border-b-3 border-heading w-full my-4"></div>
      <div className="space-y-4 w-full">
        <div className="flex items-center group">
          <input type="checkbox" id="payment-app" className="mr-2 custom-checkbox" />
          <label htmlFor="payment-app" className="filter-text group-hover:text-[#09FFB5]">Payment App</label>
        </div>
        <div className="flex items-center group">
          <input type="checkbox" id="ai-website" className="mr-2 custom-checkbox" />
          <label htmlFor="ai-website" className="filter-text group-hover:text-[#09FFB5]">AI Website</label>
        </div>
        <div className="flex items-center group">
          <input type="checkbox" id="shoe-website" className="mr-2 custom-checkbox" />
          <label htmlFor="shoe-website" className="filter-text group-hover:text-[#09FFB5]">Shoe Website</label>
        </div>
        <div className="flex items-center group">
          <input type="checkbox" id="restaurant" className="mr-2 custom-checkbox" />
          <label htmlFor="restaurant" className="filter-text group-hover:text-[#09FFB5]">Restaurant</label>
        </div>
      </div>
      <div className="border-b-3 border-heading w-full my-4"></div>
      <div className="space-y-4 w-full">
        <div className="flex items-center group">
          <input type="checkbox" id="chakra-ui" className="mr-2 custom-checkbox" />
          <label htmlFor="chakra-ui" className="filter-text group-hover:text-[#09FFB5]">Chakra UI</label>
        </div>
        <div className="flex items-center group">
          <input type="checkbox" id="react" className="mr-2 custom-checkbox" />
          <label htmlFor="react" className="filter-text group-hover:text-[#09FFB5]">React</label>
        </div>
        <div className="flex items-center group">
          <input type="checkbox" id="tailwind" className="mr-2 custom-checkbox" />
          <label htmlFor="tailwind" className="filter-text group-hover:text-[#09FFB5]">Tailwind</label>
        </div>
        <div className="flex items-center group">
          <input type="checkbox" id="vite" className="mr-2 custom-checkbox" />
          <label htmlFor="vite" className="filter-text group-hover:text-[#09FFB5]">Vite</label>
        </div>
      </div>
      <div className="border-b-3 border-heading w-full my-4"></div>
    </div>
  );
}

export default FilterSidebar;
