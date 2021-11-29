import React from "react";
import "./cartItem.scss";
const CartItem = ({ item }) => {
  const { name, price, imageUrl, quantity } = item;

  return (
    <div className="cart-item">
      <img src={imageUrl} alt="item" className="product-img" />
      <div className="info">
        <span className="product-name">{name}</span>
        <span className="product-price">
          {quantity} x ${price}
        </span>
      </div>
    </div>
  );
};

export default CartItem;
