import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import ProductCart from './slices/ProductCart';

const store = configureStore({
  reducer: {
    auth: authReducer,
    Product: ProductCart,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
