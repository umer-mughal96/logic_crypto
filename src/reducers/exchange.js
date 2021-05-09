import * as exchangeConstants from "../actions/exchange/constants";

const iniitialState = {
  loading: false,
  exchanges: null,
};

export const Exchange = (state = iniitialState, action) => {
  const { type, payload } = action;
  switch (action.type) {
    case exchangeConstants.SET_EXCHANGE_LOADING:
      return {
        ...state,
        loading: true,
      };

    case exchangeConstants.CONNECT_EXCHANGE_SUCCESS:
      return {
        ...state,
        exchanges: payload,
        loading: false,
      };

      case exchangeConstants.CONNECT_EXCHANGE_FAIL:
        return {
          ...state,
          loading: false,
        };

    default:
      return {
        ...state,
      };
  }
};
