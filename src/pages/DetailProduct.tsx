import kopidetail from '../images/kopidetail.png';
import orenshopingcart from '../icons/orenshopingcart.png';
import p2 from '../images/p2.png';
import arrowKanan from '../icons/Arrowkanan.png'

export default function DetailProduct () {
    return (
        <main className="px-16 py-8 flex gap-16 flex-col">
            <section className="flex flex-col md:flex-row gap-1 md:gap-8 p-2">
                <div className="flex flex-col gap-4 basis-2/4 max-w-full max-h-fit">
                    <div className="basis-3/4">
                        <img className="max-w-full h-full object-cover" src={kopidetail} alt="Detail Kopi" />
                    </div>
                    <div className="basis-1/4 flex flex-row gap-4 w-1/4 items-center justify-between invisible md:visible">
                        <img className="h-fit w-auto" src={kopidetail} alt="Detail Kopi 1" />
                        <img className="h-fit w-auto" src={kopidetail} alt="Detail Kopi 2" />
                        <img className="h-fit w-auto" src={kopidetail} alt="Detail Kopi 3" />
                    </div>
                </div>
                <div className="flex flex-col gap-2 basis-2/4">
                    <div className="gap-4 flex flex-col gap-4 md:gap-8">
                        <div className="text-white font-bold text-3xl bg-red-500 border-2 rounded-3xl w-fit p-4">Flash Sale!</div>
                        <div className="md:font-bold text-2xl font-semibold md:text-5xl">Hazelnut Latte</div>
                        <div className="price flex flex-row gap-2">
                            <div className="first-price line-through text-red-800">
                                <p>20.000</p>
                            </div>
                            <div className="discount-price text-xl text-[#FF8906]">
                                <p>10.000</p>
                            </div>
                        </div>
                        <div className="flex flex-row gap-2">
                            <div className="stars text-[#FF8906]">
                                <span className="star">★</span>
                                <span className="star">★</span>
                                <span className="star">★</span>
                                <span className="star">★</span>
                                <span className="star">★</span>
                            </div>
                            <div className="rating">5/5</div>
                        </div>
                        <p className="text-gray-700 text-base text-2xl">
                            Cold brewing is a method of brewing that combines ground coffee and cool water and uses time instead of heat to extract the flavor. It is brewed in small batches and steeped for as long as 48 hours.
                        </p>
                        <div className="flex flex-row border-2 rounded-lg items-center w-fit h-fit">
                            <button className="border-2 hover:bg-oren text-lg md:text-3xl text-black p-2 md:p-4 border-oren rounded-lg">-</button>
                            <div className="text-lg p-2 md:text-3xl text-black md:p-4">3</div>
                            <button className="border-2 hover:bg-oren text-lg md:text-3xl text-black p-2 md:p-4 border-oren rounded-lg">+</button>
                        </div>
                        <div className="text-lg font-semibold md:text-3xl md:font-bold">Choose Size</div>
                        <div className="flex flex-col md:flex-row justify-between gap-2">
                            <div className="text-lg p-4 md:py-4 md:px-16 md:text-2xl text-black border-2 hover:border-oren">Regular</div>
                            <div className="text-lg p-4 md:py-4 md:px-16 md:text-2xl text-black border-2 hover:border-oren">Medium</div>
                            <div className="text-lg p-4 md:py-4 md:px-16 md:text-2xl text-black border-2 hover:border-oren">Large</div>
                        </div>
                        <div className="text-lg font-semibold md:text-3xl md:font-bold">Hot/Ice?</div>
                        <div className="flex flex-col md:flex-row justify-center md:justify-evenly gap-2">
                            <div className="p-4 md:py-4 md:px-36 text-lg md:text-2xl text-black border-2 hover:border-oren">Ice</div>
                            <div className="p-4 md:py-4 md:px-36 text-lg md:text-2xl text-black border-2 hover:border-oren">Hot</div>
                        </div>
                        <div className="flex flex-col md:flex-row gap-2 md:justify-between">
                            <button className="p-4 font-semibold bg-orange-400 rounded-xl md:py-2 md:px-28 w-full text-2xl text-black">Buy</button>
                            <button className="font-semibold p-4 rounded-xl border-2 border-orange-400 flex justify-center items-center md:py-2 md:px-28 w-full text-2xl text-black gap-2">
                                <img className="w-auto h-auto" src={orenshopingcart} alt="Shopping Cart Icon" />
                                <p>Add to chart</p>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            <section className="flex flex-col gap-4">
                <div>
                    <p className="md:text-5xl text-2xl font-semibold md:font-medium">Recommendation For You</p>
                </div>
                <div className="flex gap-4 flex-wrap items-center justify-center">
                    <div className="max-w-sm rounded overflow-hidden relative">
                        <img className="w-full" src={p2} alt="Sunset in the mountains" />
                        <div className="ml-4 mr-4 mt-56 mb-auto">
                            <div className="absolute bottom-0 mb-12 bg-white w-11/12 mx-auto p-4 shadow-lg flex flex-col gap-2">
                                <div className="font-bold text-xl mb-2">Hazelnut Latte</div>
                                <p className="text-gray-700 text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia,</p>
                                <div className="flex flex-row gap-2">
                                    <div className="stars text-[#FF8906]">
                                        <span className="star">★</span>
                                        <span className="star">★</span>
                                        <span className="star">★</span>
                                        <span className="star">★</span>
                                        <span className="star">★</span>
                                    </div>
                                    <div className="rating">5/5</div>
                                </div>
                                <div className="price flex flex-row gap-2">
                                    <div className="first-price line-through text-red-800">
                                        <p>20.000</p>
                                    </div>
                                    <div className="discount-price text-xl text-[#FF8906]">
                                        <p>10.000</p>
                                    </div>
                                </div>
                                <div className="flex flex-row gap-2 h-10">
                                    <button className="basis-4/5 bg-orange-400 rounded-xl">Buy</button>
                                    <button className="basis-1/5 rounded-xl border-2 border-orange-400 flex justify-center items-center">
                                        <img className="w-6 h-6" src={orenshopingcart} alt="Shopping Cart Icon" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="max-w-sm rounded overflow-hidden relative">
                        <img className="w-full" src={p2} alt="Sunset in the mountains" />
                        <div className="ml-4 mr-4 mt-56 mb-auto">
                            <div className="absolute bottom-0 mb-12 bg-white w-11/12 mx-auto p-4 shadow-lg flex flex-col gap-2">
                                <div className="font-bold text-xl mb-2">Hazelnut Latte</div>
                                <p className="text-gray-700 text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia,</p>
                                <div className="flex flex-row gap-2">
                                    <div className="stars text-[#FF8906]">
                                        <span className="star">★</span>
                                        <span className="star">★</span>
                                        <span className="star">★</span>
                                        <span className="star">★</span>
                                        <span className="star">★</span>
                                    </div>
                                    <div className="rating">5/5</div>
                                </div>
                                <div className="price flex flex-row gap-2">
                                    <div className="first-price line-through text-red-800">
                                        <p>20.000</p>
                                    </div>
                                    <div className="discount-price text-xl text-[#FF8906]">
                                        <p>10.000</p>
                                    </div>
                                </div>
                                <div className="flex flex-row gap-2 h-10">
                                    <button className="basis-4/5 bg-orange-400 rounded-xl">Buy</button>
                                    <button className="basis-1/5 rounded-xl border-2 border-orange-400 flex justify-center items-center">
                                        <img className="w-6 h-6" src={orenshopingcart} alt="" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="max-w-sm rounded overflow-hidden relative">
                        <img className="w-full" src={p2} alt="Sunset in the mountains" />
                        <div className="ml-4 mr-4 mt-56 mb-auto">
                            <div className="absolute bottom-0 mb-12 bg-white w-11/12 mx-auto p-4 shadow-lg flex flex-col gap-2">
                                <div className="font-bold text-xl mb-2">Hazelnut Latte</div>
                                <p className="text-gray-700 text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia,</p>
                                <div className="flex flex-row gap-2">
                                    <div className="stars text-[#FF8906]">
                                        <span className="star">★</span>
                                        <span className="star">★</span>
                                        <span className="star">★</span>
                                        <span className="star">★</span>
                                        <span className="star">★</span>
                                    </div>
                                    <div className="rating">5/5</div>
                                </div>
                                <div className="price flex flex-row gap-2">
                                    <div className="first-price line-through text-red-800">
                                        <p>20.000</p>
                                    </div>
                                    <div className="discount-price text-xl text-[#FF8906]">
                                        <p>10.000</p>
                                    </div>
                                </div>
                                <div className="flex flex-row gap-2 h-10">
                                    <button className="basis-4/5 bg-orange-400 rounded-xl">Buy</button>
                                    <button className="basis-1/5 rounded-xl border-2 border-orange-400 flex justify-center items-center">
                                        <img className="w-6 h-6" src={orenshopingcart} alt="Shopping Cart Icon" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="max-w-sm rounded overflow-hidden relative">
                        <img className="w-full" src={p2} alt="Sunset in the mountains" />
                        <div className="ml-4 mr-4 mt-56 mb-auto">
                            <div className="absolute bottom-0 mb-12 bg-white w-11/12 mx-auto p-4 shadow-lg flex flex-col gap-2">
                                <div className="font-bold text-xl mb-2">Hazelnut Latte</div>
                                <p className="text-gray-700 text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia,</p>
                                <div className="flex flex-row gap-2">
                                    <div className="stars text-[#FF8906]">
                                        <span className="star">★</span>
                                        <span className="star">★</span>
                                        <span className="star">★</span>
                                        <span className="star">★</span>
                                        <span className="star">★</span>
                                    </div>
                                    <div className="rating">5/5</div>
                                </div>
                                <div className="price flex flex-row gap-2">
                                    <div className="first-price line-through text-red-800">
                                        <p>20.000</p>
                                    </div>
                                    <div className="discount-price text-xl text-[#FF8906]">
                                        <p>10.000</p>
                                    </div>
                                </div>
                                <div className="flex flex-row gap-2 h-10">
                                    <button className="basis-4/5 bg-orange-400 rounded-xl">Buy</button>
                                    <button className="basis-1/5 rounded-xl border-2 border-orange-400 flex justify-center items-center">
                                        <img className="w-6 h-6" src={orenshopingcart} alt="Shopping Cart Icon" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="max-w-sm rounded overflow-hidden relative">
                        <img className="w-full" src={p2} alt="Sunset in the mountains" />
                        <div className="ml-4 mr-4 mt-56 mb-auto">
                            <div className="absolute bottom-0 mb-12 bg-white w-11/12 mx-auto p-4 shadow-lg flex flex-col gap-2">
                                <div className="font-bold text-xl mb-2">Hazelnut Latte</div>
                                <p className="text-gray-700 text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia,</p>
                                <div className="flex flex-row gap-2">
                                    <div className="stars text-[#FF8906]">
                                        <span className="star">★</span>
                                        <span className="star">★</span>
                                        <span className="star">★</span>
                                        <span className="star">★</span>
                                        <span className="star">★</span>
                                    </div>
                                    <div className="rating">5/5</div>
                                </div>
                                <div className="price flex flex-row gap-2">
                                    <div className="first-price line-through text-red-800">
                                        <p>20.000</p>
                                    </div>
                                    <div className="discount-price text-xl text-[#FF8906]">
                                        <p>10.000</p>
                                    </div>
                                </div>
                                <div className="flex flex-row gap-2 h-10">
                                    <button className="basis-4/5 bg-orange-400 rounded-xl">Buy</button>
                                    <button className="basis-1/5 rounded-xl border-2 border-orange-400 flex justify-center items-center">
                                        <img className="w-6 h-6" src={orenshopingcart} alt="Shopping Cart Icon" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className="flex flex-row gap-4 items-center justify-center">
                    <div className=" bg-gray-200 rounded-3xl p-2 px-4 items-center justify-center hover:bg-oren active:bg-oren">1</div>
                    <div  className=" bg-gray-200 rounded-3xl p-2 px-4 items-center justify-center hover:bg-oren active:bg-oren">2</div>
                    <div  className=" bg-gray-200 rounded-3xl p-2 px-4 items-center justify-center hover:bg-oren active:bg-oren">3</div>
                    <div  className=" bg-gray-200 rounded-3xl p-2 px-4 items-center justify-center hover:bg-oren active:bg-oren">4</div>
                    <div  className=" bg-gray-200 rounded-3xl p-2 px-4 items-center justify-center hover:bg-oren active:bg-oren">
                        <img className="h-6 w-4"  src={arrowKanan} alt="" />
                    </div>
                </div>
            </section>
        </main>
    )
}