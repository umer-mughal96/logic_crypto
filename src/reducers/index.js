import { combineReducers } from "redux";
import { Auth } from "./auth";
import { Exchange } from "./exchange";
import { Stripe } from "./stripe";
import { User } from "./user";
import { Balance } from "./balances";
import { Rules } from "./rules";

export default combineReducers({
  Auth,
  Exchange,
  Stripe,
  User,
  Balance,
  Rules
});
