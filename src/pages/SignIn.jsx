// *** SignIn.jsx ***

import React from "react";
import styled from "styled-components";
import signin_img from "../images/signin_img.png";
import { Grid } from "../elements";
import SignBox from "../components/SignBox";
const SignIn = props => {
  return (
    <SenterWep>
      <Grid is_flex justifyContent gap="30px" width="auto">
        <LoginImg src={signin_img} />
        <SignBox />
      </Grid>
    </SenterWep>
  );
};
const LoginImg = styled.img`
  display: block;
  @media (max-width: 935px) {
    display: none;
  }
`;
const SenterWep = styled.div`
  width: auto;
  height: atuo;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;
const Logo = styled.img`
  width: 150px;
  height: 23%;
  cursor: pointer;
`;
export default SignIn;
