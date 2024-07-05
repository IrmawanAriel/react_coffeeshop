import xButtonIcon from '../icons/Xbutton.png';
import bankersIcon from '../icons/Bankers.png';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { useEffect, useState } from 'react';
import nullSign from '../assets/nullSign.png';

import { deleteProductShopingCart} from '../redux/slices/ProductCart';
import { AppDispatch } from '../redux/store'; 
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ChooseYourProduct from '../components/chooseYourProduct';

interface pesananModel {
  user_id: number;
  status: number;
  ice: boolean;
  takeaway: boolean;
}

export default function CheckoutProduct() {

  const navigate = useNavigate()
  const dispatch = useDispatch<AppDispatch>() 

  const {ProductShopingCart} = useSelector((state: RootState) => state.Product);
  //tempt product di buat maping dulu
  //token buat auth get product
  //id buat get url

  //fulname, email bisa di panggil lewat akun.
  //address, delivery input ke order
  //tambah kolom, quantity, ice pada product_orders
  
  const [paymentInfo, setPayment] = useState<pesananModel>();

  useEffect (()=>{
    const url = 'http://localhost:8000/pesanan/'

    const getApiOrder = async () => {
      try{
      //   const resultAPIorder = await axios.post(`${url}`, { // abis ini buat api post ke product order
      //     user_id: id,
      //     status: number,
      //     quantity: number,
      //     ice: boolean,
      //     takeaway: true,
      // });
        console.log(ProductShopingCart);
      } catch (error) {

      }
    }
    getApiOrder();

  },[])

  return (
    <section className="container-fluid flex flex-col gap-4 py-4 px-4 md:gap-8 md:py-8 md:px-16">
      
      <section className="items-beetwen p-4">
        <p className="text-header text-wrap text-5xl font-semibold">Payment Details</p>
      </section>
      
      <section className="flex flex-col lg:flex-row gap-4 h-2/4">
        
        <div className="basis-3/5 max-w-full max-h-fit flex flex-col gap-4">
          
          <div className="flex flex-row justify-between">
            <p className="text-2xl font-medium">Your Order</p>
            <button onClick={()=>{navigate('/product')}} className="item h-10 px-4 py-2 rounded-lg bg-oren font-bold">
              + Add Menu
            </button>
          </div>

           {ProductShopingCart.length === 0 ? <ChooseYourProduct/> : ProductShopingCart.map((product, index) => (
            <div key={product.idProduct ?? index} className="flex flex-row gap-4 items-center bg-gray-100">
              <div className="foto basis-1/3 p-4">
                <img className="w-[178px] h-[170px] object-cover" src={product.image ? `http://localhost:8000/${product.image}` : nullSign } alt="Sunset in the mountains" />
              </div>
              <div className="flex flex-row w-full justify-between">
                <div className="flex flex-col gap-2 md:gap-4">
                  <div className="text-white text-xl bg-red-700 border-2 rounded-3xl w-fit p-2">Flash Sale!</div>
                  <div className="font-bold text-xl">{product.product_name}</div>
                  <div className="text-xl text-gray-800 font-medium">
                    {product.quantity} pcs | {product.size} | {product.ice ? 'Ice' : 'Hot'} | Dine In
                  </div>
                  <div className="price flex flex-row gap-2 ">
                    <div className="first-price line-through text-red-800 text-lg font-medium">
                      <p>IDR40.000</p>
                    </div>
                    <div className="discount-price text-2xl text-[#FF8906]">
                      <p>IDR10.000</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center px-4">
                  <button onClick={() => dispatch(deleteProductShopingCart(index))}>
                    <img className="justify-self-end h-6" src={xButtonIcon} alt="Close" />
                  </button>
                </div>
              </div>
            </div>
          ))}
          
          <section className="items-beetwen p-4">
            <p className="text-header text-wrap text-2xl font-semibold">Payment Info & Delivery</p>
          </section>

          <div>
            <form className="flex flex-col gap-4 w-full p-2 font-medium" action="">
              <div className="item-form gap-4 flex flex-col">
                <label className='text-xl font-medium' htmlFor="fullname">Full Name</label>
                <input className="fullname border-2 w-full rounded-lg h-10 p-2" type="text" id="fullname" placeholder="Enter Your Full Name" />
              </div>
              <div className="item-form gap-4 flex flex-col">
                <label className='text-xl font-medium' htmlFor="email">Email</label>
                <input className="email border-2 w-full rounded-lg h-10 p-2" type="email" id="email" placeholder="Enter Your Email" />
              </div>
              <div className="item-form gap-4 flex flex-col">
                <label className='text-xl font-medium' htmlFor="address">Address</label>
                <input className="address border-2 w-full rounded-lg h-10 p-2" type="text" id="address" placeholder="Enter Your address Again" />
              </div>
              <label className='text-xl font-medium'>Delivery</label>
              <div className="flex flex-col md:flex-row justify-between text-2xl">
                <button className="items-center py-2 px-4 md:px-8 md:text-2xl text-black border-2 hover:border-oren rounded-lg">Dine In </button>
                <button className="py-2 px-4 md:px-8 items-center md:text-2xl text-black border-2 hover:border-oren rounded-lg">Door Delivery</button>
                <button className="py-2 px-4 md:px-8 md:text-2xl items-center text-black border-2 hover:border-oren rounded-lg">Pick up</button>
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
