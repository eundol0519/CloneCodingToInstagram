// *** SignBox.js ***

import React from 'react';
import styled from 'styled-components';
import { Grid, Input, Button } from '../elements';
import { actionCreators as userActions } from '../redux/modules/user';
import logo from '../logo.png';
import { useDispatch } from 'react-redux';
import {
  isEmail,
  isNameCheck,
  isNickNameCheck,
  isPwCheck,
} from '../shared/examine';
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import { history } from '../redux/configureStore';

const SignBox = props => {
  const dispatch = useDispatch();

  const [signEmail, setsignEmail] = React.useState('');
  const [signName, setsignName] = React.useState('');
  const [signNickName, setsignNickName] = React.useState('');
  const [signPw, setsignPw] = React.useState('');
  const [Email, setEmail] = React.useState({});
  const [Namecheck, setNamecheck] = React.useState({});
  const [Nicknamecheck, setNicknamecheck] = React.useState({});
  const [Pwcheck, setPwcheck] = React.useState({});
  const [succeed, setsucceed] = React.useState(false);
  const [answer, setanswer] = React.useState(false);

  const ClickEvent = () => {
    if (
      isNickNameCheck(signNickName).boo &&
      isPwCheck(signPw).boo &&
      isNameCheck(signName).boo &&
      isEmail(signEmail).boo
    ) {
      const userInfo = {
        email: signEmail,
        name: signName,
        nickname: signNickName,
        pw: signPw,
      };
      // localStorage.setItem('userInfo', JSON.stringify(userInfo));
      dispatch(userActions.signUpPostDB(userInfo));
      setsucceed(true);
      setanswer(false);
    } else {
      setanswer(true);
    }
  };

  const CheckInputData = (SETSTATE, Checkfuc, Value) => {
    if (Value !== '') {
      SETSTATE({ check: true });
      console.log(Value);
      console.log(Checkfuc(Value));
      if (Checkfuc(Value).boo) {
        SETSTATE(Checkfuc(Value));
      } else {
        SETSTATE(Checkfuc(Value));
      }
    }
  };
  const OnChange = e => {
    if (
      isNickNameCheck(signNickName).boo &&
      isPwCheck(signPw).boo &&
      isNameCheck(signName).boo &&
      isEmail(signEmail).boo
    ) {
      return setsucceed(true);
    }
  };

  const EmailCheckfuc = e => {
    setsignEmail(e.target.value);
    CheckInputData(setEmail, isEmail, signEmail);
    OnChange();
  };
  const NameCheckfuc = e => {
    setsignName(e.target.value);
    CheckInputData(setNamecheck, isNameCheck, signName);
    OnChange();
  };
  const NickNameCheckfuc = e => {
    setsignNickName(e.target.value);
    CheckInputData(setNicknamecheck, isNickNameCheck, signNickName);
    OnChange();
  };
  const PwCheckfuc = e => {
    setsignPw(e.target.value);
    CheckInputData(setPwcheck, isPwCheck, signPw);
    OnChange();
  };

  const ClickMove = () => {
    history.push('/in/signIn');
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
              placeholder="이메일 주소"
              name="signEmail"
              value={signEmail}
              width="100%"
              margin="0px"
              _onChange={EmailCheckfuc}
            ></Input>
            {Email.check ? (
              Email.boo ? (
                <Dot className="green">
                  <CheckCircleOutlinedIcon />
                </Dot>
              ) : (
                <Dot className="red">
                  <CancelOutlinedIcon />
                </Dot>
              )
            ) : (
              ''
            )}
            {Email.check ? (
              Email.boo ? (
                <SpanTxt className="green">{Email.comment}</SpanTxt>
              ) : (
                <SpanTxt className="red">{Email.comment}</SpanTxt>
              )
            ) : (
              ''
            )}
          </InputBox>
          <InputBox>
            <Input
              placeholder="성명"
              width="100%"
              name="signName"
              value={signName}
              margin="0px"
              _onChange={NameCheckfuc}
            ></Input>
            {Namecheck.check ? (
              Namecheck.boo ? (
                <Dot className="green">
                  <CheckCircleOutlinedIcon />
                </Dot>
              ) : (
                <Dot className="red">
                  <CancelOutlinedIcon />
                </Dot>
              )
            ) : (
              ''
            )}
            {Namecheck.check ? (
              Namecheck.boo ? (
                <SpanTxt className="green">{Namecheck.comment}</SpanTxt>
              ) : (
                <SpanTxt className="red">{Namecheck.comment}</SpanTxt>
              )
            ) : (
              ''
            )}
          </InputBox>
          <InputBox>
            <Input
              placeholder="사용자 이름"
              width="100%"
              name="signNickName"
              value={signNickName}
              margin="0px"
              _onChange={NickNameCheckfuc}
            ></Input>
            {Nicknamecheck.check ? (
              Nicknamecheck.boo ? (
                <Dot className="green">
                  <CheckCircleOutlinedIcon />
                </Dot>
              ) : (
                <Dot className="red">
                  <CancelOutlinedIcon />
                </Dot>
              )
            ) : (
              ''
            )}
            {Nicknamecheck.check ? (
              Nicknamecheck.boo ? (
                <SpanTxt className="green">{Nicknamecheck.comment}</SpanTxt>
              ) : (
                <SpanTxt className="red">{Nicknamecheck.comment}</SpanTxt>
              )
            ) : (
              ''
            )}
          </InputBox>
          <InputBox>
            <Input
              placeholder="비밀번호"
              width="100%"
              name="signPw"
              value={signPw}
              margin="0px"
              type="password"
              _onChange={PwCheckfuc}
            ></Input>
            {Pwcheck.check ? (
              Pwcheck.boo ? (
                <Dot className="green">
                  <CheckCircleOutlinedIcon />
                </Dot>
              ) : (
                <Dot className="red">
                  <CancelOutlinedIcon />
                </Dot>
              )
            ) : (
              ''
            )}
            {Pwcheck.check ? (
              Pwcheck.boo ? (
                <SpanTxt className="green">{Pwcheck.comment}</SpanTxt>
              ) : (
                <SpanTxt className="red">{Pwcheck.comment}</SpanTxt>
              )
            ) : (
              ''
            )}
          </InputBox>

          <Button
            margin="10px 0px 0px"
            className={succeed === false ? 'unActiveBtn' : ''}
            _onClick={ClickEvent}
          >
            가입
          </Button>
          {answer ? (
            <SpanTxt className="red">정보를 다 입력하지 않았습니다.</SpanTxt>
          ) : (
            ''
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
  font-size: 12px;
  line-height: 30px;
  padding-left: 10px;
  &.red {
    color: red;
  }
  &.green {
    color: green;
  }
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
