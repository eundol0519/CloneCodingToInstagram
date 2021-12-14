// *** ProfileEdit.jsx ***

import React from 'react';
import { Grid, Input, Button, Image, Text } from '../elements/';
import styled from 'styled-components';
import { actionCreators as userActions } from '../redux/modules/user';
import { useDispatch } from 'react-redux';
const ProfileEdit = props => {
  const dispatch = useDispatch();
  const userInfo = JSON.parse(localStorage.getItem('userInfo'));
  const [succeed, setSucceed] = React.useState(false);
  const [inputs, setInputs] = React.useState({
    editName: userInfo.name,
    editnickName: userInfo.nickname,
    introduction: userInfo.introduction,
    phone_num: userInfo.phone_num,
  });

  const onChange = e => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
    if (editName && editnickName && introduction) {
      setSucceed(true);
    } else {
      setSucceed(false);
    }
  };

  const { editName, editnickName, introduction, phone_num } = inputs;

  const ClickEvent = () => {
    console.log(editName, editnickName, introduction);
    const userInfoNew = {
      ...userInfo,
      name: editName,
      nickname: editnickName,
      introduction: introduction,
      phone_num: phone_num,
    };
    dispatch(userActions.ProfileModification(userInfoNew));
  };
  return (
    <React.Fragment>
      <Grid padding="40px 200px 40px 110px" bg="#fff" margin="40px 0 0">
        <Grid is_flex column="column" gap="35px">
          <Grid is_flex padding="0px 0px 0px 7%">
            <Image shape="circle" size="45"></Image>
            <Grid>
              <Text margin="0px auto 0px 6%" bold size="18px">
                mong_c_young2
              </Text>
              <TextBtn>프로필 사진 바꾸기</TextBtn>
            </Grid>
          </Grid>
          <Grid>
            <Input
              name="editName"
              label="이름"
              width="80%"
              ti_margin="0px 6% 0px auto"
              size="16px"
              bg="#fff"
              margin="0px"
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
              ti_margin="0px 6% 0px auto"
              size="16px"
              bg="#fff"
              margin="0px"
              placeholder="사용자 이름 "
              value={editnickName}
              _onChange={onChange}
            ></Input>
            <InputInfo>
              대부분의 경우 14일 이내에 사용자 이름을 다시 {userInfo.nickname}
              (으)로 변경할 수 있습니다. 더 알아보기
            </InputInfo>
          </Grid>
          <Grid>
            <Input
              multiLine
              name="introduction"
              label="소개"
              width="80%"
              ti_margin="0px 6% 0px auto"
              size="16px"
              bg="#fff"
              padding="10px"
              height="100px"
              margin="0px"
              placeholder="소개"
              value={introduction}
              _onChange={onChange}
            ></Input>
            <InputInfo>
              개인정보 비즈니스나 반려동물 등에 사용된 계정인 경우에도 회원님의
              개인정보를 입력하세요. 공개 프로필에는 포함되지 않습니다
            </InputInfo>
          </Grid>
          <Grid>
            <Input
              name="phone_num"
              label="전화번호"
              width="80%"
              ti_margin="0px 6% 0px auto"
              size="16px"
              bg="#fff"
              type="number"
              padding="10px"
              height="100px"
              margin="0px"
              placeholder="전화번호"
              value={phone_num}
              _onChange={onChange}
            ></Input>
          </Grid>

          <Button
            margin="10px auto 0px 20%"
            width="50px"
            size=""
            padding="5px"
            size="15px"
            className={succeed === false ? 'unActiveBtn' : ''}
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
const TextBtn = styled.p`
  margin: 5px auto 0px 6%;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  color: #0095f6;
`;
export default ProfileEdit;
