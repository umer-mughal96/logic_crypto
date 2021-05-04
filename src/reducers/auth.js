import * as authConstants from '../actions/auth/constants';




const userinfoFromLocalStorage = localStorage.getItem('user')
  ? JSON.parse(localStorage.getItem('user'))
  : null;

const iniitialState = {
  token: userinfoFromLocalStorage ? userinfoFromLocalStorage?.token : null,
  user: userinfoFromLocalStorage ? userinfoFromLocalStorage?.loginUser : null,
  loading: false,
  success: false,
  error: null,
  isSignup: false,
};
  
  export const Auth = (state = iniitialState, action) => {
    const {type , payload} = action
    switch (action.type) {

      case authConstants.SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case authConstants.SIGN_IN_SUCCESS:
      return {
        ...state,
        loading: false,
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
        loading: false,
        error: payload,
      };
    case authConstants.LOGOUT_SUCCESSFULLY:
      return {
        token: null,
        user: null,
        loading: false,
        success: false,
        error: null,
        isSignup: false,
      };

      case authConstants.RESET_AUTH_STATE:
      return {
        ...state,
        loading: false,
        success: false,
        error: null,
        isSignup: false,
      };
    case authConstants.ERROR:
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
  