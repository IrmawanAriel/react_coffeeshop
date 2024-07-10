import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface FetchDataResponse {
    data: productBody[];
    message: string;
}

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

// Mengubah parameter kedua menjadi objek yang menerima `apiEndpoint`
export const fetchData = createAsyncThunk<FetchDataResponse, { apiEndpoint: string }>(
  'data/fetchData',
  async ({ apiEndpoint }) => {
    const response = await axios.get(apiEndpoint);
    return response.data;
  }
);
