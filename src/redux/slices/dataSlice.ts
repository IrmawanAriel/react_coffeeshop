import { createSlice } from '@reduxjs/toolkit';
import { fetchData } from '../thunks';

interface DataState {
  loginData: any | null;
  loading: boolean;
  error: string | null;
}

const initialState: DataState = {
  loginData: null,
  loading: false,
  error: null,
};

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchData.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.loading = false;
        state.loginData = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch data';
      });
  }
});

export default dataSlice.reducer;
