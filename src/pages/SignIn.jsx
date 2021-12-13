// *** SignIn.jsx ***

import React from 'react';
import styled from 'styled-components';
import signin_img from '../images/signin_img.png';
import { Grid } from '../elements';

const SignIn = props => {
  return (
    <Grid>
      <img src={signin_img} alt="" />
      <Grid width="375px">로그인 페이지</Grid>
    </Grid>
  );
};
const SenterWep = styled.div`
  width: 100%;
  height: atuo;
`;

export default SignIn;
