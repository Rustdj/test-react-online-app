import React from 'react';
import CustomizedBadges from '../../mui/badge.jsx';
import { NavLink } from 'react-router-dom';
import { data } from '../../data/data.jsx';
import { Cart } from '../cart-item/cart';
import { useSelector } from 'react-redux';
import { useMatchMedia } from '../../hooks/use-match-media';

export default function Content() {
  const { isMobile, isMiddleMobile, isBigMobile, isTablet, isDesktop } = useMatchMedia();

  const items = useSelector((state) => state.cart.itemsInCart);
  const totalPrice = items.reduce((acc, item) => acc + item.price, 0);

  const setDataBase = data.map((elem) => {
    return (
      <div key={elem.id} className="setItem">
        <Cart
          image={elem.image}
          title={elem.title}
          text={elem.text}
          price={elem.price}
          button={elem.button}
        />
      </div>
    );
  });
  return (
    <>
      {isMobile && <div className="setItems">{setDataBase}</div>}
      {isMiddleMobile && <div className="setItemsIsMiddleMobile">{setDataBase}</div>}
      {isBigMobile && <div className="setItemsIsBigMobile">{setDataBase}</div>}
      {isTablet && <div className="setItemsIsTablet">{setDataBase}</div>}
      {isDesktop && <div className="setItemsIsDesktop">{setDataBase}</div>}

      {isMobile && (
        <NavLink to="/basket" className="basketWrap">
          {totalPrice ? <span className="totalPrice">{totalPrice}</span> : null}

          <CustomizedBadges />
        </NavLink>
      )}

      {isMiddleMobile && (
        <NavLink to="/basket" className="basketWrap">
          {totalPrice ? <span className="totalPrice">{totalPrice}</span> : null}

          <CustomizedBadges />
        </NavLink>
      )}

      {isBigMobile && (
        <NavLink to="/basket" className="basketWrap">
          {totalPrice ? <span className="totalPrice">{totalPrice}</span> : null}

          <CustomizedBadges />
        </NavLink>
      )}

      {isTablet && (
        <NavLink to="/basket" className="basketWrap">
          {totalPrice ? <span className="totalPrice">{totalPrice}</span> : null}

          <CustomizedBadges />
        </NavLink>
      )}

      {isDesktop && (
        <NavLink to="/basket" className="basketWrap">
          {totalPrice ? <span className="totalPrice">{totalPrice}</span> : null}

          <CustomizedBadges />
        </NavLink>
      )}
    </>
  );
}
