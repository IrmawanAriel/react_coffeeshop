import { useParams, useNavigate } from 'react-router-dom';
import orenshopingcart from '../icons/orenshopingcart.png';
import kopidetail from '../images/kopidetail.png';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { setProductShopingCart } from '../redux/slices/ProductCart';
import { AppDispatch } from '../redux/store'; 
import { useDispatch } from 'react-redux';

interface ProductInformation {
  uuid: string;
  id?: number;
  description: string;
  price: number;
  product_name?: string;
  rating: number;
  stock: number;
  category: string;
  image?: string;
}

interface DetailProduct {
  idProduct?: number| null;
  quantity: number | null;
  size: string | null;
  ice: boolean | null;
  image?: string;
  product_name? : string;
  price: number;
}

export default function  ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const [ProductInfo, setInfo] = useState<ProductInformation>();
  const [quantity, setQuantity] = useState<number>(1); // Initialize quantity state

  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>()

  const [ProductForm, setForm] = useState<DetailProduct>({
    idProduct: null, //idProduct tak terupdate harusnya ppakai
    quantity: 1, // Set initial quantity to 1
    size: null,
    ice: false,
    image: undefined,
    price: 0,
  });

  useEffect(() => {
    const getReponseData = async () => {
      const ProductDetailUrl = `${import.meta.env.VITE_REACT_APP_API_URL}/product/${id}`;

      try {
        const detailResult = await axios.get(ProductDetailUrl);
        setInfo(detailResult.data.data[0]);
        console.log(detailResult.data.data[0])
        setForm((prevForm) => ({
          ...prevForm,
          idProduct: detailResult.data.data[0].id,
          image: detailResult.data.data[0].image,
          product_name: detailResult.data.data[0].product_name,
          price: detailResult.data.data[0].price,
        }));
      } catch (error) {
        console.log(error);
      }
    };

    getReponseData();
  }, [id]);

  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
    setForm((prevForm) => ({ ...prevForm, quantity: quantity + 1 }));
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
      setForm((prevForm) => ({ ...prevForm, quantity: quantity - 1 }));
    }
  };

  const handleSizeChange = (size: string) => {
    setForm((prevForm) => ({ ...prevForm, size }));
  };

  const handleIceChange = (ice: boolean) => {
    setForm((prevForm) => ({ ...prevForm, ice }));
  };

  function buyProduct() {
    dispatch(setProductShopingCart(ProductForm));
    navigate('/checkoutproduct');
  }

  function saveProduct() {
    dispatch(setProductShopingCart(ProductForm));
  }

  return (
    <section className="flex flex-col md:flex-row gap-1 md:gap-4 p-2 justify-center">
      <div className="grid lg:grid-rows-2 gap-4 basis-2/4 max-w-full h-fit justify-center">
        <div className="basis-3/4">
          <img
            className="w-[580px] h-auto object-cover"
            src={ProductInfo?.image ? ProductInfo.image: kopidetail}
            alt={ProductInfo?.product_name || 'Detail Kopi'}
          />
        </div>
        <div className="flex flex-row gap-4 items-center hidden max-w-[580px]  lg:flex h-fit ">
          <img
            className="h-auto w-[180px]"
            src={ProductInfo?.image ? ProductInfo.image : kopidetail}
            alt="Detail Kopi 1"
          />
          <img
            className="h-auto w-[180px]"
            src={ProductInfo?.image ? ProductInfo.image : kopidetail}
            alt="Detail Kopi 2"
          />
          <img
            className="h-auto w-[180px] object-cover"
            src={ProductInfo?.image ? ProductInfo.image : kopidetail}
            alt="Detail Kopi 3"
          />
        </div>
      </div>
      <div className="flex flex-col gap-2 basis-2/4 p-8">
        <div className="gap-2 flex flex-col gap-2 md:gap-8">
          <div className="text-white font-bold text-3xl bg-red-500 border-2 rounded-3xl w-fit p-4">
            Flash Sale!
          </div>
          <div className="md:font-bold text-2xl font-semibold md:text-5xl">
            {ProductInfo?.product_name}
          </div>
          <div className="price flex flex-row gap-2">
            <div className="first-price line-through text-red-800">
              <p>IDR {ProductInfo?.price}</p>
            </div>
            <div className="discount-price text-2xl text-[#FF8906] font-semibold">
              <p>IDR {ProductInfo?.price}</p>
            </div>
          </div>
          <div className="flex flex-row gap-4 text-lg font-medium items-center">
            <div className="stars text-[#FF8906] text-lg font-medium gap-4">
              {Array.from({ length: ProductInfo?.rating || 0 }, (_, index) => (
                <span key={index} className="star">
                  ★
                </span>
              ))}
            </div>
            <div className="rating">{ProductInfo?.rating}</div>
          </div>
          <p className="text-gray-700 text-base text-2xl">
            {ProductInfo?.description}
          </p>
          <div className="flex flex-row border-2 rounded-lg items-center w-fit h-fit">
            <button
              className="border-2 hover:bg-oren text-lg md:text-3xl text-black p-2 md:p-4 border-oren rounded-lg"
              onClick={handleDecrement}
            >
              -
            </button>
            <div className="text-lg p-2 md:text-3xl text-black md:p-4">
              {quantity}
            </div>
            <button
              className="border-2 hover:bg-oren text-lg md:text-3xl text-black p-2 md:p-4 border-oren rounded-lg"
              onClick={handleIncrement}
            >
              +
            </button>
          </div>
          <div className="text-lg font-semibold md:text-3xl md:font-bold">Choose Size</div>
          <div className="flex flex-col md:flex-row justify-between gap-2">
            <label className="cursor-pointer">
              <input
                type="radio"
                name="size"
                value="Regular"
                className="hidden"
                onChange={() => handleSizeChange('Regular')}
              />
              <div className={`text-lg p-4 md:py-4 md:px-16 md:text-2xl text-black border-2 hover:border-oren peer-checked:bg-oren ${ProductForm.size === 'Regular'? 'bg-oren': ''}`}>
                Regular
              </div>
            </label>
            <label className="cursor-pointer">
              <input
                type="radio"
                name="size"
                value="Medium"
                className="hidden"
                onChange={() => handleSizeChange('Medium')}
              />
              <div className={`text-lg p-4 md:py-4 md:px-16 md:text-2xl text-black border-2 hover:border-oren peer-checked:bg-oren ${ProductForm.size === 'Medium'? 'bg-oren': ''}`}>
                Medium
              </div>
            </label>
            <label className="cursor-pointer">
              <input
                type="radio"
                name="size"
                value="Large"
                className="hidden"
                onChange={() => handleSizeChange('Large')}
              />
              <div className={`text-lg p-4 md:py-4 md:px-16 md:text-2xl text-black border-2 hover:border-oren peer-checked:bg-oren ${ProductForm.size === 'Large'? 'bg-oren': ''}`}>
                Large
              </div>
            </label>
          </div>
          <div className="text-lg font-semibold md:text-3xl md:font-bold">Hot/Ice?</div>
          <div className="flex flex-col md:flex-row justify-center md:justify-evenly gap-2">
            <label className="cursor-pointer">
              <input
                type="radio"
                name="ice"
                value="true"
                className="hidden"
                onChange={() => handleIceChange(true)}
              />
              <div className={`p-4 md:py-4 md:px-36 text-lg md:text-2xl text-black border-2 hover:border-oren ${ProductForm.ice === true ? 'bg-oren': ''}`}>
                Ice
              </div>
            </label>
            <label className="cursor-pointer">
              <input
                type="radio"
                name="ice"
                value="false"
                className="hidden"
                onChange={() => handleIceChange(false)}
              />
              <div className={`p-4 md:py-4 md:px-36 text-lg md:text-2xl text-black border-2 hover:border-oren ${ProductForm.ice === false ? 'bg-oren': ''}`}>
                Hot
              </div>
            </label>
          </div>

          <div className="flex flex-col md:flex-row gap-2 md:justify-between">
            <button
              onClick={() => { buyProduct() }}
              className="p-4 font-semibold bg-orange-400 rounded-xl md:py-2 md:px-28 w-full text-2xl text-black"
            >
              Buy
            </button>
            <button onClick={() => { saveProduct() }} className="font-semibold p-2 rounded-xl border-2 border-orange-400 flex justify-center items-center md:py-2 md:px-20 w-full text-2xl text-black gap-2">
              <img
                className="w-auto h-auto"
                src={orenshopingcart}
                alt="Shopping Cart Icon"
              />
              <p>Add to cart</p>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
