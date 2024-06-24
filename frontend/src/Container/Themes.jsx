import { useState, useContext } from 'react';
import { FilterSidebar, AllProjectSection } from '../components/Exports';
import { CartContext } from '../MainLayout';

const Themes = () => {
  const { addToCart } = useContext(CartContext);
  const [filters, setFilters] = useState({
    'Payment Website': false,
    'AI Website': false,
    'E-commerce': false,
    'Restaurant': false,
    'Vanilla JavaScript': false,
    'React': false,
    'Tailwind': false,
    'Vite': false,
  });

  const handleFilterChange = (updatedFilters) => {
    setFilters(updatedFilters);
  };

  return (
    <>
      <div className="flex mt-16">
        <FilterSidebar onFilterChange={handleFilterChange} />
        <div className="flex-1 p-4">
          <AllProjectSection filters={filters} addToCart={addToCart} />
        </div>
      </div>
    </>
  );
}

export default Themes;
