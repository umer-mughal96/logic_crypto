import * as exchangeConstants from "../actions/exchange/constants";

const iniitialState = {
  exLoading: false,
  exchanges: null,
};

export const Exchange = (state = iniitialState, action) => {
  const { type, payload } = action;
  switch (action.type) {
    case exchangeConstants.SET_EXCHANGE_LOADING:
      return {
        ...state,
        exLoading: true,
      };

    case exchangeConstants.CONNECT_EXCHANGE_SUCCESS:
      return {
        ...state,
        exchanges: payload,
        exLoading: false,
      };

    case exchangeConstants.CONNECT_EXCHANGE_FAIL:
      return {
        ...state,
        exLoading: false,
      };

    case exchangeConstants.GET_EXCHANGES_SUCCESS:
      return {
        ...state,
        exchanges: payload,
        exLoading: false,
      };

    case exchangeConstants.DELETE_USER_EXCHANGE_SUCCESS:
      return {
        ...state,
        exchanges: {
          ...state.exchanges,
          exchanges: state.exchanges.exchanges.filter(
            (exc) => exc._id !== payload
          ),
        },
        exLoading: false,
      };

    default:
      return state;
  }
};
