export const setCurrentUser = (user) => ({
  type: "SET_CURRENT_USER",
  payload: user,
});

export const checkUserSession = () => ({
  type: "CHECK_USER_SESSION",
});

export const googleSignInStart = () => ({
  type: "GOOGLE_SIGNIN_START",
});

export const googleSignInCompleted = (user) => ({
  type: "GOOGLE_SIGNIN_COMPLETED",
  payload: user,
});

export const googleSignInError = (error) => ({
  type: "GOOGLE_SIGNIN_ERROR",
  payload: error,
});

export const emailSignInStart = (emailpw) => ({
  type: "EMAIL_SIGNIN_START",
  payload: emailpw,
});

export const emailSignInCompleted = (user) => ({
  type: "EMAIL_SIGNIN_COMPLETED",
  payload: user,
});

export const emailSignInError = (error) => ({
  type: "EMAIL_SIGNIN_ERROR",
  payload: error,
});

export const emailSignUpStart = (emailpw) => ({
  type: "EMAIL_SIGNUP_START",
  payload: emailpw,
});

export const emailSignUpCompleted = (user) => ({
  type: "EMAIL_SIGNUP_COMPLETED",
  payload: user,
});

export const emailSignUpError = (error) => ({
  type: "EMAIL_SIGNUP_ERROR",
  payload: error,
});

export const signOutStart = () => ({
  type: "SIGN_OUT_START",
});

export const signOutCompleted = () => ({
  type: "SIGN_OUT_COMPLETED",
});

export const signOutError = () => ({
  type: "SIGN_OUT_ERROR",
});
