import {
  takeEvery,
  call,
  put,
  take,
  takeLatest,
  delay,
} from "redux-saga/effects";
import { shopItemFetchCompleted, shopItemFetchError } from "./shop-actions";
import {
  firestore,
  convertCollectionsArrayToObject,
} from "../../FireBase/firebase.config";

export function* fetchCollectionsFromFirebaseAsync() {
  try {
    const collectionref = yield firestore.collection("collections");
    const snapshot = yield collectionref.get();
    const collectionMap = yield call(convertCollectionsArrayToObject, snapshot);
    yield put(shopItemFetchCompleted(collectionMap));
  } catch (error) {
    yield put(shopItemFetchError(error.message));
  }

  //   return (dispatch) => {
  //     const collectionref = firestore.collection("collections");
  //     dispatch(shopItemFetchStart());
  //     collectionref
  //       .get()
  //       .then((snapshot) => {
  //         const collectionsMap = convertCollectionsArrayToObject(snapshot);

  //         dispatch(shopItemFetchCompleted(collectionsMap));
  //       })
  //       .catch((error) => {
  //         dispatch(shopItemFetchError(error.message));
  //       });
  //   };
}

export function* collectionFetchStart() {
  yield takeLatest("SHOP_ITEM_FETCH_START", fetchCollectionsFromFirebaseAsync);
}
