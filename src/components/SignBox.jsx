// *** SignBox.js ***

import React from "react";
import styled from "styled-components";
import { Grid, Input, Button } from "../elements/";
import logo from "../logo.png";
import { actionCreators as userActions } from "../redux/modules/user";
import { history } from "../redux/configureStore";
import { useDispatch } from "react-redux";
import { isEmail } from "../shared/examine";
const SignBox = props => {
  const dispatch = useDispatch();
  const [succeed, setSucceed] = React.useState(false);
  const [noneDate, setnoneDate] = React.useState(false);
  const [State, setState] = React.useState({
    IdState: "",
    PwState: "",
  });

  const { IdState, PwState } = State;
  const ClickEvent = () => {
    history.push("/in/signUp");
  };
  const LoginClickEvent = () => {
    if (isEmail(IdState)) {
      const user_info = {
        userEmail: IdState,
        password: PwState,
      };
      dispatch(userActions.signInGetDB(user_info));
      setnoneDate(false);
    } else {
      setnoneDate(true);
    }
  };
  const OnChanges = e => {
    console.log(e.target.value);
    setState({
      ...State,
      [e.target.name]: e.target.value,
    });
    if (isEmail(IdState)) {
      setSucceed(true);
    }
  };
  return (
    <Grid width="375px">
      <Grid bg="#fff" border="1px solid #DBDBDB">
        <Grid center="center" padding="34px 42px 0px">
          <Logo src={logo} />
        </Grid>
        <Grid is_flex padding="34px 42px" column="column" gap="10px">
          <Input
            placeholder="이메일"
            width="100%"
            name="IdState"
            value={IdState}
            _onChange={OnChanges}
          ></Input>
          <Input
            placeholder="비밀번호"
            width="100%"
            name="PwState"
            type="password"
            value={PwState}
            _onChange={OnChanges}
          ></Input>
          <Button
            margin="10px 0px 0px"
            className={succeed === false ? "unActiveBtn" : ""}
            _onClick={LoginClickEvent}
          >
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
        계정이 없으신가요?{" "}
        <span style={{ color: "#0095F6", fontWeight: "bold" }}>가입하기</span>
      </Button>
      {noneDate ? <Warning>모든 입력해 주십시오</Warning> : ""}
    </Grid>
  );
};

const Logo = styled.img`
  width: 177px;
  height: 23%;
  cursor: pointer;
`;
const Warning = styled.p`
  line-height: 43px;
  font-size: 14px;
  text-align: center;
  color: red;
`;

export default SignBox;
