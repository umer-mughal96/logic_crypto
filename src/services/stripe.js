import axios from "axios";




export const pay = (data) => {
  return axios.post("/logiccrypto/api/v1/user/pay", data);
};

