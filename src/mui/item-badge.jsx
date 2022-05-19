import React from 'react';
import '../main-style/App.css'

export const ItemBadge = ({
    quantity = 0
}) => {
  return quantity > 0 ? (
    <div className="itemsInCart">
        {quantity}
    </div>
  ) : null;
}
