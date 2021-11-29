export const additemstocart = (cartitems, itemtobeadded) => {
  const existingcartitem = cartitems.find(
    (cartitems) => cartitems.id === itemtobeadded.id
  );

  if (existingcartitem) {
    return cartitems.map((cartitem) =>
      cartitem.id === itemtobeadded.id
        ? { ...cartitem, quantity: cartitem.quantity + 1 }
        : cartitem
    );
  }

  return [...cartitems, { ...itemtobeadded, quantity: 1 }];
};

export const removeitemsfromcart = (cartitems, itemtoberemoved) => {
  const existingCartItem = cartitems.find(
    (cartitems) => cartitems.id === itemtoberemoved.id
  );

  if (existingCartItem.quantity === 1) {
    return cartitems.filter((item) => item.id !== existingCartItem.id);
  }

  return cartitems.map((cartitem) =>
    cartitem.id === itemtoberemoved.id
      ? { ...cartitem, quantity: cartitem.quantity - 1 }
      : cartitem
  );
};
