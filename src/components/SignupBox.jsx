// *** SignBox.js ***

import React from 'react';
import styled from 'styled-components';
import { Grid, Input, Button } from '../elements';
import { actionCreators as userActions } from '../redux/modules/user';
import logo from '../logo.png';
import { useDispatch } from 'react-redux';
import { isEmail } from '../shared/examine';
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import { history } from '../redux/configureStore';

const SignBox = props => {
  const dispatch = useDispatch();
  const emailRef = React.useRef('');
  const nameRef = React.useRef('');
  const nicknameRef = React.useRef('');
  const pwRef = React.useRef('');
  const [Span, setSpan] = React.useState(false);
  const [succeed, setSucceed] = React.useState(false);
  const [answer, setAnswer] = React.useState(true);

  const ClickEvent = () => {
    const email = emailRef.current.value;
    const name = nameRef.current.value;
    const nickname = nicknameRef.current.value;
    const pw = pwRef.current.value;
    if (isEmail(email)) {
      if (email !== '' && name !== '' && nickname !== '' && pw !== '') {
        const userInfo = {
          email: emailRef.current.value,
          name: nameRef.current.value,
          nickname: nicknameRef.current.value,
          pw: pwRef.current.value,
        };
        localStorage.setItem('userInfo', JSON.stringify(userInfo));
        // dispatch(userActions.signUpPostDB(userInfo));
        setSpan(true);
      } else {
        setSucceed(true);
      }
    } else {
      setSpan(false);
    }
  };
  const OnChange = () => {
    const email = emailRef.current.value;
    const name = nameRef.current.value;
    const nickname = nicknameRef.current.value;
    const pw = pwRef.current.value;
    setAnswer(false);

    if (isEmail(email)) {
      setSpan(true);
      if (email !== '' && name !== '' && nickname !== '' && pw !== '') {
        setSucceed(true);
      }
    }
  };
  const ClickMove = () => {
    history.push('/signin');
  };
  return (
    <Grid width="375px">
      <Grid bg="#fff" border="1px solid #DBDBDB">
        <Grid center="center" padding="34px 42px 0px">
          <Logo src={logo} />
        </Grid>
        <SubTi>친구들의 사진과 동영상을 보려면 가입하세요</SubTi>
        <Grid is_flex padding="34px 42px" column="column" gap="10px">
          <InputBox>
            <Input
              _ref={emailRef}
              placeholder="이메일 주소"
              width="100%"
              margin="0px"
              _onChange={OnChange}
            ></Input>
            {answer ? (
              ''
            ) : Span ? (
              <Dot className="green">
                <CheckCircleOutlinedIcon />
              </Dot>
            ) : (
              <Dot className="red">
                <CancelOutlinedIcon />
              </Dot>
            )}
            {answer ? (
              ''
            ) : Span ? (
              ''
            ) : (
              <SpanTxt>이메일 형식에 맞지 않습니다.</SpanTxt>
            )}
          </InputBox>
          <Input
            _ref={nameRef}
            placeholder="성명"
            width="100%"
            margin="0px"
            _onChange={OnChange}
          ></Input>
          <Input
            _ref={nicknameRef}
            placeholder="사용자 이름"
            width="100%"
            margin="0px"
            _onChange={OnChange}
          ></Input>
          <Input
            _ref={pwRef}
            placeholder="비밀번호"
            width="100%"
            margin="0px"
            type="password"
            _onChange={OnChange}
          ></Input>
          <Button
            margin="10px 0px 0px"
            className={succeed === false ? 'unActiveBtn' : ''}
            _onClick={ClickEvent}
          >
            가입
          </Button>
          {answer ? (
            ''
          ) : succeed ? (
            ''
          ) : (
            <SpanTxt>정보를 다 입력하지 않았습니다.</SpanTxt>
          )}
        </Grid>
      </Grid>
      <Button
        border="1px solid #DBDBDB"
        margin="10px 0px 0px"
        padding="24px 42px"
        bg="#fff"
        color="#000"
        _onClick={ClickMove}
      >
        계정이 있으신가요?{' '}
        <span style={{ color: '#0095F6', fontWeight: 'bold' }}>로그인</span>
      </Button>
    </Grid>
  );
};

const Logo = styled.img`
  width: 177px;
  height: 23%;
  cursor: pointer;
`;
const Dot = styled.div`
  border-radius: 100%;
  position: absolute;
  right: 10px;
  top: 7px;
  text-align: center;
  box-sizing: border-box;
  &.red {
    color: red;
  }
  &.green {
    color: green;
  }
`;
const SpanTxt = styled.p`
  color: red;
  font-size: 12px;
  line-height: 30px;
  padding-left: 10px;
`;
const InputBox = styled.div`
  position: relative;
  width: 100%;
`;
const SubTi = styled.p`
  text-align: center;
  color: #969696;
`;

export default SignBox;
