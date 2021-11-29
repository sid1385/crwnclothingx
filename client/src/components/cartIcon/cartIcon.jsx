import React from "react";
import "./cartIcon.scss";
import { showCartItemsModal } from "../../redux/cart/cart-actions";
import { connect } from "react-redux";
import { ReactComponent as Icon } from "../../assets/shopping-bag.svg";
import { createStructuredSelector } from "reselect";
import { cartItemsCount } from "../../redux/cart/cart-selectors";

const CartIcon = ({ showCartItemsModal, itemcount }) => {
  return (
    <div className="cart-icon" onClick={showCartItemsModal}>
      <Icon className="icon" />
      <div className="item-count">{itemcount}</div>
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  itemcount: cartItemsCount,
});

const mapDispatchToProps = (dispatch) => ({
  showCartItemsModal: () => dispatch(showCartItemsModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
