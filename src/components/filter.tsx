import { ChangeEvent, useState } from 'react';
import axios from 'axios';

interface Filters {
  category: string;
  searchFilter: string;
  rangePrice: string;
}

const FilterComponent = () => {
  const [filters, setFilters] = useState<Filters>({
    category: '',
    searchFilter: '',
    rangePrice: '25',
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  const handleCategoryChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      category: event.target.value,
    }));
  };

  const handleApplyFilter = () => {
    const { category, searchFilter, rangePrice } = filters;
    const categoryFilters = { category, searchFilter, rangePrice };

    const params = new URLSearchParams(categoryFilters).toString();

    console.log(filters);
    console.log(categoryFilters);
    console.log(params);

    axios.get(`http://localhost:8000/product/?${params}`)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  };

  return (
    <div className="filter-menu basis-1/3 bg-black rounded-lg flex flex-col w-4/5 p-8 gap-4 h-max overflow-x-auto">
      <section className="filter flex flex-row justify-between text-white w-full">
        <div>
          <h4 className="text-2xl">Filter</h4>
        </div>
        <button onClick={() => setFilters({
          category: '',
          searchFilter: '',
          rangePrice: '25',
        })}>
          <h5>Reset Filter</h5>
        </button>
      </section>

      <section className="InputSearch text-white flex flex-col gap-2 text-black">
        <label className="text-xl" htmlFor="searchFilter">
          Search
        </label>
        <input
          className="p-4 rounded-lg"
          type="text"
          id="searchFilter"
          name="searchFilter"
          placeholder="Search Your Product"
          value={filters.searchFilter}
          onChange={handleChange}
        />
      </section>

      <section className="category text-white flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <p className="text-xl">Category</p>
          <form className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <input
                className="w-6 h-6 rounded-2 bg-black"
                type="radio"
                id="favorite-product"
                name="category"
                value="favoriteProduct"
                checked={filters.category === 'favoriteProduct'}
                onChange={handleCategoryChange}
              />
              <label htmlFor="favorite-product">Favorite Product</label>
            </div>
            <div className="flex items-center gap-4">
              <input
                className="w-6 h-6 rounded-2 bg-black"
                type="radio"
                id="coffee"
                name="category"
                value="coffee"
                checked={filters.category === 'coffee'}
                onChange={handleCategoryChange}
              />
              <label htmlFor="coffee">Coffee</label>
            </div>
            <div className="flex items-center gap-4">
              <input
                className="w-6 h-6 rounded-2 bg-black"
                type="radio"
                id="foods"
                name="category"
                value="foods"
                checked={filters.category === 'foods'}
                onChange={handleCategoryChange}
              />
              <label htmlFor="foods">Foods</label>
            </div>
            <div className="flex items-center gap-4">
              <input
                className="w-6 h-6 rounded-2 bg-black"
                type="radio"
                id="add-on"
                name="category"
                value="addOn"
                checked={filters.category === 'addOn'}
                onChange={handleCategoryChange}
              />
              <label htmlFor="add-on">Add-on</label>
            </div>
          </form>
        </div>
      </section>

      <section className="flex flex-col gap-4">
        <div>
          <p className="text-xl text-white">Range Price</p>
        </div>
        <div className="slidecontainer w-full">
          <input
            type="range"
            min="1"
            max="100"
            value={filters.rangePrice}
            className="slider w-full"
            id="myRange1"
            name="rangePrice"
            onChange={handleChange}
          />
        </div>
      </section>

      <section>
        <button
          className="bg-[#FF8906] w-full h-8 rounded-lg"
          onClick={handleApplyFilter}
        >
          Apply Filter
        </button>
      </section>
    </div>
  );
};

export default FilterComponent;
