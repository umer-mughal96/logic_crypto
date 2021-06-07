import axios from "axios";

export const registerUser = (data) => {
  return axios.post("/logiccrypto/api/v1/auth/register", data);
};

export const signInUser = (data) => {
  return axios.post("/logiccrypto/api/v1/auth/signin", data);
};

export const forgotPassword = (data) => {
  return axios.post("/logiccrypto/api/v1/auth/forgotpassword", data);
};

export const resetPassword = (data) => {
  return axios.patch("/logiccrypto/api/v1/auth/verify", data);
};
