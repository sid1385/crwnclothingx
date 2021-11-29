import { createSelector } from "reselect";

const shopSelector = (state) => state.shop;

export const selectShopCollections = createSelector(
  shopSelector,
  (shop) => shop.collections
);

export const selectIsFetching = createSelector(
  shopSelector,
  (shop) => shop.isFetching
);

export const selectCollection = (collectionUrlParam) =>
  createSelector(selectShopCollections, (collections) =>
    collections ? collections[collectionUrlParam] : null
  );

export const isCollectionFetched = createSelector(
  selectShopCollections,
  (collections) => !collections
);

export const convertCollectionsToArray = createSelector(
  selectShopCollections,
  (collections) =>
    collections ? Object.keys(collections).map((key) => collections[key]) : null
);
