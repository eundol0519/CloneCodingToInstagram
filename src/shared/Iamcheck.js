import React from "react";

export default function Iamcheck(props) {
  const { userId, children } = props;
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  console.log(String(userId), String(userInfo.userId));

  return String(userId) === String(userInfo.userId) ? <> {children} </> : "";
}
