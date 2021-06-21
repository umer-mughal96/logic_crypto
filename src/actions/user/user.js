import * as constants from "./constants";
import * as userServices from "../../services/user";
import { errorNotification } from "../../utils/notification";
const { parse } = require("flatted");

export const getExchangeAssets = (exchangeName) => async (dispatch) => {
  try {
    dispatch({ type: constants.SET_USER_LOADING });
    const res = await userServices.exchangeAssets(exchangeName);
   

    if (res.status == 200) {
      let data = parse(res.data.data)

      if (exchangeName == "Binance") {

        dispatch({
          type: constants.GET_BINANCE_EXCHANGE_ASSETES_SUCCESS,
          payload: data,
        });
      }
    }
  } catch (err) {
    console.log("🚀 ~ file: auth.js ~ line 63 ~ userLogout ~ err", err);
    dispatch({
      type: constants.GET_EXCHANGE_ASSETS_FAIL,
    });
    errorNotification("Something Wrong With Server")
  }
};
