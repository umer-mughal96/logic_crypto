import * as constants from "./constants";
import * as services from "../../services/exchange";
import {
  errorNotification,
  infoNotification,
  successNotification,
} from "../../utils/notification";

export const connectExchange = (data) => async (dispatch) => {
  try {
    dispatch({ type: constants.SET_EXCHANGE_LOADING });
    const res = await services.connectingExchange(data);
    console.log(res)
    dispatch({
      type: constants.CONNECT_EXCHANGE_SUCCESS,
      payload: res.data.exchanges,
    });

    successNotification(res.data.msg);
  } catch (err) {
    err.response?.data?.msg
      ? infoNotification(err.response?.data?.msg)
      : err.response?.data?.error?.map((err) => errorNotification(err.msg));
    dispatch({ type: constants.CONNECT_EXCHANGE_FAIL });
  }
};

export const getUserExchanges = () => async (dispatch) => {
  try {
    dispatch({ type: constants.SET_EXCHANGE_LOADING });
    const res = await services.getExchanges();
    dispatch({
      type: constants.GET_EXCHANGES_SUCCESS,
      payload: res.data.exchanges,
    });
    successNotification(res.data.msg);
  } catch (err) {
    // err.response?.data?.msg
    //   ? infoNotification(err.response?.data?.msg)
    //   : err.response?.data?.error?.map((err) => errorNotification(err.msg));
    dispatch({ type: constants.GET_EXCHANGESS_FAIL });
  }
};

export const deleteUserExchange = (exchangeId, id) => async (dispatch) => {
  try {
    let data = {
      id,
      exchangeId,
    };
    dispatch({ type: constants.SET_EXCHANGE_LOADING });
    const res = await services.deleteExchange(data);
    if (res.status == 200) {
      dispatch({
        type: constants.DELETE_USER_EXCHANGE_SUCCESS,
        payload: exchangeId,
      });
      successNotification(res.data.msg);
    } else {
      errorNotification("Something Gone Wrong");
    }
  } catch (err) {
    err.response?.data?.msg
      ? infoNotification(err.response?.data?.msg)
      : err.response?.data?.error?.map((err) => errorNotification(err.msg));
    dispatch({ type: constants.DELETE_USER_EXCHANGE_FAIL });
  }
};


export const createNewRule = (rules) => async(dispatch) =>{
  try {
    console.log(rules)
    
    const res = await services.newRule(rules)
    console.log(res)
    
  } catch (error) {
    
  }
}