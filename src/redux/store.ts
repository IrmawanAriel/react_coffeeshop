// store.ts
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import ProductCart from './slices/ProductCart';
import dataReducer from './slices/dataSlice';
const store = configureStore({
  reducer: {
    auth: authReducer,
    Product: ProductCart,
    data: dataReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: { serviceApi: null }, 
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
