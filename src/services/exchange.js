import axios from "axios";

export const connectingExchange = (data) => {
  return axios.post("/logiccrypto/api/v1/exchange/connect", data);
};

export const getExchanges = () => {
  return axios.get("/logiccrypto/api/v1/exchange/get/exchanges");
};


export const deleteExchange = (data) => {
  return axios.post("/logiccrypto/api/v1/exchange/delete",data);
};
