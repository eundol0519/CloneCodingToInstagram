// *** SignBox.js ***

import React from 'react';
import styled from 'styled-components';
import { Grid, Input, Button } from '../elements/';
import logo from '../logo.png';
import { actionCreators as userActions } from '../redux/modules/user';
import { history } from '../redux/configureStore';
import { useDispatch } from 'react-redux';
const SignBox = props => {
  const dispatch = useDispatch();
  const idref = React.useRef('');
  const pwref = React.useRef('');
  const ClickEvent = () => {
    history.push('/signUp');
  };
  const LoginClickEvent = () => {
    dispatch(userActions.signInGetDB(idref.current.value, pwref.current.value));
  };
  return (
    <Grid width="375px">
      <Grid bg="#fff" border="1px solid #DBDBDB">
        <Grid center="center" padding="34px 42px 0px">
          <Logo src={logo} />
        </Grid>
        <Grid is_flex padding="34px 42px" column="column" gap="10px">
          <Input _ref={idref} placeholder="이메일"></Input>
          <Input _ref={pwref} placeholder="비밀번호"></Input>
          <Button margin="10px 0px 0px" _onClick={LoginClickEvent}>
            로그인
          </Button>
        </Grid>
      </Grid>
      <Button
        border="1px solid #DBDBDB"
        margin="10px 0px 0px"
        padding="24px 42px"
        bg="#fff"
        color="#000"
        _onClick={ClickEvent}
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
