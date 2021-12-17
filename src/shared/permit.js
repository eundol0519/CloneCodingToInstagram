import { getToken } from "./token";

export const isLogin = () => getToken("authorization");
