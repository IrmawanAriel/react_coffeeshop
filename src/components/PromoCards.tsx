import axios from 'axios';
import { useEffect, useState } from 'react'
import Image46 from '../images/image 46.png';
import LeftCarouselArrow from '../icons/leftCarouselArrow.png';
import RightCarouselArrow from '../icons/rightCarouselArrow.png';


export default function PromoCards() {

  interface promoBody {
    id: number;
    exp_date : Date;
    discount : number;
    voucher : string;
    activate : boolean;
  };

  const [promos, setPromos] = useState<promoBody[]>([])
    
  useEffect(() => {
    const getDataProduct = async () => {
        const url = `${import.meta.env.VITE_REACT_APP_API_URL}/promo/`;
        try {
            const result = await axios.get(url);
            setPromos(result.data.data);
        } catch (error) {
            console.log(error)
        }
    }
    getDataProduct();
},
    []);

    const container = document.querySelector('.carousel-contents');
    const scrollLeftBtn = document.getElementById('btn-scroll-left');
    const scrollRightBtn = document.getElementById('btn-scroll-right');
  
    if (scrollLeftBtn && container) {
      scrollLeftBtn.addEventListener('click', () => {
        container.scrollLeft -= 100;
      });
    }
  
    if (scrollRightBtn && container) {
      scrollRightBtn.addEventListener('click', () => {
        container.scrollLeft += 100;
      });
    }

  return (

    <section className=" px-8">
        <section className="todays-promo flex flex-col md:flex-row gap-4 justify-between items-center p-8">
          <div className="todays-promo-text flex flex-row gap-4 text-5xl">
            <p className="todays-promo-text-todays">Today's</p>
            <p className="text-orange-300">Promos</p>
          </div>
          <div className="carousel-btn flex items-center space-x-4">
            <button id="btn-scroll-left" className="carousel-btn-left bg-oren rounded-full p-4">
              <img src={LeftCarouselArrow} alt="Left Arrow" />
            </button>
            <button id="btn-scroll-right" className="carousel-btn-right bg-oren rounded-full p-4">
              <img src={RightCarouselArrow} alt="Right Arrow" />
            </button>
          </div>
        </section>

        <section className="carousel pb-4 kiwiw">
          <div className="carousel-contents w-full flex flex-row flex-nowrap overflow-x-auto space-x-4 p-8 text-wrap	">
            {promos.map((item) => (
              <div key={item.id} className="promo-card flex-shrink-0 flex flex-row items-center bg-[#88B788] rounded-3xl w-[335px] h-auto p-4">
                <div className="promo-image p-2">
                  <img src={Image46} alt={`Promo Image ${item.id}`} className="promo-img w-[96px] h-[106px]" />
                </div>
                <div className="promo-content text-center mt-4">
                  <h1 className="text-lg text-wrap	 font-bold">{item.voucher}</h1>
                  <h2 className="text-lg text-wrap">Get {item.discount * 100}% off !!</h2>
                  <a href="#" className="text-white bg-oren p-2 py-2 mt-2 rounded-lg inline-block">
                    Klaim Kupon
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
    </section>


  )
}
