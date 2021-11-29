import { additemstocart, removeitemsfromcart } from "./cart-utils";

const INITIAL_STATE = {
  hidden: false,
  cartItems: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SHOW_CARTITEMS_MODAL":
      return {
        ...state,
        hidden: !state.hidden,
      };
    case "ADD_ITEMS":
      return {
        ...state,
        cartItems: additemstocart(state.cartItems, action.payload),
      };

    case "REMOVE_ITEMS":
      return {
        ...state,
        cartItems: removeitemsfromcart(state.cartItems, action.payload),
      };
    case "REMOVE_ITEM_FROM_CART":
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item) => item.id !== action.payload.id
        ),
      };
    case "CLEAR_CART":
      return {
        ...state,
        cartItems: [],
      };

    default:
      return state;
  }
};

export default cartReducer;
