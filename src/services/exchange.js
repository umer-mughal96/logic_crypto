import axios from "axios";


export const connectingExchange = (data) => {
    return axios.post("/exchange/connect", data);
  };