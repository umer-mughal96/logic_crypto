import axios from "axios";

export const registerUser = (data) => {
  return axios.post("/auth/register", data);
};

export const signInUser = (data) => {
  return axios.post("/auth/signin", data);
};
