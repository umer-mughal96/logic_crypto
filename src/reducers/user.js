import * as userConstants from "../actions/user/constants";

const iniitialState = {
  usLoading: false,
  exchangeAssets: null,
};

export const Exchange = (state = iniitialState, action) => {
  const { type, payload } = action;
  switch (action.type) {
    case userConstants.SET_USER_LOADING:
      return {
        ...state,
        usLoading: true,
      };
    case userConstants.GET_EXCHANGE_ASSETS_SUCCESSFULL:
      return {
        ...state,
        usLoading: false,
        exchangeAssets: payload,
      };
    case userConstants.GET_EXCHANGE_ASSETS_FAIL:
      return {
        ...state,
        usLoading: false,
        error: payload,
      };

    default:
      return state;
  }
};
