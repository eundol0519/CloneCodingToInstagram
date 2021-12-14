// *** SignBox.js ***

import React from 'react';
import styled from 'styled-components';
import { Grid, Input, Button } from '../elements/';
import { actionCreators as userActions } from '../redux/modules/user';
import logo from '../logo.png';
import { useDispatch } from 'react-redux';

const SignBox = props => {
  const dispatch = useDispatch();
  const emailRef = React.useRef('');
  const nameRef = React.useRef('');
  const nicknameRef = React.useRef('');
  const pwRef = React.useRef('');
  const ClickEvent = () => {
    const userInfo = {
      email: emailRef.current.value,
      name: nameRef.current.value,
      nickname: nicknameRef.current.value,
      pw: pwRef.current.value,
    };
    dispatch(userActions.signUpPostDB(userInfo));
  };
  return (
    <Grid width="375px">
      <Grid bg="#fff" border="1px solid #DBDBDB">
        <Grid center="center" padding="34px 42px 0px">
          <Logo src={logo} />
        </Grid>
        <SubTi>친구들의 사진과 동영상을 보려면 가입하세요</SubTi>
        <Grid is_flex padding="34px 42px" column="column" gap="10px">
          <Input _ref={emailRef} placeholder="이메일 주소"></Input>
          <Input _ref={nameRef} placeholder="성명"></Input>
          <Input _ref={nicknameRef} placeholder="사용자 이름"></Input>
          <Input _ref={pwRef} placeholder="비밀번호"></Input>
          <Button margin="10px 0px 0px" _onClick={ClickEvent}>
            가입
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

const Logo = styled.img`
  width: 177px;
  height: 23%;
  cursor: pointer;
`;
const SubTi = styled.p`
  text-align: center;
  color: #969696;
`;

export default SignBox;
