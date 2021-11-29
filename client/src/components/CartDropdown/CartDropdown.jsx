import React from "react";
import "./CartDropdown.scss";
import CustomButton from "../customButton/customButton";
import CartItem from "../cartItem/cartItem";
import { createStructuredSelector } from "reselect";
import { useHistory } from "react-router-dom";
import { cartItemsSelector } from "../../redux/cart/cart-selectors";
import { showCartItemsModal } from "../../redux/cart/cart-actions";

import { connect } from "react-redux";
const CartDropdown = ({ cartItems, dispatch }) => {
  const history = useHistory();

  return (
    <div className="cart-dropdown">
      <div className="items">
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} item={item} />)
        ) : (
          <span className="empty-cart">YOUR CART IS EMPTY</span>
        )}
      </div>
      <CustomButton
        children="GO TO CHECKOUT"
        onClick={() => {
          history.push("checkout");
          dispatch(showCartItemsModal());
        }}
      />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: cartItemsSelector,
});

export default connect(mapStateToProps)(CartDropdown);
