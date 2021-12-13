// *** SignBox.js ***

import React from 'react';
import styled from 'styled-components';
import { Grid, Input, Button } from '../elements/';
import logo from '../logo.png';
import { useHistory } from 'react-router-dom';

const SignBox = props => {
  const history = useHistory();
  return (
    <Grid width="375px">
      <Grid bg="#fff" border="1px solid #DBDBDB">
        <Grid center="center" padding="34px 42px 0px">
          <Logo src={logo} />
        </Grid>
        <Grid is_flex padding="34px 42px" column="column" gap="10px">
          <Input placeholder="이메일"></Input>
          <Input placeholder="비밀번호"></Input>
          <Button margin="10px 0px 0px">로그인</Button>
        </Grid>
      </Grid>
      <Button
        border="1px solid #DBDBDB"
        margin="10px 0px 0px"
        padding="24px 42px"
        bg="#fff"
        color="#000"
      >
        계정이 없으신가요?{' '}
        <span style={{ color: '#0095F6', fontWeight: 'bold' }}>가입하기</span>
      </Button>
    </Grid>
  );
};

const Logo = styled.img`
  width: 177px;
  height: 23%;
  cursor: pointer;
`;

export default SignBox;
