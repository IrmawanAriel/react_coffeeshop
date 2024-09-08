import productImage from '../images/p2.png';
import fullnameIcon from '../icons/Fullname2.png';
import locationIcon from '../icons/Location.png';
import phoneIcon from '../icons/telephone.png';
import paymentIcon from '../icons/postcard.png';
import shippingIcon from '../icons/truck.png';
import statusIcon from '../icons/status.png';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

interface DetailProduct {
  order_id: number;
  product_id: number;
  product_name: string;
  price: number;
  description: string;
  image: string | null;
  quantity: number | null;
  size: string | null;
  ice: boolean | null;
}

interface OrderDetail {
  id: string | undefined;
  destination: string;
  orderdate: string;
  payment_method: string;
  status: string | null;
  takeaway: string;
  total_order: number;
  phone: string | null;
  fullname: string;
}

const OrderDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [productsOrdered, setProducts] = useState<DetailProduct[]>([]);
  const [orderDet, setOrderDet] = useState<OrderDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const urlOrder = `${import.meta.env.VITE_REACT_APP_API_URL}/pesanan/${id}`;
    const urlProducts = `${import.meta.env.VITE_REACT_APP_API_URL}/product/pesanan/${id}`;
    const displayAlldata = async () => {
      try {
        const orderDetailResponse = await axios.get(urlOrder);
        const productOrderedDetailResponse = await axios.get(urlProducts);

        const productsData: DetailProduct[] = productOrderedDetailResponse.data.data.rows;
        setProducts(productsData);
        setOrderDet(orderDetailResponse.data.data[0]);
      } catch (err) {
        setError('Failed to fetch order details. Please try again later.');
      } finally {
        setLoading(false);
      }
    };


    displayAlldata();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!orderDet) {
    return <div>No order details found.</div>;
  }

  return (
    <main className="p-8">
      <div className="flex flex-col gap-2 px-4">
        <div className="gap-2 text-wrap text-3xl flex flex-row">
          <p className="font-semibold">Order</p>
          <p className="font-bold">#{orderDet.id}</p>
        </div>
        <p className="text-xl text-gray-400">{orderDet.orderdate}</p>
      </div>

      <div className="flex flex-col md:flex-row gap-4 p-4">
        <div className="flex flex-col gap-4 basis-2/4 max-w-full max-h-fit">
          <p className="text-2xl font-medium text-wrap">Order Information</p>

          <div className="w-full bg-gray-100">
            <div className="flex-col flex gap-4 p-4">
              <div className="flex-row flex justify-between border-b-2 p-2">
                <div className="flex flex-row gap-2 items-center">
                  <img className="h-6 w-auto" src={fullnameIcon} alt="Fullname Icon" />
                  <div className="font-normal text-xl">Fullname</div>
                </div>
                <div className="font-semibold text-xl text-wrap">{orderDet.fullname}</div>
              </div>

              <div className="flex-row flex justify-between border-b-2 p-2 gap-4">
                <div className="flex flex-row gap-2 items-center">
                  <img className="h-6 w-auto" src={locationIcon} alt="Location Icon" />
                  <div className="font-normal text-xl ">Address</div>
                </div>
                <div className="font-semibold text-xl  text-right w-[300px]">{orderDet.destination}</div>
              </div>

              <div className="flex-row flex justify-between border-b-2 p-2">
                <div className="flex flex-row gap-2 items-center">
                  <img className="h-6 w-auto" src={phoneIcon} alt="Phone Icon" />
                  <div className="font-normal text-xl">Phone</div>
                </div>
                <div className="font-semibold text-xl">{orderDet.phone || 'N/A'}</div>
              </div>

              <div className="flex-row flex justify-between border-b-2 p-2">
                <div className="flex flex-row gap-2 items-center">
                  <img className="h-6 w-auto" src={paymentIcon} alt="Payment Method Icon" />
                  <div className="font-normal text-xl">Payment Method</div>
                </div>
                <div className="font-semibold text-xl">{orderDet.payment_method}</div>
              </div>

              <div className="flex-row flex justify-between border-b-2 p-2">
                <div className="flex flex-row gap-2 items-center">
                  <img className="h-6 w-auto" src={shippingIcon} alt="Shipping Icon" />
                  <div className="font-normal text-xl">Shipping</div>
                </div>
                <div className="font-semibold text-xl mb-2">{orderDet.takeaway}</div>
              </div>

              <div className="flex-row flex justify-between border-b-2 p-2">
                <div className="flex flex-row gap-2 items-center">
                  <img className="h-6 w-auto" src={statusIcon} alt="Status Icon" />
                  <div className="font-normal text-xl">Status</div>
                </div>
                <div className="font-semibold text-xl mb-2 border-2 border-lime-500 rounded-3xl bg-lime-300 px-4 py-2">{orderDet.status || 'Done'}</div>
              </div>

              <div className="flex-row flex justify-between py-4">
                <div className="font-normal text-xl">Total Transaksi</div>
                <div className="font-semibold text-xl mb-2 text-oren">IDR {orderDet.total_order}</div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 basis-2/4 max-w-full max-h-fit md:w-full w-fit">
          <p className="text-2xl font-medium">Your Order</p>
          <div className="flex flex-row md:flex-col gap-4">
            {productsOrdered.map((product, index) => (
              <div key={index} className="flex flex-col md:flex-row p-4 md:gap-4 items-center bg-gray-100">
                <div className="foto basis-1/3 p-4 md:block">
                  <img className="w-auto h-[150px]" src={product.image ? product.image : productImage} alt={product.product_name} />
                </div>
                <div className="2/3 flex flex-row">
                  <div className="flex flex-col gap-4">
                    <div className="text-white text-xl bg-red-700 border-2 rounded-3xl w-fit p-2">Flash Sale!</div>
                    <div className="font-bold text-xl">{product.product_name}</div>
                    <div className="text-xl text-gray-400">{product.quantity} pcs | {product.size} | {product.ice ? 'Ice' : 'Hot'} | {orderDet.takeaway}</div>
                    <div className="price flex flex-row gap-2">
                      <div className="first-price line-through text-red-800">
                        <p>40.000</p>
                      </div>
                      <div className="discount-price text-2xl text-[#FF8906]">
                        <p>IDR {product.price}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default OrderDetails;
