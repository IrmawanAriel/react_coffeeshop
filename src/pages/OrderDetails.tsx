import productImage from '../images/p2.png';
import fullnameIcon from '../icons/Fullname2.png';
import locationIcon from '../icons/Location.png';
import phoneIcon from '../icons/telephone.png';
import paymentIcon from '../icons/postcard.png';
import shippingIcon from '../icons/truck.png';
import statusIcon from '../icons/status.png';

const OrderDetails = () => {
  return (
    <main className="p-8">

      <div className="flex flex-col gap-2 px-4">
        <div className="gap-2 text-wrap text-3xl flex flex-row">
          <p className="font-semibold">Order</p>
          <p className="font-bold">#12354-09893</p>
        </div>
        <p className="text-xl text-gray-400">21 March 2023 at 10:30 AM</p>
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
                <div className="font-semibold text-xl text-wrap">Galuh wizard</div>
              </div>

              <div className="flex-row flex justify-between border-b-2 p-2 gap-4">
                <div className="flex flex-row gap-2 items-center">
                  <img className="h-6 w-auto" src={locationIcon} alt="Location Icon" />
                  <div className="font-normal text-xl">Address</div>
                </div>
                <div className="font-semibold text-xl text-wrap">Griya bandung indah</div>
              </div>

              <div className="flex-row flex justify-between border-b-2 p-2">
                <div className="flex flex-row gap-2 items-center">
                  <img className="h-6 w-auto" src={phoneIcon} alt="Phone Icon" />
                  <div className="font-normal text-xl">Phone</div>
                </div>
                <div className="font-semibold text-xl">08771231235</div>
              </div>

              <div className="flex-row flex justify-between border-b-2 p-2">
                <div className="flex flex-row gap-2 items-center">
                  <img className="h-6 w-auto" src={paymentIcon} alt="Payment Method Icon" />
                  <div className="font-normal text-xl">Payment Method</div>
                </div>
                <div className="font-semibold text-xl">Cash</div>
              </div>

              <div className="flex-row flex justify-between border-b-2 p-2">
                <div className="flex flex-row gap-2 items-center">
                  <img className="h-6 w-auto" src={shippingIcon} alt="Shipping Icon" />
                  <div className="font-normal text-xl">Shipping</div>
                </div>
                <div className="font-semibold text-xl mb-2">Dine In</div>
              </div>

              <div className="flex-row flex justify-between border-b-2 p-2">
                <div className="flex flex-row gap-2 items-center">
                  <img className="h-6 w-auto" src={statusIcon} alt="Status Icon" />
                  <div className="font-normal text-xl">Status</div>
                </div>
                <div className="font-semibold text-xl mb-2 border-2 border-lime-500 rounded-3xl bg-lime-300 px-4 py-2">Done</div>
              </div>

              <div className="flex-row flex justify-between py-4">
                <div className="font-normal text-xl">Total Transaksi</div>
                <div className="font-semibold text-xl mb-2 text-oren">IDR 40.000</div>
              </div>

            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 basis-2/4 max-w-full max-h-fit md:w-full w-fit">
          <p className="text-2xl font-medium">Your Order</p>
          <div className="flex flex-row md:flex-col gap-4">

            <div className="flex flex-col md:flex-row p-4 md:gap-4 items-center bg-gray-100">
              <div className="foto basis-1/3 p-4  md:block">
                <img className="w-auto h-[150px]" src={productImage} alt="Sunset in the mountains" />
              </div>

              <div className="2/3 flex flex-row">
                <div className="flex flex-col gap-4">
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
              </div>
            </div>

            <div className="flex flex-col md:flex-row p-4 md:gap-4 items-center bg-gray-100">
              <div className="foto basis-1/3 p-4 md:block">
                <img className="w-auto h-[150px]" src={productImage} alt="Sunset in the mountains" />
              </div>

              <div className="2/3">
                <div className="flex flex-col gap-4">
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
              </div>
            </div>

          </div>

        </div>
      </div>
    </main>
  );
};

export default OrderDetails;
