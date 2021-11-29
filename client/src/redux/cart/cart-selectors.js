import { createSelector } from "reselect";

const cartSelector = (state) => state.cart;

export const cartItemsSelector = createSelector(
  cartSelector,
  (cart) => cart.cartItems
);

export const selectCartHidden = createSelector(
  cartSelector,
  (cart) => cart.hidden
);

export const cartItemsCount = createSelector(cartItemsSelector, (cartItems) =>
  cartItems.reduce(
    (accumulatedquantity, cartitem) => accumulatedquantity + cartitem.quantity,
    0
  )
);

export const totalItemCost = createSelector(cartItemsSelector, (cartItems) =>
  cartItems.reduce(
    (accumulatedprice, cartitem) => accumulatedprice + cartitem.price,
    0
  )
);
