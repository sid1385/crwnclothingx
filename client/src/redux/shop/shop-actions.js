import {
  firestore,
  convertCollectionsArrayToObject,
} from "../../FireBase/firebase.config";

export const shopItemFetchStart = () => ({
  type: "SHOP_ITEM_FETCH_START",
});

export const shopItemFetchCompleted = (collections) => ({
  type: "SHOP_ITEM_FETCH_COMPLETED",
  payload: collections,
});

export const shopItemFetchError = (errormsg) => ({
  type: "SHOP_ITEM_FETCH_ERROR",
  payload: errormsg,
});

export const fetchShopItemFromFirebaseAsync = () => {
  return (dispatch) => {
    const collectionref = firestore.collection("collections");
    dispatch(shopItemFetchStart());
    collectionref
      .get()
      .then((snapshot) => {
        const collectionsMap = convertCollectionsArrayToObject(snapshot);

        dispatch(shopItemFetchCompleted(collectionsMap));
      })
      .catch((error) => {
        dispatch(shopItemFetchError(error.message));
      });
  };
};
