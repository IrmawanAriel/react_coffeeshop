import { Link } from "react-router-dom";

import searchIcon from "../icons/magnifying-glass.ico"
import shopingCart from "../icons/shopping-cart.ico"
import ThreeDots from "../assets/ThreeDots.svg"
import logokopi from "../images/logoCoffee.png"
import tulisankopi from "../images/coffeeShop.png"
import { MouseEventHandler, useState } from 'react';

function NavigationBar() {

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const dropDown: MouseEventHandler<HTMLButtonElement> = (event) => {
        
            console.log("test jalan");
            const dropdownMenu = document.querySelector('.absolute[aria-labelledby="menu-button"]');
            const dropdownMenu1 = document.querySelector('.absolute[aria-labelledby="menu-button1"]');


            setIsDropdownOpen((prevState) => !prevState)

            isDropdownOpen ? dropdownMenu1?.classList.remove('hidden') : dropdownMenu1?.classList.add('hidden');
            isDropdownOpen ? dropdownMenu?.classList.remove('hidden') : dropdownMenu?.classList.add('hidden');
        
    }

    return (
        <header>
            <nav className="flex flex-row justify-between items-center py-4 px-16 bg-black sticky inset-x-0 top-0 hidden md:flex">
                <div className="flex flex-row gap-4 items-center">
                    <div className="flex flex-row gap-4">
                        <img className="itemLogo h-10" src={logokopi} alt="logoCoffee" />
                        <img className="itemTulisanCoffee h-10" src={tulisankopi} alt="" />
                    </div>
                    <div className="flex flex-row text-white gap-4">
                        <Link to="/home">Home</Link>
                        <Link to="/product">Product</Link>
                    </div>
                </div>
                <div className="flex flex-row gap-4 items-center text-white">
                    <div className="flex flex-row gap-4">
                        <Link to="#" className="searchButton">
                            <img className="w-4" src={searchIcon} alt="" />
                        </Link>
                        <Link to="#" className="shopingCartItem">
                            <img className="w-4" src={shopingCart} alt="" />
                        </Link>
                    </div>
                    <button>
                        <Link to="/login" className="border-2 border-white py-2 px-4 rounded">
                            Sign In
                        </Link>
                    </button>
                    <button>
                        <Link to="/register" className="border-2 border-oren py-2 px-4 bg-oren rounded">
                            Sign Up
                        </Link>
                    </button>
                    <div>
                        <div>
                            <button 
                            onClick= {dropDown}
                            type="button"
                                className="dropdown-menu bg-black inline-flex w-full justify-center gap-x-1.5 rounded-md px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 "
                                id="menu-button" aria-expanded="true" aria-haspopup="true">
                                <img src={ThreeDots} alt="" />
                            </button>
                        </div>
                        <div className="bg-white absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md hidden shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none text-black"
                            role="menu" aria-orientation="vertical" aria-labelledby="menu-button1">
                            <div className="py-1" role="none">
                                <Link to="/home" className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-300" 
                                    id="menu-item-0">Home</Link>
                                <Link to="/product" className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-300" 
                                    id="menu-item-1">Product</Link>
                                <Link to="/orderdetails" className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-300" 
                                    id="menu-item-1">Order Details</Link>
                                <Link to="/detailsproduct" className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-300" 
                                    id="menu-item-1">Details Product</Link>
                                <Link to="/historyorder" className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-300" 
                                    id="menu-item-1">Orders History</Link>
                                <Link to="/checkoutproduct" className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-300" 
                                    id="menu-item-1">Checkout Product</Link>
                            </div>
                            <div className="py-1 " role="none">
                                <Link to="#" className="block px-4 py-2 text-sm text-gray-700 flex flex-row gap-2 items-center hover:bg-orange-300"  id="menu-item-2">
                                    <img className="h-4 w-4" src={searchIcon} alt="" />
                                    <p>Search</p>
                                </Link>
                                <Link to="#" className="block px-4 py-2 text-sm text-gray-700 flex flex-row gap-2 items-center hover:bg-orange-300" 
                                    id="menu-item-3">
                                    <img className="h-4 w-4" src={shopingCart} alt="" />
                                    <p>Shooping Cart</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            <nav className=" py-2 px-4 bg-black items-center sticky top-0  md:hidden">
                <div className="relative inline-block flex flex-row justify-between items-center py-2 px-4 bg-black sticky top-0  md:hidden">
                    <div className="flex flex-row gap-4">
                        <img className="itemLogo h-6 md:h-8" src={logokopi} alt="logoCoffee" />
                        <img className="itemTulisanCoffee h-6 md:h-8" src={tulisankopi} alt="" />
                    </div>
                    <div>
                        <div>
                            <button 
                            onClick= {dropDown}
                            type="button"
                                className="dropdown-menu bg-black inline-flex w-full justify-center gap-x-1.5 rounded-md px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 "
                                id="menu-button" aria-expanded="true" aria-haspopup="true">
                                <img src={ThreeDots} alt="" />
                            </button>
                        </div>
                        <div className="bg-white absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md hidden shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none text-black"
                            role="menu" aria-orientation="vertical" aria-labelledby="menu-button">
                            <div className="py-1" role="none">
                                <Link to="/home" className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-300" 
                                    id="menu-item-0">Home</Link>
                                <Link to="/product" className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-300" 
                                    id="menu-item-1">Product</Link>
                                <Link to="/orderdetails" className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-300" 
                                    id="menu-item-1">Order Details</Link>
                                <Link to="/detailsproduct" className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-300" 
                                    id="menu-item-1">Details Product</Link>
                                <Link to="/historyorder" className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-300" 
                                    id="menu-item-1">Orders History</Link>
                                <Link to="/checkoutproduct" className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-300" 
                                    id="menu-item-1">Checkout Product</Link>
                            </div>
                            <div className="py-1 " role="none">
                                <Link to="#" className="block px-4 py-2 text-sm text-gray-700 flex flex-row gap-2 items-center hover:bg-orange-300"  id="menu-item-2">
                                    <img className="h-4 w-4" src={searchIcon} alt="" />
                                    <p>Search</p>
                                </Link>
                                <Link to="#" className="block px-4 py-2 text-sm text-gray-700 flex flex-row gap-2 items-center hover:bg-orange-300" 
                                    id="menu-item-3">
                                    <img className="h-4 w-4" src={shopingCart} alt="" />
                                    <p>Shooping Cart</p>
                                </Link>
                            </div>
                            <div className="py-1" role="none">
                                <Link to="/login" className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-300" 
                                    id="menu-item-4"><button>Sign In</button></Link>
                                <Link to="/register" className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-300" 
                                    id="menu-item-5"><button>Sign Up</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
        
    )
}

export default NavigationBar;
