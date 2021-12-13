// *** SignIn.jsx ***

import React from 'react';
import signin_img from '../images/signin_img.png';
import { Grid } from '../elements';

const SignIn = props => {
  return (
    <div>
      <img src={signin_img} alt="" />
      <Grid width="375px">로그인 페이지</Grid>
    </div>
  );
};

export default SignIn;
