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

  const [inputs, setInputs] = React.useState({
    signEmail: '',
    signName: '',
    signNickName: '',
    signPw: '',
  });
  const [boo, setBoo] = React.useState({
    succeed: false,
    answer: true,
    Span: {
      check: false,
      boo: false,
      comment: '이메일 형식에 맞지 않습니다.',
    },
    namecheck: {
      check: false,
      boo: false,
      comment: '이름이 형식에 맞지 않습니다.',
    },
    nicknamecheck: {
      check: false,
      boo: false,
      comment: '닉네임이 형식에 맞지 않습니다.',
    },
    pwcheck: {
      check: false,
      boo: false,
      comment: '비밀번호가 형식에 맞지 않습니다.',
    },
  });

  const { signEmail, signName, signNickName, signPw } = inputs;
  const { Span, succeed, answer, namecheck, nicknamecheck, pwcheck } = boo;

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
      localStorage.setItem('userInfo', JSON.stringify(userInfo));
      // dispatch(userActions.signUpPostDB(userInfo));
    } else {
      setBoo({ ...boo, succeed: true });
    }
  };
  const OnChange = e => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
    if (signEmail !== '') {
      setBoo({
        ...boo,
        Span: { check: true, ...Span },
      });
      if (isEmail(signEmail).boo) {
        setBoo({
          ...boo,
          Span: { check: true, boo: true, comment: '이메일 형식에 맞습니다.' },
        });
      } else {
        setBoo({
          ...boo,
          Span: {
            check: true,
            boo: false,
            comment: '이메일 형식에 맞지 않습니다.',
          },
        });
      }
    }
    if (signName !== '') {
      setBoo({
        ...boo,
        namecheck: { check: true, ...namecheck },
      });
      if (isNameCheck(signName).boo) {
        setBoo({
          ...boo,
          namecheck: {
            check: true,
            boo: true,
            comment: '이름 형식에 맞습니다.',
          },
        });
      } else {
        setBoo({
          ...boo,
          namecheck: {
            check: true,
            boo: false,
            comment: '이름 형식에 맞지 않습니다.',
          },
        });
      }
    }
    if (signNickName !== '') {
      setBoo({
        ...boo,
        nicknamecheck: { check: true, ...nicknamecheck },
      });
      if (isNickNameCheck(signNickName).boo) {
        setBoo({
          ...boo,
          nicknamecheck: {
            check: true,
            boo: true,
            comment: '닉네임 형식에 맞습니다.',
          },
        });
      } else {
        setBoo({
          ...boo,
          nicknamecheck: {
            check: true,
            boo: false,
            comment: '닉네임 형식에 맞지 않습니다.',
          },
        });
      }
    }
    if (signPw !== '') {
      setBoo({
        ...boo,
        pwcheck: { check: true, ...pwcheck },
      });
      if (isPwCheck(signPw).boo) {
        setBoo({
          ...boo,
          pwcheck: {
            check: true,
            boo: true,
            comment: '비밀번호 형식에 맞습니다.',
          },
        });
      } else {
        setBoo({
          ...boo,
          pwcheck: {
            check: true,
            boo: false,
            comment: '비밀번호 형식에 맞지 않습니다.',
          },
        });
      }
    }
    console.log(boo);
    if (
      isNickNameCheck(signNickName).boo &&
      isPwCheck(signPw).boo &&
      isNameCheck(signName).boo &&
      isEmail(signEmail).boo
    ) {
      return setBoo({ ...boo, succeed: true });
    }
  };
  const ClickMove = () => {
    history.push('/in/signin');
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
              _onChange={OnChange}
            ></Input>
            {Span.check ? (
              Span.boo ? (
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
            {Span.check ? (
              Span.boo ? (
                <SpanTxt className="green">{Span.comment}</SpanTxt>
              ) : (
                <SpanTxt className="red">{Span.comment}</SpanTxt>
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
              _onChange={OnChange}
            ></Input>
            {namecheck.check ? (
              namecheck.boo ? (
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
            {namecheck.check ? (
              namecheck.boo ? (
                <SpanTxt className="green">{namecheck.comment}</SpanTxt>
              ) : (
                <SpanTxt className="red">{namecheck.comment}</SpanTxt>
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
              _onChange={OnChange}
            ></Input>
            {nicknamecheck.check ? (
              nicknamecheck.boo ? (
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
            {nicknamecheck.check ? (
              nicknamecheck.boo ? (
                <SpanTxt className="green">{nicknamecheck.comment}</SpanTxt>
              ) : (
                <SpanTxt className="red">{nicknamecheck.comment}</SpanTxt>
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
              _onChange={OnChange}
            ></Input>
            {pwcheck.check ? (
              pwcheck.boo ? (
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
            {pwcheck.check ? (
              pwcheck.boo ? (
                <SpanTxt className="green">{pwcheck.comment}</SpanTxt>
              ) : (
                <SpanTxt className="red">{pwcheck.comment}</SpanTxt>
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
