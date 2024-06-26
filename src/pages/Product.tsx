import React from 'react';
import HeaderProduct from '../images/HeaderProduct.png';
import LeftCarouselArrow from '../icons/leftCarouselArrow.png';
import RightCarouselArrow from '../icons/rightCarouselArrow.png';
import Image46 from '../images/image 46.png';
import P2 from '../images/p2.png';
import Orenshoppingcart from '../icons/orenshopingcart.png';
import Arrowkanan from '../icons/Arrowkanan.png';
import { useSignInState } from '../components/context/SignInToken';

function Product() {

  const {token} = useSignInState()
  
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

      <section className="">
        <section className="todays-promo flex flex-col md:flex-row gap-4 justify-between items-center p-8">
          <div className="todays-promo-text flex flex-row gap-4 text-5xl">
            <p className="todays-promo-text-todays">Today's</p>
            <p className="text-orange-300">Promos</p>
          </div>
          <div className="carousel-btn flex items-center space-x-4">
            <button id="btn-scroll-left" className="carousel-btn-left bg-oren rounded-full p-4">
              <img src={LeftCarouselArrow} alt="Left Arrow" />
            </button>
            <button id="btn-scroll-right" className="carousel-btn-right bg-oren rounded-full p-4">
              <img src={RightCarouselArrow} alt="Right Arrow" />
            </button>
          </div>
        </section>

        <section className="carousel pb-4">
          <div className="carousel-contents w-screen flex flex-row overflow-hidden overflow-x-scroll overflow-x-auto space-x-4 p-8">
            <div className="promo-card flex-shrink-0 flex flex-row items-center bg-[#88B788] rounded-3xl w-80 p-4">
              <div className="promo-image">
                <img src={Image46} alt="" className="promo-img" />
              </div>
              <div className="promo-content text-center mt-4">
                <h1 className="text-xl font-bold">HAPPY MOTHER’S DAY!</h1>
                <h2 className="text-lg">Get one of our favorite menu for free!</h2>
                <a href="#" className="text-white bg-oren px-4 py-2 mt-2 rounded-lg inline-block">
                  Klaim Kupon
                </a>
              </div>
            </div>

            <div className="promo-card flex-shrink-0 flex flex-row items-center bg-[#88B788] rounded-3xl w-80 p-4">
              <div className="promo-image">
                <img src={Image46} alt="" className="promo-img" />
              </div>
              <div className="promo-content text-center mt-4">
                <h1 className="text-xl font-bold">HAPPY MOTHER’S DAY!</h1>
                <h2 className="text-lg">Get one of our favorite menu for free!</h2>
                <a href="#" className="text-white bg-oren px-4 py-2 mt-2 rounded-lg inline-block">
                  Klaim Kupon
                </a>
              </div>
            </div>

            <div className="promo-card flex-shrink-0 flex flex-row items-center bg-[#88B788] rounded-3xl w-80 p-4">
              <div className="promo-image">
                <img src={Image46} alt="" className="promo-img" />
              </div>
              <div className="promo-content text-center mt-4">
                <h1 className="text-xl font-bold">HAPPY MOTHER’S DAY!</h1>
                <h2 className="text-lg">Get one of our favorite menu for free!</h2>
                <a href="#" className="text-white bg-oren px-4 py-2 mt-2 rounded-lg inline-block">
                  Klaim Kupon
                </a>
              </div>
            </div>
          </div>
        </section>
      </section>

      <section className="products-show flex flex-col md:flex-row justify-center p-8 tulisan gap-4">
        <div className="filter-menu basis-1/3 bg-black rounded-lg flex flex-col p-8 gap-4 h-max">
          <section className="filter flex flex-row justify-between text-white w-full">
            <div>
              <h4 className="text-2xl">Filter</h4>
            </div>
            <button>
              <h5>Reset Filter</h5>
            </button>
          </section>

          <section className="InputSearch text-white flex flex-col gap-2">
            <label className="text-xl" htmlFor="searchFilter">
              search
            </label>
            <input className="rounded-lg h-8" type="text" id='searchFilter' name="searchFilter" placeholder="Search Your Product" />
          </section>

          <section className="category text-white flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <p className="text-xl text-white">Category</p>
              <form className="flex flex-col gap-4">
                <div className="gap-4 flex flex-row">
                  <input className="w-6 h-6 rounded-2 bg-black" type="checkbox" id="Favorite Product" name="Favorite Product" />
                  <label htmlFor="Favorite Product"> Favorite Product</label>
                </div>
                <div className="gap-4 flex flex-row">
                  <input className="w-6 h-6 rounded-2 bg-black" type="checkbox" id="coffee" name="coffee" />
                  <label htmlFor="coffee"> coffee</label>
                </div>
                <div className="gap-4 flex flex-row">
                  <input className="w-6 h-6 rounded-2 bg-black" type="checkbox" id="foods" name="foods" />
                  <label htmlFor="foods"> foods</label>
                </div>
                <div className="gap-4 flex flex-row">
                  <input className="w-6 h-6 rounded-2 bg-black" type="checkbox" id="add-on" name="add-on" />
                  <label htmlFor="add-on"> add-on</label>
                </div>
              </form>
            </div>

            <div className="flex flex-col gap-2">
              <p className="text-xl text-white">Sort By</p>
              <form className="flex flex-col gap-4">
                <div className="gap-4 flex flex-row">
                  <input className="w-6 h-6 rounded-2 bg-black" type="checkbox" id="Buy 1 get 1" name="Buy 1 get 1" />
                  <label htmlFor="Buy 1 get 1"> Buy 1 get 1</label>
                </div>
                <div className="gap-4 flex flex-row">
                  <input className="w-6 h-6 rounded-2 bg-black" type="checkbox" id="Flash sale" name="Flash sale" />
                  <label htmlFor="Flash sale"> Flash sale</label>
                </div>
                <div className="gap-4 flex flex-row">
                  <input className="w-6 h-6 rounded-2 bg-black" type="checkbox" id="Birthday Package" name="Birthday Package" />
                  <label htmlFor="Birthday Package"> Birthday Package</label>
                </div>
                <div className="gap-4 flex flex-row">
                  <input className="w-6 h-6 rounded-2 bg-black" type="checkbox" id="Cheap" name="Cheap" />
                  <label htmlFor="Cheap"> Cheap</label>
                </div>
              </form>
            </div>
          </section>

          <section className="flex flex-col gap-4">
            <div>
              <p className="text-xl text-white">Range Price</p>
            </div>
            <div>
              <div className="slidecontainer w-full">
                <input type="range" min="1" max="100" defaultValue="25" className="slider w-full" id="myRange1" />
              </div>
            </div>
          </section>

          <section>
            <button className="bg-[#FF8906] w-full h-8 rounded-lg">Apply Filter</button>
          </section>
        </div>

        <div className="products basis-2/3">
          <div className="product-card">
            <div className="cards flex flex-row flex-wrap justify-center gap-4">
              <div className="max-w-sm rounded overflow-hidden  relative ">
                <img className="w-full" src={P2} alt="Sunset in the mountains" />
                <div className="ml-4 mr-4 mt-56 mb-auto ">
                  <div
                    className="absolute bottom-0 mb-12 bg-white w-11/12 mx-auto p-4  shadow-lg flex flex-col gap-2">
                    <div className="font-bold text-xl mb-2">Hazelnut Latte</div>
                    <p className="text-gray-700 text-base">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia,
                    </p>
                    <div className="flex flex-row gap-2">
                      <div className="stars text-[#FF8906]">
                        <span className="star">★</span>
                        <span className="star">★</span>
                        <span className="star">★</span>
                        <span className="star">★</span>
                        <span className="star">★</span>
                      </div>
                      <div className="rating">
                        5/5
                      </div>
                    </div>

                    <div className="price flex flex-row gap-2">
                      <div className="first-price line-through text-red-800	">
                        <p>20.000</p>
                      </div>
                      <div className="discount-price text-xl text-[#FF8906]">
                        <p>10.000</p>
                      </div>
                    </div>

                    <div className="flex flex-row gap-2 h-10 ">
                      <button className="basis-4/5 bg-orange-400 rounded-xl ">
                        Buy
                      </button>
                      <button
                        className="basis-1/5 rounded-xl border-2 border-orange-400 flex justify-center items-center	">
                        <img className="w-6 h-6" src={Orenshoppingcart} alt="" />
                      </button>
                    </div>

                  </div>
                </div>
              </div>
              <div className="max-w-sm rounded overflow-hidden  relative ">
                <img className="w-full" src={P2} alt="Sunset in the mountains" />
                <div className="ml-4 mr-4 mt-56 mb-auto ">
                  <div
                    className="absolute bottom-0 mb-12 bg-white w-11/12 mx-auto p-4  shadow-lg flex flex-col gap-2">
                    <div className="font-bold text-xl mb-2">Hazelnut Latte</div>
                    <p className="text-gray-700 text-base">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia,
                    </p>
                    <div className="flex flex-row gap-2">
                      <div className="stars text-[#FF8906]">
                        <span className="star">★</span>
                        <span className="star">★</span>
                        <span className="star">★</span>
                        <span className="star">★</span>
                        <span className="star">★</span>
                      </div>
                      <div className="rating">
                        5/5
                      </div>
                    </div>

                    <div className="price flex flex-row gap-2">
                      <div className="first-price line-through text-red-800	">
                        <p>20.000</p>
                      </div>
                      <div className="discount-price text-xl text-[#FF8906]">
                        <p>10.000</p>
                      </div>
                    </div>

                    <div className="flex flex-row gap-2 h-10 ">
                      <button className="basis-4/5 bg-orange-400 rounded-xl ">
                        Buy
                      </button>
                      <button
                        className="basis-1/5 rounded-xl border-2 border-orange-400 flex justify-center items-center	">
                        <img className="w-6 h-6" src={Orenshoppingcart} alt="" />
                      </button>
                    </div>

                  </div>
                </div>
              </div>
              <div className="max-w-sm rounded overflow-hidden  relative ">
                <img className="w-full" src={P2} alt="Sunset in the mountains" />
                <div className="ml-4 mr-4 mt-56 mb-auto ">
                  <div
                    className="absolute bottom-0 mb-12 bg-white w-11/12 mx-auto p-4  shadow-lg flex flex-col gap-2">
                    <div className="font-bold text-xl mb-2">Hazelnut Latte</div>
                    <p className="text-gray-700 text-base">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia,
                    </p>
                    <div className="flex flex-row gap-2">
                      <div className="stars text-[#FF8906]">
                        <span className="star">★</span>
                        <span className="star">★</span>
                        <span className="star">★</span>
                        <span className="star">★</span>
                        <span className="star">★</span>
                      </div>
                      <div className="rating">
                        5/5
                      </div>
                    </div>

                    <div className="price flex flex-row gap-2">
                      <div className="first-price line-through text-red-800	">
                        <p>20.000</p>
                      </div>
                      <div className="discount-price text-xl text-[#FF8906]">
                        <p>10.000</p>
                      </div>
                    </div>

                    <div className="flex flex-row gap-2 h-10 ">
                      <button className="basis-4/5 bg-orange-400 rounded-xl ">
                        Buy
                      </button>
                      <button
                        className="basis-1/5 rounded-xl border-2 border-orange-400 flex justify-center items-center	">
                        <img className="w-6 h-6" src={Orenshoppingcart} alt="" />
                      </button>
                    </div>

                  </div>
                </div>
              </div>
              <div className="max-w-sm rounded overflow-hidden  relative ">
                <img className="w-full" src={P2} alt="Sunset in the mountains" />
                <div className="ml-4 mr-4 mt-56 mb-auto ">
                  <div
                    className="absolute bottom-0 mb-12 bg-white w-11/12 mx-auto p-4  shadow-lg flex flex-col gap-2">
                    <div className="font-bold text-xl mb-2">Hazelnut Latte</div>
                    <p className="text-gray-700 text-base">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia,
                    </p>
                    <div className="flex flex-row gap-2">
                      <div className="stars text-[#FF8906]">
                        <span className="star">★</span>
                        <span className="star">★</span>
                        <span className="star">★</span>
                        <span className="star">★</span>
                        <span className="star">★</span>
                      </div>
                      <div className="rating">
                        5/5
                      </div>
                    </div>

                    <div className="price flex flex-row gap-2">
                      <div className="first-price line-through text-red-800	">
                        <p>20.000</p>
                      </div>
                      <div className="discount-price text-xl text-[#FF8906]">
                        <p>10.000</p>
                      </div>
                    </div>

                    <div className="flex flex-row gap-2 h-10 ">
                      <button className="basis-4/5 bg-orange-400 rounded-xl ">
                        Buy
                      </button>
                      <button
                        className="basis-1/5 rounded-xl border-2 border-orange-400 flex justify-center items-center	">
                        <img className="w-6 h-6" src={Orenshoppingcart} alt="" />
                      </button>
                    </div>

                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-row gap-4 items-center justify-center">
              <div
                className=" bg-gray-200 rounded-3xl p-2 px-4 items-center justify-center hover:bg-oren active:bg-oren">
                1</div>
              <div
                className=" bg-gray-200 rounded-3xl p-2 px-4 items-center justify-center hover:bg-oren active:bg-oren">
                2</div>
              <div
                className=" bg-gray-200 rounded-3xl p-2 px-4 items-center justify-center hover:bg-oren active:bg-oren">
                3</div>
              <div
                className=" bg-gray-200 rounded-3xl p-2 px-4 items-center justify-center hover:bg-oren active:bg-oren">
                4</div>
              <div
                className=" bg-gray-200 rounded-3xl p-2 px-4 items-center justify-center hover:bg-oren active:bg-oren">
                <img className="h-6 w-4" src={Arrowkanan} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Product;
