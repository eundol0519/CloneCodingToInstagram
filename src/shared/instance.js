import axios from "axios";
import { getToken } from "./token";

// const USER_TOKEN = `Bearer ${getToken("authorization")}`;
const USER_TOKEN = "Bearer " + getToken("authorization");
console.log(USER_TOKEN);
const instance = axios.create({
  timeout: 1000,
  baseURL: "http://13.125.45.147",
  headers: {
    "Content-Type": "application/json; charset=utf-8",
    "X-Requested-With": "XMLHttpRequest",
    authorization: USER_TOKEN,
    Accept: "application/json",
  },
});

instance.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    console.log(error);
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  response => {
    const res = response;
    return res;
  },
  error => {
    console.log(error);
    return Promise.reject(error);
  }
);

export default instance;
