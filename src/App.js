import { Fragment, useEffect } from "react";
import axios from "axios";
import Routes from "./utils/routes";
import { BrowserRouter as Router } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setAuthToken } from "./utils/setAuthToken";
import { io } from "socket.io-client";
import { accountDeactivated } from "./actions/auth/auth";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { getUserExchanges } from "./actions/exchange/exchange";

const App = () => {
  const dispatch = useDispatch();
  const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_API_KEY);
  const { user } = useSelector(s => s.Auth)

  useEffect(() => {
    if (user) {
      const socket = io(process.env.REACT_APP_BACKEND_SERVER);
      socket.on("userConnected", (dataFromServer) => {
        socket.emit("userInfo", { data: user });
        socket.on("deactivate", (data) => {
          dispatch(accountDeactivated());
        });
      });
    }
  }, [user]);

  useEffect(() => {
    if (user) {

      dispatch(getUserExchanges());
    }
  }, [user]);

  axios.defaults.baseURL = process.env.REACT_APP_BACKEND_SERVER;
  const { token } = useSelector((state) => state.Auth);
  setAuthToken(token);
  return (
    <Elements stripe={stripePromise}>
      <Fragment>
        <Router>
          <Routes />
        </Router>
      </Fragment>
    </Elements>
  );
};

export default App;
