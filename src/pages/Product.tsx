import HeaderProduct from '../images/HeaderProduct.png';
import PromoCards from '../components/PromoCards';
import FilterComponent from '../components/filter';

function Product() {



  return (
    <main>
      <section>
        <section
          className="container-header h-36 md:h-80 w-full flex items-center bg-cover"
          style={{ backgroundImage: `url(${HeaderProduct})` }} >
          <p className="text-header font-semibold text-white text-wrap md:text-5xl md:px-32 text-lg px-8">
            We Provide Good Coffee and Healthy Meals
          </p>
        </section>
      </section>

      

        <PromoCards />

        {/* <div className="filter-menu basis-1/3 bg-black rounded-lg flex flex-col w-4/5 p-8 gap-4 h-max overflow-x-auto">
          <section className="filter flex flex-row justify-between text-white w-full">
            <div>
              <h4 className="text-2xl">Filter</h4>
            </div>
            <button>
              <h5>Reset Filter</h5>
            </button>
          </section>

          <section className="InputSearch text-white flex flex-col gap-2 text-black">
            <label className="text-xl" htmlFor="searchFilter">
              Search
            </label>
            <input className="p-4 rounded-lg" type="text" id="searchFilter" name="searchFilter" placeholder="Search Your Product" />
          </section>

          <section className="category text-white flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <p className="text-xl">Category</p>
              <form className="flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <input className="w-6 h-6 rounded-2 bg-black" type="checkbox" id="favorite-product" name="favorite-product" />
                  <label htmlFor="favorite-product">Favorite Product</label>
                </div>
                <div className="flex items-center gap-4">
                  <input className="w-6 h-6 rounded-2 bg-black" type="checkbox" id="coffee" name="coffee" />
                  <label htmlFor="coffee">Coffee</label>
                </div>
                <div className="flex items-center gap-4">
                  <input className="w-6 h-6 rounded-2 bg-black" type="checkbox" id="foods" name="foods" />
                  <label htmlFor="foods">Foods</label>
                </div>
                <div className="flex items-center gap-4">
                  <input className="w-6 h-6 rounded-2 bg-black" type="checkbox" id="add-on" name="add-on" />
                  <label htmlFor="add-on">Add-on</label>
                </div>
              </form>
            </div>
          </section>

          <section className="flex flex-col gap-2 text-white">
            <p className="text-xl">Sort By</p>
            <form className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <input className="w-6 h-6 rounded-2 bg-black" type="checkbox" id="buy-1-get-1" name="buy-1-get-1" />
                <label htmlFor="buy-1-get-1">Buy 1 get 1</label>
              </div>
              <div className="flex items-center gap-4">
                <input className="w-6 h-6 rounded-2 bg-black" type="checkbox" id="flash-sale" name="flash-sale" />
                <label htmlFor="flash-sale">Flash sale</label>
              </div>
              <div className="flex items-center gap-4">
                <input className="w-6 h-6 rounded-2 bg-black" type="checkbox" id="birthday-package" name="birthday-package" />
                <label htmlFor="birthday-package">Birthday Package</label>
              </div>
              <div className="flex items-center gap-4">
                <input className="w-6 h-6 rounded-2 bg-black" type="checkbox" id="cheap" name="cheap" />
                <label htmlFor="cheap">Cheap</label>
              </div>
            </form>
          </section>

          <section className="flex flex-col gap-4">
            <div>
              <p className="text-xl text-white">Range Price</p>
            </div>
            <div className="slidecontainer w-full">
              <input type="range" min="1" max="100" defaultValue="25" className="slider w-full" id="myRange1" />
            </div>
          </section>

          <section>
            <button className="bg-[#FF8906] w-full h-8 rounded-lg">Apply Filter</button>
          </section>
        </div> */}

        <FilterComponent />
        
    </main>
  );
}

export default Product;
