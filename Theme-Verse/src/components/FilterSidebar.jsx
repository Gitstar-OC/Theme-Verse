// FilterSidebar.js
import React from 'react';

const FilterSidebar = () => {
  return (
    <div className="filter-sidebar relative p-4 theme-bg text-theme">
      <h2 className="font-cL text-2xl theme-text">Filter</h2>
      <div className="border-b-3 border-heading my-4"></div>
      <div className="space-y-4">
        <div>
          <input type="checkbox" id="payment-app" className="mr-2" />
          <label htmlFor="payment-app" className="font-cF text-xl theme-text">Payment App</label>
        </div>
        <div>
          <input type="checkbox" id="ai-website" className="mr-2" />
          <label htmlFor="ai-website" className="font-cF text-xl theme-text">AI Website</label>
        </div>
        <div>
          <input type="checkbox" id="shoe-website" className="mr-2" />
          <label htmlFor="shoe-website" className="font-cF text-xl theme-text">Shoe Website</label>
        </div>
        <div>
          <input type="checkbox" id="restaurant" className="mr-2" />
          <label htmlFor="restaurant" className="font-cF text-xl theme-text">Restaurant</label>
        </div>
      </div>
      <div className="my-6"></div>
      <div className="space-y-4">
        <div>
          <input type="checkbox" id="chakra-ui" className="mr-2" />
          <label htmlFor="chakra-ui" className="font-cF text-xl theme-text">Chakra UI</label>
        </div>
        <div>
          <input type="checkbox" id="react" className="mr-2" />
          <label htmlFor="react" className="font-cF text-xl theme-text">React</label>
        </div>
        <div>
          <input type="checkbox" id="tailwind" className="mr-2" />
          <label htmlFor="tailwind" className="font-cF text-xl theme-text">Tailwind</label>
        </div>
        <div>
          <input type="checkbox" id="vite" className="mr-2" />
          <label htmlFor="vite" className="font-cF text-xl theme-text">Vite</label>
        </div>
      </div>
    </div>
  );
}

export default FilterSidebar;
