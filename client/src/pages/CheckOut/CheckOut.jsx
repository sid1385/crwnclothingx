import React from "react";
import "./CheckOut.scss";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  totalItemCost,
  cartItemsSelector,
} from "../../redux/cart/cart-selectors";
import StripeButton from "../../components/StripeButton/StripeButton";
import CheckoutItem from "../../components/CheckoutItem/CheckoutItem";

const CheckOut = ({ Total, cartItems }) => {
  return (
    <div className="checkout-page">
      <div className="header">
        <div className="header-component">
          <span>Product</span>
        </div>
        <div className="header-component">
          <span>Description</span>
        </div>
        <div className="header-component">
          <span>Quantity</span>
        </div>
        <div className="header-component">
          <span>Price</span>
        </div>
        <div className="header-component">
          <span>Remove</span>
        </div>
      </div>
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((item) => <CheckoutItem key={item.id} item={item} />)
        ) : (
          <div className="empty-cart">YOUR CART IS EMPTY</div>
        )}
      </div>

      <div className="total">TOTAL ${Total}</div>
      <div className="test-warning">
        *Please use the following test credit card for payments*
        <br />
        4242 4242 4242 4242 - Exp: 01/22 - CVV: 123
      </div>
      <StripeButton style={{ display: "block" }} Price={Total} />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  Total: totalItemCost,
  cartItems: cartItemsSelector,
});

export default connect(mapStateToProps)(CheckOut);
