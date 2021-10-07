import axios from "axios";


export const exchangeAssets = (exchangeName) => {
  return axios.get(`/logiccrypto/api/v1/user/exchange/assets?name=${exchangeName}`);
};

