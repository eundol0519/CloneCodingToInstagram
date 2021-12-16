import axios from 'axios';
import { getToken } from './token';

const USER_TOKEN = `Bearer ${getToken('authorization')}`;

const instanceMulti = axios.create({
  timeout: 1000,
  baseURL: 'http://13.125.45.147',
  headers: {
    'content-type': 'multipart/form-data',
    Accept: 'application/json',
    authorization: USER_TOKEN,
  }, //폼데이터
});

instanceMulti.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    console.log(error);
    return Promise.reject(error);
  }
);

instanceMulti.interceptors.response.use(
  response => {
    const res = response;
    return res;
  },
  error => {
    console.log(error);
    return Promise.reject(error);
  }
);

export default instanceMulti;
