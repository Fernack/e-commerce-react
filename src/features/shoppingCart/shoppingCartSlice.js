import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: {}
};

export const shoppingCartSlice = createSlice({
  name: 'shoppingCart',
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const product = state.products[action.payload.id];

      if (product){
        product.amount++;
      }
      else {
        state.products[action.payload.id] = {amount: 1, ...action.payload.product};
      }        
    },
    removeProduct: (state, action) => {
      const product = state.products[action.payload];

      if (product){
        if (product.amount === 1){
          delete state.products[action.payload];
        }
        else {
          product.amount--;
        }        
      }
    },
    buyAlItems: state => { state.products = {}}
  },
});

export const { addProduct, removeProduct, buyAlItems } = shoppingCartSlice.actions;

export const shoppingCartProducts = (state) => {
  const keyProducts = Object.keys(state.shoppingCart.products);

  return keyProducts.map(kp => state.shoppingCart.products[kp]);
};

export const amountOfProducts = () => (products) => {
  return products.reduce((value, current) => value + current.amount, 0);
};

export const totalPriceOfProducts = () => (products) => {
  return products.reduce((value, current) => value + (current.amount * current.price), 0);
};

export default shoppingCartSlice.reducer; 