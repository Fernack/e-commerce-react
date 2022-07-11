import { configureStore } from '@reduxjs/toolkit';
import productListSlice from '../features/productList/productListSlice';
import shoppingCartSlice from '../features/shoppingCart/shoppingCartSlice';

export const store = configureStore({
  reducer: {
      productList: productListSlice,
      shoppingCart: shoppingCartSlice
  },
});
