const FilterSidebar = ({ onFilterChange }) => {
  const handleCheckboxChange = (event) => {
    const { id, checked } = event.target;
    onFilterChange((prevFilters) => ({
      ...prevFilters,
      [id]: checked,
    }));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="filter-sidebar relative p-4 mt-16 ml-4 theme-bg text-theme flex flex-col items-center">
      <h2 className="font-cL text-4xl justify-start theme-text mb-2">Filters</h2>
      <div className="border-b-3 border-heading w-full my-4"></div>
      <div className="space-y-4 w-full">
        <div className="flex items-center group">
          <input type="checkbox" id="Payment Website" className="mr-2 custom-checkbox" onChange={handleCheckboxChange} />
          <label htmlFor="Payment Website" className="filter-text">Payment Website</label>
        </div>
        <div className="flex items-center group">
          <input type="checkbox" id="AI" className="mr-2 custom-checkbox" onChange={handleCheckboxChange} />
          <label htmlFor="AI" className="filter-text">AI Website</label>
        </div>
        <div className="flex items-center group">
          <input type="checkbox" id="shopping" className="mr-2 custom-checkbox" onChange={handleCheckboxChange} />
          <label htmlFor="shopping" className="filter-text">E-commerce</label>
        </div>
        <div className="flex items-center group">
          <input type="checkbox" id="Restaurant" className="mr-2 custom-checkbox" onChange={handleCheckboxChange} />
          <label htmlFor="Restaurant" className="filter-text">Restaurant</label>
        </div>
      </div>
      <div className="border-b-3 border-heading w-full my-4"></div>
      <div className="space-y-4 w-full">
        <div className="flex items-center group">
          <input type="checkbox" id="Vanilla JavaScript" className="mr-2 custom-checkbox" onChange={handleCheckboxChange} />
          <label htmlFor="Vanilla JavaScript" className="filter-text">Vanilla JavaScript</label>
        </div>
        <div className="flex items-center group">
          <input type="checkbox" id="React" className="mr-2 custom-checkbox" onChange={handleCheckboxChange} />
          <label htmlFor="React" className="filter-text">React</label>
        </div>
        <div className="flex items-center group">
          <input type="checkbox" id="Tailwind" className="mr-2 custom-checkbox" onChange={handleCheckboxChange} />
          <label htmlFor="Tailwind" className="filter-text">Tailwind</label>
        </div>
        <div className="flex items-center group">
          <input type="checkbox" id="Vite" className="mr-2 custom-checkbox" onChange={handleCheckboxChange} />
          <label htmlFor="Vite" className="filter-text">Vite</label>
        </div>
        <div className="flex items-center group">
          <input type="checkbox" id="Chakra UI" className="mr-2 custom-checkbox" onChange={handleCheckboxChange} />
          <label htmlFor="Chakra UI" className="filter-text">Chakra UI</label>
        </div>
      </div>
      <div className="border-b-3 border-heading w-full my-4"></div>
    </div>
  );
}

export default FilterSidebar;
