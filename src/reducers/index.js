import { combineReducers } from "redux";
import { Auth } from "./auth";
import { Exchange } from "./exchange";

export default combineReducers({
  Auth,
  Exchange
});
