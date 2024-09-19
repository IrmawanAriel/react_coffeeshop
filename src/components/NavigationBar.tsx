import { Link } from "react-router-dom";
import searchIcon from "../icons/magnifying-glass.ico"
import shopingCart from "../icons/shopping-cart.ico"
import searchIcon1 from "../icons/kacapembesaar.svg"
import shopingCart1 from "../icons/keranjangbelanja.svg"
import ThreeDots from "../assets/ThreeDots.svg"
import logokopi from "../images/logoCoffee.png"
import tulisankopi from "../images/coffeeShop.png"
import { MouseEventHandler, useEffect, useState } from 'react';
import PortalExample from "./logoutAccount";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

function NavigationBar() {

    const token = useSelector((state: RootState) => state.auth.token);

    useEffect(() => {
        const belumlogin = document.getElementById('unLoged');
        const displayLoged = document.getElementById('loged');
        const classUnloged = document.getElementById('unLoged3');
        const classUnloged2 = document.getElementById('unLoged4');
        const classloged = document.getElementById('logged1');
        const logged_button = document.getElementById('logged_button');


        if (token) { // jika udah login
            belumlogin?.classList.add('hidden');
            displayLoged?.classList.remove('hidden');
            classUnloged?.classList.remove('hidden');
            classUnloged2?.classList.remove('hidden');
            classloged?.classList.remove('hidden');
            logged_button?.classList.remove('hidden');


        } else { // jika belum login
            classloged?.classList.add('hidden');
            classUnloged?.classList.add('hidden');
            belumlogin?.classList.remove('hidden');
            displayLoged?.classList.add('hidden');
            classUnloged2?.classList.add('hidden');
            logged_button?.classList.add('hidden');

        }

        const belumlogin2 = document.getElementById('unLoged2');
        const displayLoged2 = document.getElementById('loged2');
        if (token) { // jika udah login
            belumlogin2?.classList.add('hidden');
            displayLoged2?.classList.remove('hidden');
        } else { // jika belum login
            belumlogin2?.classList.remove('hidden');
            displayLoged2?.classList.add('hidden');
        }
    }, [token]);

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropDown: MouseEventHandler<HTMLButtonElement> = () => {
        const dropdownMenu = document.querySelector('.absolute[aria-labelledby="menu-button"]');
        const dropdownMenu1 = document.querySelector('.absolute[aria-labelledby="menu-button1"]');
        setIsDropdownOpen((prevState) => !prevState)
        isDropdownOpen ? dropdownMenu1?.classList.remove('hidden') : dropdownMenu1?.classList.add('hidden');
        isDropdownOpen ? dropdownMenu?.classList.remove('hidden') : dropdownMenu?.classList.add('hidden');
    }

    return (
        <header className="modalLogut" id="modal-root">
            <nav className="flex flex-row justify-between items-center py-4 px-16 bg-black sticky inset-x-0 top-0 hidden md:flex">
                <div className="flex flex-row gap-4 items-center">
                    <div className="flex flex-row gap-4">
                        <img className="itemLogo h-10" src={logokopi} alt="logoCoffee" />
                        <img className="itemTulisanCoffee h-10" src={tulisankopi} alt="" />
                    </div>
                    <div className="flex flex-row text-white gap-4">
                        <Link className=" md:text-white md:after:block md:after:border-b-2 md:after:border-solid md:after:border-primary md:after:scale-x-0 md:after:duration-200 md:after:ease-linear md:hover:after:scale-x-100 md:active:text-darkwhite" to="/home">Home</Link>
                        <Link className="md:text-white md:after:block md:after:border-b-2 md:after:border-solid md:after:border-primary md:after:scale-x-0 md:after:duration-200 md:after:ease-linear md:hover:after:scale-x-100 md:active:text-darkwhite" to="/product">Product</Link>
                    </div>
                </div>
                <div className="flex flex-row gap-8 items-center justify-center text-white">
                    <div className=" flex-row gap-8 hidden md:flex">
                        <Link to="#" className="md:text-white md:after:block md:after:border-b-2 md:after:border-solid md:after:border-primary md:after:scale-x-0 md:after:duration-200 md:after:ease-linear md:hover:after:scale-x-100 md:active:text-darkwhite">
                            <img className="w-6" src={searchIcon1} alt="" />
                        </Link>
                        <Link to="#" className="md:text-white md:after:block md:after:border-b-2 md:after:border-solid md:after:border-primary md:after:scale-x-0 md:after:duration-200 md:after:ease-linear md:hover:after:scale-x-100 md:active:text-darkwhite">
                            <img className="w-6" src={shopingCart1} alt="" />
                        </Link>
                    </div>
                    <div className="hidden " id="logged1">
                        <Link to="/profile" className=" md:text-white md:after:block md:after:border-b-2 md:after:border-solid md:after:border-primary md:after:scale-x-0 md:after:duration-200 md:after:ease-linear md:hover:after:scale-x-100 md:active:text-darkwhite" id="menu-item-1">
                            Profile
                        </Link>
                    </div>
                    <div id="unLoged" className="flex flex-row gap-8">
                        <button>
                            <Link to="/login"  className="border-2 border-white py-2 px-4 rounded ">
                                Sign In
                            </Link>
                        </button>
                        <button>
                            <Link to="/register"  className="border-2 border-oren py-2 px-4 bg-oren rounded ">
                                Sign Up
                            </Link>
                        </button>
                    </div>
                    
                    <div id="logged_button" className="hidden">
                        <div >
                            <button
                                onClick={dropDown}
                                type="button"
                                className="dropdown-menu bg-black inline-flex w-full justify-center gap-x-1.5 rounded-md px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 "
                                id="menu-button" aria-expanded="true" aria-haspopup="true">
                                <img src={ThreeDots} alt="" />
                            </button>
                        </div>
                        <div className="bg-white absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md hidden shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none text-black"
                            role="menu" aria-orientation="vertical" aria-labelledby="menu-button1">
                            <div className="py-1" role="none">
                                <Link to="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-300 md:hidden"
                                    id="menu-item-0">Profile</Link>
                                <Link to="/home" className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-300 md:hidden"
                                    id="menu-item-0">Home</Link>
                                <Link to="/product" className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-300 md:hidden"
                                    id="menu-item-1">Product</Link>
                                <div id="unLoged3">
                                    <Link to="/historyorder" className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-300"
                                        id="menu-item-1">Orders History</Link>
                                </div>
                            </div>
                            <div className="py-1 " role="none">
                                <Link to="#" className="md:hidden block px-4 py-2 text-sm text-gray-700 flex flex-row gap-2 items-center hover:bg-orange-300" id="menu-item-2">
                                    <img className="h-4 w-4" src={searchIcon} alt="" />
                                    <p>Search</p>
                                </Link>
                                <Link to="#" className="md:hidden block px-4 py-2 text-sm text-gray-700 flex flex-row gap-2 items-center hover:bg-orange-300"
                                    id="menu-item-3">
                                    <img className="h-4 w-4" src={shopingCart} alt="" />
                                    <p>Shooping Cart</p>
                                </Link>
                                <div className="" id="loged">
                                    <PortalExample />
                                </div>
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
                                onClick={dropDown}
                                type="button"
                                className="dropdown-menu bg-black inline-flex w-full justify-center gap-x-1.5 rounded-md px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 "
                                id="menu-button" aria-expanded="true" aria-haspopup="true">
                                <img src={ThreeDots} alt="" />
                            </button>
                        </div>
                        <div className="bg-white absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md hidden shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none text-black"
                            role="menu" aria-orientation="vertical" aria-labelledby="menu-button">
                            <div className="py-1" role="none">
                                <Link to="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-300"
                                    id="menu-item-0">Profile</Link>
                                <Link to="/home" className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-300"
                                    id="menu-item-0">Home</Link>
                                <Link to="/product" className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-300"
                                    id="menu-item-1">Product</Link>
                                <div id="unLoged4">
                                    
                                    <Link to="/historyorder" className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-300"
                                        id="menu-item-1">Orders History</Link>
                                </div>
                            </div>
                            <div className="py-1 " role="none" >
                                <Link to="#" className="block px-4 py-2 text-sm text-gray-700 flex flex-row gap-2 items-center hover:bg-orange-300" id="menu-item-2">
                                    <img className="h-4 w-4" src={searchIcon} alt="" />
                                    <p>Search</p>
                                </Link>
                                <Link to="#" className="block px-4 py-2 text-sm text-gray-700 flex flex-row gap-2 items-center hover:bg-orange-300"
                                    id="menu-item-3">
                                    <img className="h-4 w-4" src={shopingCart} alt="" />
                                    <p>Shooping Cart</p>
                                </Link>
                            </div>
                            <div className="py-1" role="none" id="unLoged2">
                                <Link to="/login" className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-300"
                                    id="menu-item-4"><button>Sign In</button></Link>
                                <Link to="/register" className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-300"
                                    id="menu-item-5"><button>Sign Up</button></Link>
                            </div>
                            <div className="" id="loged2">
                                    <PortalExample />
                                </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>

    )
}

export default NavigationBar;
