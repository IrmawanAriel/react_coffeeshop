import axios, { AxiosResponse } from 'axios';
import React, { useState } from 'react'
import Input from './Input';

 interface productBody {
    id?: number;
    description: string;
    price: number;
    product_name?: string;
    rating: number;
    stock: number;
    category: string;
    json: string[];
}


export default function AxiosTry() {

    const [data1 ,setData] = useState<productBody>()

    const getdata = async () => {
        const url = 'http://localhost:8000/product';
        try {
            const result = await axios.get(url);
            setData(result.data)
            console.log(data1)
        } catch(error) {
            console.log(error)
        }
    }

  return (
    <>
        <div>AxiosTry</div>
        <div>
            <button onClick={getdata} className='border-2 border-oren p-4 text-2xl font-semibold bg-oren rounded rounded-3xl'>
                Tampilkan data product
            </button>
        </div>
    </>
  )
}
