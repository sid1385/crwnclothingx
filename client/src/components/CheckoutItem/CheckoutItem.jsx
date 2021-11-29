import React from "react";
import "./CheckoutItem.scss";
import {
  removeItemFromCart,
  addItems,
  removeItems,
} from "../../redux/cart/cart-actions";
import { connect } from "react-redux";

const CheckoutItem = ({ item, removeItemFromCart, addItems, removeItems }) => {
  const { name, price, imageUrl, quantity } = item;
  return (
    <div className="checkout-item">
      <div className="img-container">
        <img src={imageUrl} alt="item" />
      </div>
      <div className="description">{name}</div>
      <div className="quantity">
        <div className="remove-item" onClick={() => removeItems(item)}>
          &#10094;
        </div>
        <div className="value">{quantity}</div>
        <div className="add-item" onClick={() => addItems(item)}>
          &#10095;
        </div>
      </div>
      <div className="price">${price}</div>
      <div className="remove" onClick={() => removeItemFromCart(item)}>
        &#10005;
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  removeItemFromCart: (item) => dispatch(removeItemFromCart(item)),
  addItems: (item) => dispatch(addItems(item)),
  removeItems: (item) => dispatch(removeItems(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
