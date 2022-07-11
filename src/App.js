import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.scss';

import { useProductsData } from './common/hooks/useProductsData';
import { Checkout } from './features/checkout/Checkout';
import { CheckoutSuccess } from './features/checkoutSuccess/CheckoutSuccess';
import { DetailProduct } from './features/detailProduct/DetailProduct';
import { Layout } from './features/layout/Layout';
import { ProductList } from './features/productList/ProductList';

function App() {
  const [products] = useProductsData();

  return (    
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={ <Layout> <ProductList products={products}/> </Layout> }/>
        <Route path="/product/:id" exact element={ <Layout> <DetailProduct/> </Layout>} />
        <Route path="/checkout" exact element={<Checkout/>} />
        <Route path="/checkout-success" exact element={<CheckoutSuccess/>} />        
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
