import React from 'react';
import { LayoutCartPage } from '../layout/layout-cart-page';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import './cart-page.css';

export const CartPage = ({ image, title, text, price, button }) => {
  const historyOut = useNavigate();
  const page = useSelector((state) => state.cart.itemsInCart);
  if (!page) return null;
  const getOut = () => {
    historyOut(`/`);
  };
  return (
    <>
    
      <LayoutCartPage
        image={image}
        title={title}
        text={text}
        price={price}
        button={button}
        getOut={getOut}
        page={page}
      />
    </>
  );
};
