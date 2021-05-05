import axios from "axios";

export const registerUser = (data) => {
  return axios.post("/auth/register", data);
};

export const signInUser = (data) => {
  return axios.post("/auth/signin", data);
};

export const forgotPassword = (data) => {
  return axios.post("/auth/forgotpassword", data);
};

export const resetPassword = (data) => {
  return axios.patch("/auth/verify", data);
};
