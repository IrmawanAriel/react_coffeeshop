import React from 'react'

import logokopi from "../images/logoCoffee.png"
import tulisankopi from "../images/coffeeShop.png"
import { Link } from 'react-router-dom'
import searchIcon1 from "../icons/kacapembesaar.svg"
import shopingCart1 from "../icons/keranjangbelanja.svg"

export default function AdminNavbar() {
  return (
    <header className="modalLogut" id="modal-root">
            <nav className="flex flex-row justify-between items-center py-4 px-16 bg-white sticky inset-x-0 top-0 hidden md:flex">
                <div className="flex flex-row gap-4 items-center">
                    <div className="flex flex-row gap-4">
                        <img className="itemLogo h-10" src={logokopi} alt="logoCoffee" />
                        <img className="itemTulisanCoffee h-10" src={tulisankopi} alt="" />
                    </div>
                </div>
                <div className="flex flex-row gap-8 items-center justify-center text-black">
                    <div className=" flex-row gap-8 hidden md:flex">
                        <Link to="#" className="md:text-black md:after:block md:after:border-b-2 md:after:border-solid md:after:border-primary md:after:scale-x-0 md:after:duration-200 md:after:ease-linear md:hover:after:scale-x-100 md:active:text-darkwhite">
                            <img className="w-6" src={searchIcon1} alt="" />
                        </Link>
                        <Link to="#" className="md:text-black md:after:block md:after:border-b-2 md:after:border-solid md:after:border-primary md:after:scale-x-0 md:after:duration-200 md:after:ease-linear md:hover:after:scale-x-100 md:active:text-darkwhite">
                            <img className="w-6" src={shopingCart1} alt="" />
                        </Link>
                    </div>
                    <div className=" " id="logged1">
                        <Link to="/profile" className=" md:text-black md:after:block md:after:border-b-2 md:after:border-solid md:after:border-primary md:after:scale-x-0 md:after:duration-200 md:after:ease-linear md:hover:after:scale-x-100 md:active:text-darkwhite" id="menu-item-1">
                            Profile
                        </Link>
                    </div>
                    
                </div>
            </nav>
        </header>
  )
}
