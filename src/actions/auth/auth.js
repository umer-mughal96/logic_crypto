import * as constants from "./constants";
import * as services from "../../services/auth";
import {
  errorNotification,
  infoNotification,
  successNotification,
} from "../../utils/notification";

export const userSignUp = (data, history) => async (dispatch) => {
  try {
    
    dispatch({ type: constants.SET_AUTH_LOADING });
    const res = await services.registerUser(data);
    dispatch({ type: constants.SIGNUP_SUCCESS });
    successNotification(res.data.msg);
    dispatch({ type: constants.RESET_AUTH_STATE });
    history.push("/signin");
  } catch (err) {
    err.response?.data?.msg
      ? infoNotification(err.response?.data?.msg)
      : err.response?.data?.error?.map((err) => errorNotification(err.msg));
    dispatch({ type: constants.SIGNUP_FAIL, payload: err.response.data?.error });
  }
};

//   SIGNIN_USER

export const userSignin = (data, history) => async (dispatch) => {
  try {
    
    dispatch({ type: constants.SET_AUTH_LOADING });
    const res = await services.signInUser(data);
    if (res.data.loginUser.active == false) {
      errorNotification("Your account blocked");
      dispatch({ type: constants.SIGN_IN_FAIL });
      return;
    }

    dispatch({ type: constants.SIGN_IN_SUCCESS, payload: res.data });

    successNotification("Successfully login");
    history.push("/setting-dsh");
  } catch (err) {
    err.response?.data?.msg
      ? errorNotification(err.response?.data?.msg)
      : err.response?.data?.error?.map((err) => errorNotification(err.msg));
    dispatch({
      type: constants.SIGN_IN_FAIL,
      payload: err?.response.data.error
        ? err?.response.data.error
        : err?.response.data.msg,
    });
    dispatch({ type: constants.RESET_AUTH_STATE });
  }
};

export const userLogout = (history) => async (dispatch) => {
  try {
    dispatch({ type: constants.LOGOUT_SUCCESSFULLY });
    dispatch({ type: constants.RESET_AUTH_STATE });
    successNotification('Successfully Logout')
    history.push("/");
  } catch (err) {
    console.log("🚀 ~ file: auth.js ~ line 63 ~ userLogout ~ err", err);
    dispatch({
      type: constants.ERROR,
    });
  }
};

export const accountDeactivated = () => async (dispatch) => {
  try {
    dispatch({ type: constants.SOCKET_ACCOUNT_DEACTIVATED_SUCCESS });
    dispatch({ type: constants.RESET_AUTH_STATE });
    window.location.reload();
  } catch (err) {
    console.log("🚀 ~ file: auth.js ~ line 63 ~ userLogout ~ err", err);
    dispatch({
      type: constants.ERROR,
    });
  }
};

export const forgotPassword = (history, data) => async (dispatch) => {
  try {
    dispatch({ type: constants.FORGOT_PASSWORD_REQUEST });
    const res = await services.forgotPassword(data);
    successNotification(res.data.msg);
    dispatch({ type: constants.FORGOT_PASSWORD_REQUEST });
    history.push("/resetpassword");
  } catch (err) {
    dispatch({
      type: constants.ERROR,
    });
    errorNotification(err.response?.data?.msg);
  }
};

export const userResetPassword = (history, data) => async (dispatch) => {
  try {
    dispatch({ type: constants.RESET_PASSWORD_REQUEST });
    const res = await services.resetPassword(data);
    dispatch({ type: constants.RESET_PASSWORD_SUCCESS });
    successNotification(res.data.msg);
    history.push("/signin");
  } catch (err) {
    console.log("🚀 ~ file: auth.js ~ line 63 ~ userLogout ~ err", err);
    dispatch({
      type: constants.ERROR,
    });
    errorNotification(err.response?.data?.msg);
  }
};
