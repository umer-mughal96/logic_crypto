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
    dispatch({ type: constants.CONNECT_EXCHANGE_SUCCESS , payload : res.data.exchanges });

    successNotification(res.data.msg);
  } catch (err) {
    err.response?.data?.msg
      ? infoNotification(err.response?.data?.msg)
      : err.response?.data?.error?.map((err) => errorNotification(err.msg));
    dispatch({ type: constants.CONNECT_EXCHANGE_FAIL });
  }
};
