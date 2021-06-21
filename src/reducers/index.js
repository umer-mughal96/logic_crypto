import { combineReducers } from "redux";
import { Auth } from "./auth";
import { Exchange } from "./exchange";
import { Stripe } from "./stripe";
import { User } from "./user";

export default combineReducers({
  Auth,
  Exchange,
  Stripe,
  User
});
