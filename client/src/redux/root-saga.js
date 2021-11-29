import { all, call } from "redux-saga/effects";

import { collectionFetchStart } from "./shop/shop-saga";
import { userRootSaga } from "./user/user-saga";
import { cartRootSaga } from "./cart/cart-saga";

export default function* rootSaga() {
  yield all([
    call(collectionFetchStart),
    call(userRootSaga),
    call(cartRootSaga),
  ]);
}
