import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: []
};

export const productListSlice = createSlice({
  name: 'productList',
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    }
  },
});

export const { setProducts } = productListSlice.actions;

export const getProductById = state => id => state.productList.products.find(p => p.id === id );

export default productListSlice.reducer; 