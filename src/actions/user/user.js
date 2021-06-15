import * as constants from "./constants";
import * as userServices from "../../services/user";

export const getExchangeAssets = (exchangeName) => async (dispatch) => {
  try {
    dispatch({ type: constants.SET_USER_LOADING });
    const res = await userServices.exchangeAssets(exchangeName);
    dispatch({
      type: constants.GET_EXCHANGE_ASSETS_SUCCESSFULL,
      payload: res.data,
    });
  } catch (err) {
    console.log("🚀 ~ file: auth.js ~ line 63 ~ userLogout ~ err", err);
    dispatch({
      type: constants.GET_EXCHANGE_ASSETS_FAIL,
    });
  }
};
