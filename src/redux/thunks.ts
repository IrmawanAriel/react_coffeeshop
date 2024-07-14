import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface user {
  email: string;
  password: string;
}

interface ApiResponse {
  msg: string;
  image: string;
  data: {
    token: string;
  }[];
}

export const fetchData = createAsyncThunk<ApiResponse, { serviceApi: string , data: user}>(
  'data/fetchData',
  async ({ serviceApi, data }) => {
    const response = await axios.post(serviceApi, data);

    return response.data;
  }
);
