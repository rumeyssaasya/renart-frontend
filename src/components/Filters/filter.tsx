import React from 'react';
import './filter.css';

interface FiltersProps {
  filters: {
    minPrice: string;
    maxPrice: string;
    minPopularity: string;
    maxPopularity: string;
    sortBy: string;
    sortOrder: string;
  };
  setFilters: React.Dispatch<React.SetStateAction<FiltersProps["filters"]>>;
}

const Filters: React.FC<FiltersProps> = ({ filters, setFilters }) => {
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFilters(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const clearFilters = () => {
    setFilters({
      minPrice: '',
      maxPrice: '',
      minPopularity: '',
      maxPopularity: '',
      sortBy: '',
      sortOrder: '',
    });
  };

  return (
    <div className="filters-container">
      <div className="filter-group">
        <input
          type="number"
          name="minPrice"
          value={filters.minPrice}
          onChange={handleChange}
          placeholder="Minimum Price"
          className="filter-input"
        />
        <input
          type="number"
          name="maxPrice"
          value={filters.maxPrice}
          onChange={handleChange}
          placeholder="Maximum Price"
          className="filter-input"
        />
         </div>

        <div className="filter-group">
        <input
          type="number"
          step="0.1"
          min="0"
          max="5"
          name="minPopularity"
          value={filters.minPopularity}
          onChange={handleChange}
          placeholder="Minimum Popularity"
          className="filter-input"
        />
      
        <input
          type="number"
          step="1"
          min="0"
          max="5"
          name="maxPopularity"
          value={filters.maxPopularity}
          onChange={handleChange}
          placeholder="Maximum Popularity"
          className="filter-input"
        />
        </div>
      <div className='button'>
        <button onClick={clearFilters} className="clear-button" >
            Clear
        </button>
      </div>
    </div>
  );
};

export default Filters;
