// import React, { useEffect, useState } from "react";
// import {
//   CardElement,
//   Elements,
//   useElements,
//   useStripe,
// } from "@stripe/react-stripe-js";
// import { useDispatch, useSelector } from "react-redux";
// import { atechyPayment, stripePayment } from "../actions/form";
// import { withRouter } from "react-router";



// const handleSubmit = async (event, pageType) => {
//     // Block native form submission.
//     event.preventDefault();

//     if (!stripe || !elements) {
//       // Stripe.js has not loaded yet. Make sure to disable
//       // form submission until Stripe.js has loaded.
//       return;
//     }

//     // Get a reference to a mounted CardElement. Elements knows how
//     // to find your CardElement because there can only ever be one of
//     // each type of element.
//     const cardElement = elements.getElement(CardElement);
//     setloader(true);
//     // Use your card Element with other Stripe.js APIs
//     const { error, paymentMethod } = await stripe.createPaymentMethod({
//       type: "card",
//       card: cardElement,
//     });

//     if (error) {
//       console.log("[error]", error);
//       setloader(false);
//     } else if (pageType == "myFlight") {
//       const { id } = paymentMethod;
//       const data = {
//         id,
//         totalPrice,
//       };
//     } else {
//       const { id } = paymentMethod;
//       let data = {
//         id,
//       };
      
//       //Atechy COde
//     }
//   };



// const Stripe = () => {
//   return (
//     <div>
//       <CardElement
//         className="payment-form"
//         options={{
//           hidePostalCode: true,
//           style: {
//             base: {
//               fontSize: "16px",
//               color: "#424770",
//               "::placeholder": {
//                 color: "#aab7c4",
//               },
//             },
//             invalid: {
//               color: "#9e2146",
//             },
//           },
//         }}
//       />
//       <button
//         className="Atechypay"
//         type="submit"
//         disabled={!stripe}
//         onClick={(e) => handleSubmit(e, pageType)}
//       >
//         Atechy Complete Payment
//       </button>
//       ;
//     </div>
//   );
// };

// export default Stripe;
