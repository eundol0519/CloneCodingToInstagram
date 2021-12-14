// *** SignIn.jsx ***

import React from 'react';
import styled from 'styled-components';
import signin_img from '../images/signin_img.png';
import { Grid } from '../elements';
import SignupBox from '../components/SignupBox';
const SignIn = props => {
  return (
    <SenterWep>
      <Grid is_flex justifyContent gap="30px" width="auto">
        <SignupBox />
      </Grid>
    </SenterWep>
  );
};
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
