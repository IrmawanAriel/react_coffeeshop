import axios from 'axios';
import { useEffect, useState } from 'react'
import Image46 from '../images/image 46.png';


export default function PromoCards() {

  interface promoBody {
    id: number;
    exp_date : Date;
    discount : number;
    voucher : string;
    activate : boolean;
  }[];

  

  const [promos, setPromos] = useState<promoBody[]>([])
    
  useEffect(() => {
    const getDataProduct = async () => {
        const url = 'http://localhost:8000/promo/';
        try {
            const result = await axios.get(url);
            setPromos(result.data.data)
        } catch (error) {
            console.log(error)
        }
    }
    getDataProduct();
},
    []);

  return (

    <section className="carousel pb-4 kiwiw">
      <div className="carousel-contents w-full flex flex-row flex-nowrap overflow-x-auto space-x-4 p-8 text-wrap	">
        {promos.map((item) => (
          <div key={item.id} className="promo-card flex-shrink-0 flex flex-row items-center bg-[#88B788] rounded-3xl w-80 p-4">
            <div className="promo-image">
              <img src={Image46} alt={`Promo Image ${item.id}`} className="promo-img" />
            </div>
            <div className="promo-content text-center mt-4">
              <h1 className="text-xl text-wrap	 font-bold">{item.voucher}</h1>
              <h2 className="text-lg text-wrap">Get {item.discount * 100}% off !!</h2>
              <a href="#" className="text-white bg-oren px-4 py-2 mt-2 rounded-lg inline-block">
                Klaim Kupon
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>

  )
}
