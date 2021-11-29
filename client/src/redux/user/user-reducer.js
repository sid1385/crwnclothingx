const INITIAL_STATE = {
  currentUser: null,
  error: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "GOOGLE_SIGNIN_START":
    case "EMAIL_SIGNIN_START":
    case "EMAIL_SIGNUP_START":
      return {
        ...state,
        error: null,
      };
    case "GOOGLE_SIGNIN_COMPLETED":
    case "EMAIL_SIGNIN_COMPLETED":
    case "EMAIL_SIGNUP_COMPLETED":
      return {
        ...state,
        currentUser: action.payload,
      };
    case "SIGN_OUT_COMPLETED":
      return {
        ...state,
        currentUser: null,
        error: null,
      };
    case "GOOGLE_SIGNIN_ERROR":
    case "EMAIL_SIGNIN_ERROR":
    case "SIGN_OUT_ERROR":
    case "EMAIL_SIGNUP_ERROR":
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;
