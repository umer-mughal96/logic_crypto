import * as constants from "./constants";
import * as userServices from "../../services/user";
import { errorNotification } from "../../utils/notification";
const { parse } = require("flatted");

export const getExchangeAssets = (exchangeName) => async (dispatch) => {
console.log("🚀 ~ file: user.js ~ line 7 ~ getExchangeAssets ~ exchangeName", exchangeName)
  try {
    dispatch({ type: constants.SET_USER_LOADING });
    const res = await userServices.exchangeAssets(exchangeName);
   

    if (res.status == 200) {
     

      if (exchangeName == "Binance") {
        let data = parse(res.data.data)
        dispatch({
          type: constants.GET_BINANCE_EXCHANGE_ASSETES_SUCCESS,
          payload: data,
        });
      }else if(exchangeName == "Bitpanda pro"){
        let data = res.data ;
        dispatch({
          type: constants.GET_BITPANDAPRO_EXCHANGE_ASSETES_SUCCESS,
          payload: data,
        });
      }else if(exchangeName == "Poloniex"){
        dispatch({
          type: constants.GET_POLONIEX_EXCHANGE_ASSETES_SUCCESS,
          payload: res.data,
        });
      }else if(exchangeName == "Kreken"){
        dispatch({
          type: constants.GET_KRAKEN_EXCHANGE_ASSETES_SUCCESS,
          payload: res,
        });
      }
      else if(exchangeName == "Okex"){
        let data = parse(res.data.data)
        dispatch({
          type: constants.GET_OKEX_EXCHANGE_ASSETES_SUCCESS,
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
