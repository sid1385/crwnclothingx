const INITIAL_STATE = {
  collections: null,
  isFetching: false,
  errormsg: "",
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SHOP_ITEM_FETCH_START":
      return {
        ...state,
        isFetching: true,
      };
    case "SHOP_ITEM_FETCH_COMPLETED":
      return {
        ...state,
        collections: action.payload,
        isFetching: false,
      };
    case "SHOP_ITEM_FETCH_ERROR":
      return {
        ...state,
        isFetching: false,
        errormsg: action.payload,
      };
    default:
      return state;
  }
};

export default shopReducer;
