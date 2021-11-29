import {
  takeEvery,
  call,
  put,
  take,
  takeLatest,
  delay,
  all,
} from "redux-saga/effects";

import {
  auth,
  provider,
  createUserProfileDocument,
  checkUser,
} from "../../FireBase/firebase.config";

import {
  googleSignInCompleted,
  googleSignInError,
  emailSignInCompleted,
  emailSignInError,
  signOutCompleted,
  signOutError,
  emailSignUpError,
  emailSignUpCompleted,
} from "./user-actions";

function* GoogleSignInStart() {
  yield takeLatest("GOOGLE_SIGNIN_START", googleSignInFirebaseAsync);
}

function* checkUserSession() {
  yield takeLatest("CHECK_USER_SESSION", checkUserSessionFirebase);
}

function* userSignOutInitialize() {
  yield takeLatest("SIGN_OUT_START", signOut);
}

function* signOut() {
  try {
    yield auth.signOut();
    yield put(signOutCompleted());
  } catch (error) {
    put(signOutError(error));
  }
}

function* checkUserSessionFirebase() {
  try {
    const user = yield checkUser();
    if (!user) return;
    const userref = yield call(createUserProfileDocument, user);
    const snapshot = yield userref.get();

    yield put(
      emailSignInCompleted({
        id: snapshot.id,
        ...snapshot.data(),
      })
    );
  } catch (error) {
    yield put(emailSignInError(error));
  }
}
function* emailSignInFirebaseAsync({ payload: { email, password } }) {
  console.log(email, password);
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    const userref = yield call(createUserProfileDocument, user);
    const snapshot = yield userref.get();

    yield put(
      emailSignInCompleted({
        id: snapshot.id,
        ...snapshot.data(),
      })
    );
  } catch (error) {
    yield put(emailSignInError(error));
  }
}

function* emailSignUpFirebaseAsync({
  payload: { email, password, displayName },
}) {
  console.log(email, password);
  try {
    const { user } = yield auth.createUserWithEmailAndPassword(email, password);
    const userref = yield call(createUserProfileDocument, user, {
      displayName,
    });
    const snapshot = yield userref.get();

    yield put(
      emailSignUpCompleted({
        id: snapshot.id,
        ...snapshot.data(),
      })
    );
  } catch (error) {
    yield put(emailSignUpError(error));
  }
}

export function* EmailSignInstart() {
  yield takeLatest("EMAIL_SIGNIN_START", emailSignInFirebaseAsync);
}

export function* EmailSignUpstart() {
  yield takeLatest("EMAIL_SIGNUP_START", emailSignUpFirebaseAsync);
}

function* googleSignInFirebaseAsync() {
  try {
    const { user } = yield auth.signInWithPopup(provider);

    const userref = yield call(createUserProfileDocument, user);

    const snapshot = yield userref.get();

    yield put(
      googleSignInCompleted({
        id: snapshot.id,
        ...snapshot.data(),
      })
    );
  } catch (error) {
    yield put(googleSignInError(error));
  }
}

export function* userRootSaga() {
  yield all([
    call(GoogleSignInStart),
    call(EmailSignInstart),
    call(EmailSignUpstart),
    call(checkUserSession),
    call(userSignOutInitialize),
  ]);
}
