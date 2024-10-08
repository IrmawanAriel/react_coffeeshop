import { useEffect, useState } from "react";
import axios from "axios";
import orenShopingCart from "../icons/orenshopingcart.png";
import { useNavigate } from "react-router-dom";

interface productBody {
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

export default function Cards({ props }: { props: productBody[] | undefined }) { // penamaan props
    const [Products, setProduct] = useState<productBody[]>([]);
    const navigate = useNavigate();

    useEffect(() => {
        const getDataProduct = async () => {
            const url = `${import.meta.env.VITE_REACT_APP_API_URL}/product`;
            try {
                if (props) { 
                    setProduct(props);
                } else {
                    const result = await axios.get(url);
                    setProduct(result.data.data);
                }
            } catch (error) {
                console.log(error);
            }
        };
        getDataProduct();
    }, [props]);

    const handleBuyProduct = (id?: number) => {
        if (id) {
            navigate(`/detailsproduct/${id}`);
        }
    };

    return (
        <div className="product-list flex flex-wrap gap-2 p-2 gap-8 md:p-4 justify-center">
            {Products?.map((product) => (
                <div key={product.uuid} className="max-w-sm rounded overflow-hidden relative h-[470px]">
                    <div>
                        {product.image ? (
                            <img
                                className="-mt-16 object-cover object-top w-full h-[400px]"
                                src={product.image}
                                alt={product.product_name}
                            />
                        ) : (
                            <img
                                className="-mt-16 object-cover object-top w-full h-[400px]"
                                src=""
                                alt={product.product_name}
                            />
                        )}
                    </div>

                    <div className="ml-4 mr-4 -mt-56 mb-auto bg-white w-11/12 mx-auto p-4 shadow-lg flex flex-col gap-2 absolute bottom-0 shadow-xl">
                        <div className="font-bold text-xl mb-2">{product.product_name}</div>
                        <div className="font-bold text-lg mb-2">{product.category}</div>
                        <p className="text-gray-700 text-base">{product.description}</p>
                        <div className="flex flex-row gap-2">
                            <div className="stars text-[#FF8906]">
                                {Array.from({ length: product.rating }, (_, index) => (
                                    <span key={index} className="star">★</span>
                                ))}
                            </div>
                            <div className="rating">{product.rating}/5</div>
                        </div>
                        <div className="flex flex-row gap-2">
                            <div className="first-price line-through text-red-800">
                                <p>{product.price}</p>
                            </div>
                            <div className="discount-price text-xl text-[#FF8906]">
                                <p>{product.price}</p>
                            </div>
                        </div>
                        <div className="flex flex-row gap-2 h-10">
                            <button
                                className="basis-4/5 bg-orange-400 rounded-xl"
                                onClick={() => handleBuyProduct(product.id)}
                            >
                                Buy
                            </button>
                            <button
                                onClick={() => handleBuyProduct(product.id)}
                                className="basis-1/5 rounded-xl border-2 border-orange-400 flex justify-center items-center"
                            >
                                <img className="w-6 h-6" src={orenShopingCart} alt="" />
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
