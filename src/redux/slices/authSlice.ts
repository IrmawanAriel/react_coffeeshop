import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  token: string | null;
  id: string | null | number;
  TempProduct: DetailProduct[] ;
}

interface DetailProduct {
  idProduct?: number | null;
  quantity: number | null;
  size: string | null;
  ice: boolean | null;
  image?: string; 
  product_name?: string;
};

const initialState: AuthState = {
  token: null,
  id: null,
  TempProduct : []
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
    deleteToken: (state) => {
      state.token = null;
    },
    setId: (state, action: PayloadAction<string>) => {
      state.id = action.payload;
    },
    deleteId: (state) => {
      state.id = null;
    },
    setTempProduct: (state, action: PayloadAction<DetailProduct> ) => {
      state.TempProduct.push(action.payload);
    }, 
    deleteTempProduct: (state, action: PayloadAction<number>) =>{
      state.TempProduct = state.TempProduct.filter((_, index) => index !== action.payload);
      // state.TempProduct = state.TempProduct.filter(product => product.idProduct !== action.payload);
    },
    deleteAllProduct: (state) =>{
      state.TempProduct = [];
    }
  },
});

export const { setToken, deleteToken, setId, deleteId, deleteTempProduct, setTempProduct, deleteAllProduct  } = authSlice.actions;
export default authSlice.reducer;
