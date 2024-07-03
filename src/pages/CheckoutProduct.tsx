import productImage from '../images/p2.png';
import xButtonIcon from '../icons/Xbutton.png';
import bankersIcon from '../icons/Bankers.png';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { useEffect } from 'react';
import axios from 'axios';

interface pesananModel {
  id?: number;
  user_id: number;
  status: number;
  quantity: number;
  ice: boolean;
  takeaway: boolean;
  total: number;
  orderdate: Date;
}

export default function CheckoutProduct() {

  const {token, id, TempProduct} = useSelector((state: RootState) => state.auth);

  useEffect (()=>{
    const url = 'http://localhost:8000/pesanan/'

    const getApiOrder = async () => {
      try{
        const resultAPIorder = await axios.post(`${url}`, {
          user_id: id,
          status: number,
          quantity: number,
          ice: boolean,
          takeaway: true,
      });
        console.log(resultAPIorder);
      } catch (error) {

      }
    }
    getApiOrder();

  },[])

  return (
    <section className="container-fluid flex flex-col gap-4 py-4 px-4 md:gap-8 md:py-8 md:px-16">
      
      <section className="items-beetwen p-4">
        <p className="text-header text-wrap text-3xl font-bold">Payment Details</p>
      </section>
      
      <section className="flex flex-col lg:flex-row gap-4 h-2/4">
        
        <div className="basis-3/5 max-w-full max-h-fit flex flex-col gap-4">
          
          <div className="flex flex-row justify-between">
            <p className="text-2xl font-medium">Your Order</p>
            <button className="item h-10 px-4 py-2 rounded-lg bg-oren font-bold">
              + Add Menu
            </button>
          </div>

          <div className="flex flex-row gap-4 items-center bg-gray-100">
            <div className="foto basis-1/3 p-4">
              <img className="w-auto h-fit" src={productImage} alt="Sunset in the mountains" />
            </div>
            <div className="flex flex-row w-full justify-between">
              <div className="flex flex-col gap-2 md:gap-4">
                <div className="text-white text-xl bg-red-700 border-2 rounded-3xl w-fit p-2">Flash Sale!</div>
                <div className="font-bold text-xl">Hazelnut Latte</div>
                <div className="text-xl text-gray-400">2 pcs | Regular | Ice | Dine In</div>
                <div className="price flex flex-row gap-2">
                  <div className="first-price line-through text-red-800">
                    <p>40.000</p>
                  </div>
                  <div className="discount-price text-2xl text-[#FF8906]">
                    <p>IDR 10.000</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center px-4">
                <button>
                  <img className="justify-self-end h-6" src={xButtonIcon} alt="" />
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-row gap-2 items-center bg-gray-100">
            <div className="foto basis-1/3 p-4">
              <img className="w-auto h-fit" src={productImage} alt="Sunset in the mountains" />
            </div>
            <div className="flex flex-row w-full justify-between">
              <div className="flex flex-col gap-2 md:gap-4">
                <div className="text-white text-xl bg-red-700 border-2 rounded-3xl w-fit p-2">Flash Sale!</div>
                <div className="font-bold text-xl">Hazelnut Latte</div>
                <div className="text-xl text-gray-400">2 pcs | Regular | Ice | Dine In</div>
                <div className="price flex flex-row gap-2">
                  <div className="first-price line-through text-red-800">
                    <p>40.000</p>
                  </div>
                  <div className="discount-price text-2xl text-[#FF8906]">
                    <p>IDR 10.000</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center px-4">
                <button>
                  <img className="justify-self-end h-6" src={xButtonIcon} alt="" />
                </button>
              </div>
            </div>
          </div>

          <section className="items-beetwen p-4">
            <p className="text-header text-wrap text-2xl font-medium">Payment Details</p>
          </section>

          <div>
            <form className="flex flex-col gap-2 w-full p-2 font-medium" action="">
              <div className="item-form gap-2">
                <label htmlFor="fullname">Full Name</label><br /><br />
                <input className="fullname border-2 w-full rounded-lg h-10" type="text" id="fullname" placeholder="Enter Your Full Name" />
              </div>
              <div className="item-form gap-4">
                <label htmlFor="email">Email</label><br /><br />
                <input className="email border-2 w-full rounded-lg h-10" type="email" id="email" placeholder="Enter Your Email" />
              </div>
              <div className="item-form gap-4">
                <label htmlFor="address">Address</label><br /><br />
                <input className="address border-2 w-full rounded-lg h-10" type="text" id="address" placeholder="Enter Your address Again" />
              </div>
              <label>Delivery</label>
              <div className="flex flex-col md:flex-row justify-between text-2xl">
                <button className="items-center py-2 px-4 md:px-16 md:text-2xl text-black border-2 hover:border-oren rounded-lg">Dine In </button>
                <button className="py-2 px-4 md:px-16 items-center md:text-2xl text-black border-2 hover:border-oren rounded-lg">Door Delivery</button>
                <button className="py-2 px-4 md:px-16 md:text-2xl items-center text-black border-2 hover:border-oren rounded-lg">Pick up</button>
              </div>
            </form>
          </div>

        </div>

        <div className="basis-2/5 max-w-full max-h-fit flex flex-col gap-2 p-4">
          <p className="text-2xl font-medium">Total</p>

                <div className=" w-full  bg-gray-100">
                    <div className="flex-col flex gap-4 p-4">
                        <div className="flex-row flex  justify-between">
                            <div className="font-normal	 text-xl mb-2">Order</div>
                            <div className="font-semibold text-xl mb-2">IDR 40.000</div>
                        </div>

                        <div className="flex-row flex  justify-between">
                            <div className="font-normal	 text-xl mb-2">Delivery</div>
                            <div className="font-semibold text-xl mb-2">IDR 40.000</div>
                        </div>
                        <div className="flex-row flex  justify-between">
                            <div className="font-normal	 text-xl mb-2">Tax</div>
                            <div className="font-semibold text-xl mb-2">IDR 40.000</div>
                        </div>

                        <hr/>

                        <div className="flex-row flex  justify-between">
                            <div className="font-normal	 text-xl mb-2">Sub Total</div>
                            <div className="font-semibold text-xl mb-2">IDR 40.000</div>
                        </div>

                        <button className="item h-10 px-4 py-2 rounded-lg bg-oren font-bold w-full">
                           Checkout
                        </button> 

                        <div className=" text-xl text-gray-400">
                            We accept 
                        </div>

                        <a className="items-center">
                            <img className="h-fit w-auto" src={bankersIcon} alt="banker"/>
                        </a>

                        <div className=" text-xl text-gray-400">*Get Discount if you pay with Bank Central Asia</div>

                    </div>
                </div>
            </div>

        </section>


    </section>
  )
}
