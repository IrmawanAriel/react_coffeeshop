import { Link } from 'react-router-dom'
import insta from '../icons/INstaBlack.png'
import tweeter from '../icons/TweeterBlack.png'
import facebook from  '../icons/FbBlack.png'
import logokopi from "../images/logoCoffee.png"
import tulisankopi from "../images/coffeeShop.png"

 function Footer() {
  return (
        <footer className="tulisan bg-[#F8F8F8] w-full p-8 inset-x-0 bottom-0">
            <section className="flex flex-wrap gap-4 p-8 md:flex-row md:px-32 md:gap-x-12">
                <div className="flex flex-col gap-4">
                    <div className="flex flex-row gap-4">
                        <img className="itemLogo h-6" src={logokopi} alt="logoCoffee" />
                        <img className="itemTulisanCoffee h-6" src={tulisankopi} alt="" />
                    </div>
                    <div>
                        <p>Coffee Shop is a store that sells some good meals, and especially coffee. We provide high quality beans</p>
                    </div>
                    <div className="text-gray-400">
                        ©2020 CoffeeStore
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <h3 className="text-xl font-medium">Product</h3>
                    <Link to="products">Our Product</Link>
                    <Link to="pricing">Pricing</Link>
                    <Link to="location">Location</Link>
                    <Link to="country">Country</Link>
                    <Link to="blog">Blog</Link>
                </div>
                <div className="flex flex-col gap-4">
                    <h3 className="text-xl font-medium">Engage</h3>
                    <Link to="products">Our Product</Link>
                    <Link to="pricing">Pricing</Link>
                    <Link to="location">Location</Link>
                    <Link to="country">Country</Link>
                    <Link to="blog">Blog</Link>
                </div>
                <div className="flex flex-col gap-4">
                    <h3 className="text-xl font-medium">Social Media</h3>
                    <div className="flex flex-wrap md:flex-row gap-4 justify-between items-center">
                        <Link to="">
                            <img className="h-6" src={facebook} alt="" />
                        </Link>
                        <Link to="">
                            <img className="h-6" src={tweeter} alt="" />
                        </Link>
                        <Link to="">
                            <img className="h-6" src={insta} alt="" />
                        </Link>
                    </div>
                </div>
            </section>
        </footer>
  )
}

export default Footer