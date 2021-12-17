import axios from "axios";
//import { getToken } from './token';

const instance = axios.create({
  baseURL: "http://13.125.45.147",
  withCredentials: true,
});

instance.interceptors.request.use(config => {
  const accessToken = document.cookie.split("=")[1];
  console.log(accessToken);
  config.headers["Content-Type"] = "application/json; charset=utf-8";
  config.headers["X-Requested-With"] = "XMLHttpRequest";
  config.headers["authorization"] = accessToken ? `Bearer ${accessToken}` : "";
  config.headers.Accept = "application/json";
  return config;
});

const apis = {
  //전체 게시글 조회 페이지
  getPost: () => instance.get("/api/posts"), // 전체 게시글 조회

  //다른 유저 페이지
  getMyPost: userId => instance.get(`/api/users/posts/${userId}`), // 다른 유저 페이지 리스트
};
export default apis;
