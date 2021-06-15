import * as constants from "./constants";
import * as stripeServices from "../../services/stripe";

export const paymentDetails =
  (packageName, packagePrice, history) => async (dispatch) => {
    try {
      let data = {
        packageName,
        packagePrice,
      };
      dispatch({
        type: constants.STRIPE_PAYMENT_DETAIL_SUCCESS,
        payload: data,
      });
      history.push("/pay");
    } catch (err) {
      console.log("🚀 ~ file: auth.js ~ line 63 ~ userLogout ~ err", err);
    }
  };

export const payToStripe = (data) => async (dispatch) => {
  try {
    dispatch({ type: constants.SET_STRIPE_LOADING });
    const res = await stripeServices.pay(data);
    dispatch({ type: constants.STRIPE_PAY_SUCCESS , payload : res.data });
  } catch (err) {
    console.log("🚀 ~ file: auth.js ~ line 63 ~ userLogout ~ err", err);
    dispatch({
      type: constants.STRIPE_PAY_FAIL,
    });
  }
};
