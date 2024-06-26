import arrowLeft from "../icons/arrow-up.svg"
import arrowRight from "../icons/arrow-up (1).svg"
import testimonies from "../images/70840a4caeb335701029d52bbb650fae.jpeg"
import HomeSvg from '../assets/HomeSvg.svg'
import kopiHome from '../images/kopiHome.png'
import baristaHome from '../images/1ff108caf42e05aafc2d71749bf4d116.jpeg'
import p2 from "../images/p2.png"
import accept from "../icons/accept.ico"
import orenShopingCart from "../icons/orenshopingcart.png"
import Cards from '../components/Cards';

export default function Home() {
    return (
        <main className="flex flex-col ">
            <section className="flex flex-col lg:flex-row w-full ">
                <div
                    className="basis-2/4 flex flex-wrap lg:flex-col text-white gap-8 justify-center bg-gradient-to-b from-[#777C82] to-[#0B0909] px-16 py-16 w-full">

                    <h1 className="  text-5xl font-semibold">Start Your Day with Coffee and Good Meals</h1>
                    <p className="text-lg">We provide high quality beans, good taste, and healthy meals made by love just for
                        you. Start your day with us for a bigger smile!</p>

                    <a className=" bg-oren rounded-xl w-fit p-4 items-center justify-center" href="">
                        Get started
                    </a>

                    <div className="hero-content flex flex-wrap lg:flex-row gap-4 ">
                        <div className="content-statistik  text-5xl font-semibold text-oren">
                            <h1>90+</h1>
                            <p>Staff</p>
                        </div>
                        <div className="border-2 border-oren h-16"> </div>
                        <div className="content-statistik  text-5xl font-semibold text-oren">
                            <h1>30+</h1>
                            <p>Stores</p>
                        </div>
                        <div className="border-2 border-oren h-16"> </div>
                        <div className="content-statistik text-5xl font-semibold text-oren">
                            <h1>800+</h1>
                            <p>Customer</p>
                        </div>
                    </div>
                </div>

                <div className="basis-2/4 w-full h-full object-cover hidden lg:block">
                    <img className="w-full object-cover" src={kopiHome} alt="" />
                </div>
            </section>

            <section className="flex flex-col lg:flex-row w-full max-h-min	">
                <div className="basis-2/4 flex flex-col text-black gap-8 justify-center px-16 py-16 h-full">

                    <div className="flex flex-row items-center gap-4">
                        <div className="border-2 border-oren h-16"> </div>
                        <h1 className=" text-5xl font-semibold">We Provide <span className="text-amber-900	">Good Coffee</span> and
                            <span className="text-amber-900	">Healthy Meals</span>
                        </h1>
                    </div>

                    <p>You can explore th that we provide with fun and have their own taste and make your day better.
                    </p>

                    <div className=" flex flex-row gap-2 items-center">
                        <img className=" h-8 items-center" src={accept} alt="Accept Icon" />
                        <p>High quality beans</p>
                    </div>
                    <div className=" flex flex-row gap-2 items-center">
                        <img className=" h-8 items-center" src={accept} alt="Accept Icon" />
                        <p>Healthy meals, you can request the ingredients</p>
                    </div>
                    <div className=" flex flex-row gap-2 items-center">
                        <img className=" h-8 items-center" src={accept} alt="Accept Icon" />
                        <p>Chat with our staff to get better experience for ordering</p>
                    </div>
                    <div className=" flex flex-row gap-2 items-center">
                        <img className=" h-8 items-center" src={accept} alt="Accept Icon" />
                        <p>Free member card with a minimum purchase of IDR 200.000.</p>
                    </div>
                </div>
                <div className="basis-2/4 w-full hidden lg:block ">
                    <img className="object-cover object-top  w-full h-[575px] "
                        src={baristaHome} alt="" />
                </div>
            </section>

            <section className="flex flex-col gap-4 items-center justify-center gap-8 p-8">
                <div className="gap-8 flex flex-col items-center justify-center">
                    <h1 className="md:text-5xl text-3xl gap-4">Here is People's <span className="text-amber-900">Favorite</span></h1>
                    <div className="border-2 border-oren w-16 h-2 bg-oren"></div>
                    <p className="text-base">Let's choose and have a bit taste of poeple's favorite. It might be yours too!</p>
                </div>

                <div className="">
                    <Cards/>
                    {/* <div className="max-w-sm rounded overflow-hidden  relative "> 
                        <img className="w-full" src={p2} alt="Sunset in the mountains" />
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
                                        <img className="w-6 h-6" src={orenShopingCart} alt="" />
                                    </button>
                                </div>



                            </div>
                        </div>
                    </div>
                    <div className="max-w-sm rounded overflow-hidden  relative ">
                        <img className="w-full" src={p2} alt="Sunset in the mountains" />
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
                                        <img className="w-6 h-6" src={orenShopingCart} alt="" />
                                    </button>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="max-w-sm rounded overflow-hidden  relative ">
                        <img className="w-full" src={p2} alt="Sunset in the mountains" />
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
                                        <img className="w-6 h-6" src={orenShopingCart} alt="" />
                                    </button>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="max-w-sm rounded overflow-hidden  relative ">
                        <img className="w-full" src={p2} alt="Sunset in the mountains" />
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
                                        <img className="w-6 h-6" src={orenShopingCart} alt="" />
                                    </button>
                                </div>

                            </div>
                        </div>
                    </div> */}

                </div>
            </section>

            <section className="flex flex-col gap-8 p-8">

                <div>
                    <div className="gap-8 flex flex-col items-center justify-center">
                        <h1 className="md:text-5xl text-3xl gap-4 text-center"> <span className="text-amber-900">Visit Our Store </span>in the Spot on the Map Below </h1>
                        <div className="border-2 border-oren w-16 h-2 bg-oren"></div>
                        <p className="text-base">You can explore the menu that we provide with fun and have their own taste and make your day better.</p>
                    </div>
                </div>

                <div className="justify-center">
                    <img src={HomeSvg} alt="" />

                </div>

            </section>

            <section className="flex flex-col lg:flex-row w-full text-white px-32 py-16 bg-gradient-to-b from-[#777C82] to-[#0B0909] gap-4">

                <div className="basis-2/4 w-full hidden lg:block ">
                    <img className="object-cover object-top  w-full h-[575px] "
                        src={testimonies} alt="" />
                </div>

                <div className="basis-2/4 flex flex-col text-black gap-8 justify-center  py-16 h-full text-white">

                    <p className="">TESTIMONIAL</p>
                    <div className="flex flex-row gap-8">
                        <div className="border-4 bg-oren w-2 border-oren"></div>
                        <h1 className="text-5xl font-semibold">Viezh Robert</h1>
                    </div>
                    <p className="text-oren">Manager Coffee Shop</p>
                    <p className="">“Wow... I am very happy to spend my whole day here. The Wi-Fi is good, and the coffee and meals though. I like it here!! Very recommended!</p>
                    <div className=" flex flex-row gap-4">
                        <div className=" text-oren font-bold">
                            <span>&#9734;</span>
                            <span>&#9734;</span>
                            <span>&#9734;</span>
                            <span>&#9734;</span>
                            <span>&#9734;</span>
                        </div>
                        <p>5.0</p>
                    </div>
                    <label className="flex flex-row gap-4">
                        <button className="p-2 bg-white rounded rounded-full items-center justify-center"><img src={arrowLeft} alt="..." /></button>
                        <button className="p-2 bg-oren rounded rounded-full items-center justify-center"><img src={arrowRight} alt="..." /></button>
                    </label>
                    <div className="slide flex flex-row gap-4">
                        <div className="lingkaran"></div>
                        <div className="lingkaran"></div>
                        <div className="lingkaran"></div>
                    </div>
                </div>

            </section>

        </main>
    )
}