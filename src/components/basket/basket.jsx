import React, { useState } from 'react';
import { LayoutBasket } from '../layout/layout-basket';
import { useMatchMedia } from '../../hooks/use-match-media';
import './basket.css';

export default function Basket() {
  const { isMobile, isMiddleMobile, isBigMobile, isTablet, isDesktop } = useMatchMedia();
  const [basketCount, setBasketCount] = useState(0);
  const incCount = () => {
    if (basketCount < 10) return setBasketCount(basketCount + 1);
  };
  const decCount = () => {
    if (basketCount > 0) return setBasketCount(basketCount - 1);
  };
  return (
    <>
      {isMobile && (
        <LayoutBasket incCount={incCount} decCount={decCount} basketCount={basketCount} />
      )}
      {isMiddleMobile && (
        <LayoutBasket incCount={incCount} decCount={decCount} basketCount={basketCount} />
      )}
      {isBigMobile && (
        <LayoutBasket incCount={incCount} decCount={decCount} basketCount={basketCount} />
      )}
      {isTablet && (
        <LayoutBasket incCount={incCount} decCount={decCount} basketCount={basketCount} />
      )}
      {isDesktop && (
        <LayoutBasket incCount={incCount} decCount={decCount} basketCount={basketCount} />
      )}
    </>
  );
}
