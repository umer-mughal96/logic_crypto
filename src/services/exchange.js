import axios from "axios";

export const connectingExchange = (data) => {
  return axios.post("/exchange/connect", data);
};

export const getExchanges = () => {
  return axios.get("/exchange/get/exchanges");
};


export const deleteExchange = (data) => {
  return axios.post("/exchange/delete",data);
};
