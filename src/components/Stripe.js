import React from "react";
import {
  CardElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { errorNotification } from "../utils/notification";
import { useDispatch, useSelector } from "react-redux";
import { payToStripe } from "../actions/stripe/stripe";

const Stripe = () => {
  const stripe = useStripe();
  const elements = useElements();
  const dispatch = useDispatch();
  const {planPrice} = useSelector(state => state.Stripe)
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }
    const cardElement = elements.getElement(CardElement);
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });

    if (error) {
      console.log("[error]", error);
      errorNotification(error.message);
    } else {
      let data = {
        id : paymentMethod.id,
        price : planPrice
        
      }
      dispatch(payToStripe(data))
    }
  };
  return (
    <div>
      <CardElement
        className="payment-form"
        options={{
          hidePostalCode: true,
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      <button type="submit" disabled={!stripe} onClick={(e) => handleSubmit(e)}>
        Complete Payment
      </button>
    </div>
  );
};

export default Stripe;
