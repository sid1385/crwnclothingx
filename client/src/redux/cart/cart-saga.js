import {
  takeEvery,
  call,
  put,
  take,
  takeLatest,
  delay,
  all,
} from "redux-saga/effects";
import { clearCart } from "./cart-actions";

function* clearCartOnSignIn() {
  yield put(clearCart());
}

function* signOutCompleted() {
  yield takeLatest("SIGN_OUT_COMPLETED", clearCartOnSignIn);
}

export function* cartRootSaga() {
  yield all([call(signOutCompleted)]);
}
