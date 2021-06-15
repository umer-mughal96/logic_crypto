import * as stripteConstants from "../actions/stripe/constants";

const iniitialState = {
  stLoading: false,
  totalPrice : null,
  packagePlanName : null,
  planPrice : null,
  paySuccess : null
};

export const Stripe = (state = iniitialState, action) => {
  const { type, payload } = action;
  switch (action.type) {
    case stripteConstants.SET_STRIPE_LOADING:
      return {
        ...state,
        stLoading: true,
      };


      case stripteConstants.STRIPE_PAYMENT_DETAIL_SUCCESS : 
      return {
          ...state , 
          packagePlanName : payload.packageName,
          planPrice : payload.packagePrice
      }

      case stripteConstants.STRIPE_PAY_SUCCESS : 
      return {
          ...state , 
          paySuccess : payload
      }

      case stripteConstants.STRIPE_PAY_FAIL : 
      return {
          ...state , 
          stLoading : false
      }

    default:
      return state;
  }
};
