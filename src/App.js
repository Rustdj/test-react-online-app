import React from 'react';
import Basket from './components/basket/basket.jsx';
import Content from './components/content/content.jsx';
import './main-style/App.css';
import { Route, Routes } from 'react-router';
import { CartPage } from './components/cart-page/cart-page.jsx';


export default function App() {
  return (
    <>
        <Routes>
          <Route path="/" element={<Content />} />
          <Route path="/basket" element={<Basket />} />
          <Route path="/app:order" element={<CartPage />} />
        </Routes>
    </>
  )
}
