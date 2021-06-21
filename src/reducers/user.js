import * as userConstants from "../actions/user/constants";

const iniitialState = {
  usLoading: false,
  binanceAssets: null,
  binanceUsAssets: null

};

export const User = (state = iniitialState, action) => {
  const { type, payload } = action;
  switch (action.type) {
    case userConstants.SET_USER_LOADING:
      return {
        ...state,
        usLoading: true,
      };
    case userConstants.GET_BINANCE_EXCHANGE_ASSETES_SUCCESS:
      return {
        ...state,
        usLoading: false,
        binanceAssets: payload,
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
