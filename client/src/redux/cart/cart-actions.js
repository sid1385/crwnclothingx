export const showCartItemsModal = () => ({
  type: "SHOW_CARTITEMS_MODAL",
});

export const addItems = (item) => ({
  type: "ADD_ITEMS",
  payload: item,
});

export const removeItemFromCart = (item) => ({
  type: "REMOVE_ITEM_FROM_CART",
  payload: item,
});

export const removeItems = (item) => ({
  type: "REMOVE_ITEMS",
  payload: item,
});

export const clearCart = () => ({
  type: "CLEAR_CART",
});
