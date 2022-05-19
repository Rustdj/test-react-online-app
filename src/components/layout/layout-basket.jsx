import React from "react";
import { NavLink } from "react-router-dom";

export const LayoutBasket = ({ decCount, incCount, basketCount, image }) => {
  return (
    <div className="containerBasket">
      <NavLink to="/">
        <button className="btnBasket">Back to app</button>
      </NavLink>
      <div className="blocks">
        <div className="block">
          <h2>Корзина</h2>
          <img src={image} alt="logo" />
          <title></title>
        </div>
        <div className="block">
          <div className="counter">
            <button onClick={decCount}>&minus;</button>
            <div>{basketCount}</div>
            <button onClick={incCount}>+</button>
          </div>
        </div>
      </div>
    </div>
  );
};
