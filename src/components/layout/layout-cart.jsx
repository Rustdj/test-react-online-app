import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setItemInCart } from '../../redux/cart/reducer';
import { useMatchMedia } from '../../hooks/use-match-media';

export const LayoutCart = ({ image, title, text, price, button }) => {
  const { isMobile, isTablet, isDesktop } = useMatchMedia();

  const dispatch = useDispatch();
  const history = useNavigate();
  const item = { image, title, text, price, button };
  const handleCart = (e) => {
    e.stopPropagation();
    dispatch(setItemInCart(item));
  };
  const toNavigate = () => {
    history(`/app${item.order}`);
  };

  return (
    <>
      <div className="setItem">
        <img src={image} alt="set" onClick={toNavigate} />
        <h4>{title}</h4>
        <p>{text}</p>

        <div className="summ">
          <div>{price}</div>
          <button onClick={handleCart}>{button}</button>
        </div>
      </div>
    </>
  );
};
