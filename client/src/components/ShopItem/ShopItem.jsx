import React from "react";
import "./ShopItem.scss";
import CustomButton from "../customButton/customButton";
import { connect } from "react-redux";
import { addItems } from "../../redux/cart/cart-actions";

const ShopItem = ({ item, addItems }) => {
  const { name, price, imageUrl } = item;

  return (
    <div className="shop-item">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="footer">
        <div className="name">{name}</div>
        <div className="price">{price}</div>
      </div>
      <CustomButton
        onClick={() => addItems(item)}
        inverted
        children="ADD TO CART"
      />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItems: (item) => dispatch(addItems(item)),
});

export default connect(null, mapDispatchToProps)(ShopItem);
