import * as authConstants from "../actions/auth/constants";

const iniitialState = {
  token: null,
  user: null,
  auLoading: false,
  success: false,
  error: null,
  isSignup: false,
};

export const Auth = (state = iniitialState, action) => {
  const { type, payload } = action;
  switch (action.type) {
    case authConstants.SET_AUTH_LOADING:
      return {
        ...state,
        auLoading: true,
      };
    case authConstants.SIGN_IN_SUCCESS:
      return {
        ...state,
        auLoading: false,
        user: payload.loginUser,
        success: true,
        token: payload.token,
      };
    case authConstants.SIGNUP_SUCCESS:
      return {
        ...state,
        isSignup: true,
      };
    case authConstants.SIGNUP_FAIL:
    case authConstants.SIGN_IN_FAIL:
      return {
        ...state,
        success: false,
        auLoading: false,
        error: payload,
      };
    case authConstants.LOGOUT_SUCCESSFULLY:
      return {
        token: null,
        user: null,
        auLoading: false,
        success: false,
        error: null,
        isSignup: false,
      };

    case authConstants.SOCKET_ACCOUNT_DEACTIVATED_SUCCESS:
      return {
        token: null,
        user: null,
        auLoading: false,
        success: false,
        error: null,
        isSignup: false,
      };

    case authConstants.RESET_AUTH_STATE:
      return {
        ...state,
        auLoading: false,
        success: false,
        error: null,
        isSignup: false,
      };
    case authConstants.ERROR:
      return {
        ...state,
        auLoading: false,
      };

    default:
      return state;
  }
};
