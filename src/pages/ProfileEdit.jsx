// *** ProfileEdit.jsx ***

import React from 'react';
import Header from '../components/Header';
import { Grid, Input, Button, Image, Text } from '../elements/';
import styled from 'styled-components';
const ProfileEdit = props => {
  const [inputs, setInputs] = React.useState({
    editName: '',
    editnickName: '',
    introduction: '',
  });
  const onChange = e => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  const { editName, editnickName, introduction } = inputs;

  const ClickEvent = () => {
    console.log(editName, editnickName, introduction);
  };
  return (
    <React.Fragment>
      <Header></Header>
      <Grid padding="40px 200px 40px 110px" bg="#fff" margin="40px 0 0">
        <Grid is_flex column="column" gap="20px">
          <Grid is_flex padding="0px 0px 0px 12%">
            <Image shape="circle" size="45"></Image>
            <Text margin="0px auto 0px 3%" bold size="18px">
              mong_c_young2
            </Text>
          </Grid>
          <Grid>
            <Input
              name="editName"
              label="이름"
              width="80%"
              margin="0px 3% 0px auto"
              size="16px"
              bg="#fff"
              placeholder="이름"
              value={editName}
              _onChange={onChange}
            ></Input>
            <InputInfo>
              사람들이 이름, 별명 또는 비즈니스 이름 등 회원님의 알려진 이름을
              사용하여 회원님의 계정을 찾을 수 있도록 도와주세요. 이름은 14일
              안에 두 번만 변경할 수 있습니다.
            </InputInfo>
          </Grid>
          <Grid>
            <Input
              name="editnickName"
              label="사용자 이름"
              width="80%"
              margin="0px 3% 0px auto"
              size="16px"
              bg="#fff"
              placeholder="사용자 이름 "
              value={editnickName}
              _onChange={onChange}
            ></Input>
            <InputInfo>
              대부분의 경우 14일 이내에 사용자 이름을 다시 mong_c_young2(으)로
              변경할 수 있습니다. 더 알아보기
            </InputInfo>
          </Grid>
          <Grid>
            <Input
              multiLine
              name="introduction"
              label="소개"
              width="80%"
              margin="0px 3% 0px auto"
              size="16px"
              bg="#fff"
              placeholder="소개"
              value={introduction}
              _onChange={onChange}
            ></Input>
            <InputInfo>
              개인정보 비즈니스나 반려동물 등에 사용된 계정인 경우에도 회원님의
              개인정보를 입력하세요. 공개 프로필에는 포함되지 않습니다
            </InputInfo>
          </Grid>

          <Button
            margin="10px auto 0px 20%"
            width="50px"
            size=""
            padding="5px"
            size="15px"
            className="unActiveBtn"
            _onClick={ClickEvent}
          >
            제출
          </Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};
const InputInfo = styled.p`
  font-size: 12px;
  line-height: 1.5;
  color: #9d9d9d;
  padding-left: 21%;
  margin-top: 10px;
  font-weight: 600;
`;

export default ProfileEdit;
