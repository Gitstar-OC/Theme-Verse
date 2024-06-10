import { useState } from 'react';
import { FilterSidebar, Navigation, Footer, AllProjectSection } from '../components/Exports';

const Themes = () => {
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
      <Navigation />
      <div className="flex mt-16">
        <FilterSidebar onFilterChange={handleFilterChange} />
        <div className="flex-1 p-4">
          <AllProjectSection filters={filters} />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Themes;
