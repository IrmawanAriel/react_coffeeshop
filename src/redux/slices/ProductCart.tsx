import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface productState {
  ProductShopingCart: DetailProduct[] ;
}

interface DetailProduct {
  idProduct?: number | null;
  quantity: number | null;
  size: string | null;
  ice: boolean | null;
  image?: string; 
  product_name?: string;
};

const initialState: productState = {
  ProductShopingCart : []
};

const ProductSlice = createSlice({
  name: 'productShopingCart',
  initialState,
  reducers: {
    
    setProductShopingCart: (state, action: PayloadAction<DetailProduct> ) => {
      state.ProductShopingCart.push(action.payload);
    }, 
    deleteProductShopingCart: (state, action: PayloadAction<number>) =>{
      state.ProductShopingCart = state.ProductShopingCart.filter((_, index) => index !== action.payload);
      // state.ProductShopingCart = state.ProductShopingCart.filter(product => product.idProduct !== action.payload);
    },
    deleteAllProduct: (state) =>{
      state.ProductShopingCart = [];
    }
  },
});

export const { deleteProductShopingCart, setProductShopingCart, deleteAllProduct  } = ProductSlice.actions;
export default ProductSlice.reducer;
