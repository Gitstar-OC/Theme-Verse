import { useState, useContext } from 'react';
import { FilterSidebar, AllProjectSection } from '../components/Exports';
import { CartContext } from '../MainLayout';

const styles = `
@media (max-width: 1080px) {
  .filter-sidebar {
    display: none;
  }
  }
`;

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
    <style>{styles}</style>
      <div className="flex mt-16 left-0">
        <div className="filter-sidebar">
          <FilterSidebar onFilterChange={handleFilterChange} />
        </div>
        <div className="flex-1 p-4 md:p-0">
          <AllProjectSection filters={filters} addToCart={addToCart} />
        </div>
      </div>
    </>
  );
}

export default Themes;
