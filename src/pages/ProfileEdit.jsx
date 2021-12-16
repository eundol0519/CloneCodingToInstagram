// *** ProfileEdit.jsx ***

import React from 'react';
import { Grid, Input, Button, Image, Text } from '../elements/';
import styled from 'styled-components';
import { actionCreators as userActions } from '../redux/modules/user';
import { useDispatch } from 'react-redux';
import apis from '../shared/apis';
import {
  isNameCheck,
  isNickNameCheck,
  isPhoneNumber,
  isIntro,
} from '../shared/examine';

const ProfileEdit = props => {
  const dispatch = useDispatch();
  const userInfo = JSON.parse(localStorage.getItem('userInfo'));

  const [succeed, setSucceed] = React.useState(false);
  const [preview, setPreview] = React.useState(userInfo.imageUrl_profile);
  const [NameCheck, setNameCheck] = React.useState({});
  const [NickCheck, setNickCheck] = React.useState({});
  const [IntroCheck, setIntroCheck] = React.useState({});
  const [PhoneCheck, setPhoneCheck] = React.useState({});

  const [editName, seteditName] = React.useState(userInfo.userName);
  const [editnickName, seteditnickName] = React.useState(userInfo.nickname);
  const [introduction, setintroduction] = React.useState(userInfo.introduce);
  const [phone_num, setphone_num] = React.useState(userInfo.phoneNumber);

  const CheckInputData = (SETSTATE, Checkfuc, Value) => {
    if (Value !== '') {
      SETSTATE({ check: true });
      if (Checkfuc(Value).boo) {
        SETSTATE(Checkfuc(Value));
      } else {
        SETSTATE(Checkfuc(Value));
      }
    }
  };

  const OnChange = e => {
    if (
      isNameCheck(editName).boo &&
      isNickNameCheck(editnickName).boo &&
      isIntro(introduction).boo &&
      isPhoneNumber(phone_num).boo
    ) {
      return setSucceed(true);
    } else {
      return setSucceed(false);
    }
  };

  const NameCheckEvent = e => {
    seteditName(e.target.value);
    CheckInputData(setNameCheck, isNameCheck, editName);
    OnChange();
  };
  const NickCheckEvent = e => {
    seteditnickName(e.target.value);
    CheckInputData(setNickCheck, isNickNameCheck, editnickName);
    OnChange();
  };
  const IntroCheckEvent = e => {
    setintroduction(e.target.value);
    CheckInputData(setIntroCheck, isIntro, introduction);
    OnChange();
  };
  const PhoneCheckEvent = e => {
    setphone_num(e.target.value);
    CheckInputData(setPhoneCheck, isPhoneNumber, phone_num);
    OnChange();
  };

  const ClickEvent = () => {
    if (
      isNameCheck(editName).boo &&
      isNickNameCheck(editnickName).boo &&
      isIntro(introduction).boo &&
      isPhoneNumber(phone_num).boo
    ) {
      const userInfoNew = {
        ...userInfo,
        userName: editName,
        nickname: editnickName,
        introduce: introduction,
        phoneNumber: phone_num,
      };
      console.log(String(userInfo.userId), userInfoNew);
      dispatch(
        userActions.ProfileModification(String(userInfo.userId), userInfoNew)
      );
    }
  };

  const selectFile = async e => {
    const imgfile = e.target.files[0];
    const formData = new FormData();
    //formData에 file이라는 이름으로 files에 저장된 이미지을 집어 넣는다.
    formData.append('file', imgfile);
    // 이미지 백엔드 서버 전송
    console.log(imgfile);
    const response = await apis.uploadMyImage(formData);

    if (response.data.status === 201) {
      alert('프로필 이미지가 변경 되었습니다.');
      setPreview(`http://3.37.36.119${response.data.url}`);
    } else {
      alert('프로필 이미지가 변경 되지 않았습니다.');
    }
  };

  return (
    <React.Fragment>
      <Grid
        padding="40px 200px 40px 110px"
        bg="#fff"
        margin="40px 0 0"
        border="solid rgba(188,191,187,0.93) 1px"
        Reaction
      >
        <Grid is_flex column="column" gap="35px">
          <Grid is_flex padding="0px 0px 0px 10%" gap="3%">
            <div>
              <Image src={preview} shape="circle" size="45"></Image>
            </div>
            <Grid is_flex column="column" baseline gap="10px">
              <Text bold size="18px">
                mong_c_young2
              </Text>
              <TextBtn>
                <InvisibleFileUpbtn
                  type="file"
                  encType="multipart/form-data"
                  onChange={selectFile}
                ></InvisibleFileUpbtn>
                프로필 사진 바꾸기
              </TextBtn>
            </Grid>
          </Grid>
          <Grid is_flex baseline>
            <LabelTxt>이름</LabelTxt>
            <Grid>
              <Input
                name="editName"
                width="100%"
                ti_margin="0px 6% 0px auto"
                size="16px"
                bg="#fff"
                margin="0px"
                placeholder="이름"
                value={editName}
                _onChange={NameCheckEvent}
              ></Input>
              <InputInfo>
                사람들이 이름, 별명 또는 비즈니스 이름 등 회원님의 알려진 이름을
                사용하여 회원님의 계정을 찾을 수 있도록 도와주세요. 이름은 14일
                안에 두 번만 변경할 수 있습니다.
              </InputInfo>
              <SpanTxt className={NameCheck.boo ? 'green' : 'red'}>
                {NameCheck.comment}
              </SpanTxt>
            </Grid>
          </Grid>
          <Grid is_flex baseline>
            <LabelTxt>사용자 이름</LabelTxt>
            <Grid>
              <Input
                name="editnickName"
                width="100%"
                ti_margin="0px 6% 0px auto"
                size="16px"
                bg="#fff"
                margin="0px"
                placeholder="사용자 이름 "
                value={editnickName}
                _onChange={NickCheckEvent}
              ></Input>
              <InputInfo>
                대부분의 경우 14일 이내에 사용자 이름을 다시 {userInfo.nickname}
                (으)로 변경할 수 있습니다. 더 알아보기
              </InputInfo>
              <SpanTxt className={NickCheck.boo ? 'green' : 'red'}>
                {NickCheck.comment}
              </SpanTxt>
            </Grid>
          </Grid>
          <Grid is_flex baseline>
            <LabelTxt>소개</LabelTxt>
            <Grid>
              <Input
                multiLine
                name="introduction"
                width="100%"
                ti_margin="0px 6% 0px auto"
                size="16px"
                bg="#fff"
                padding="10px"
                height="100px"
                margin="0px"
                border="solid rgba(188,191,187,0.93) 1px"
                placeholder="소개"
                value={introduction}
                _onChange={IntroCheckEvent}
              ></Input>
              <InputInfo>
                개인정보 비즈니스나 반려동물 등에 사용된 계정인 경우에도
                회원님의 개인정보를 입력하세요. 공개 프로필에는 포함되지
                않습니다
              </InputInfo>
              <SpanTxt className={IntroCheck.boo ? 'green' : 'red'}>
                {IntroCheck.comment}
              </SpanTxt>
            </Grid>
          </Grid>
          <Grid is_flex justifyContent>
            <LabelTxt>전화번호</LabelTxt>
            <Grid>
              <Input
                name="phone_num"
                width="100%"
                ti_margin="0px 6% 0px auto"
                size="16px"
                bg="#fff"
                type="number"
                padding="10px"
                height="100px"
                margin="0px"
                placeholder="전화번호"
                value={phone_num}
                _onChange={PhoneCheckEvent}
              ></Input>
              <SpanTxt className={PhoneCheck.boo ? 'green' : 'red'}>
                {PhoneCheck.comment}
              </SpanTxt>
            </Grid>
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
  margin-top: 10px;
  font-weight: 600;
`;
const TextBtn = styled.p`
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  color: #0095f6;
  position: relative;
`;
const LabelTxt = styled.p`
  width: 20%;
  text-align: right;
  padding-right: 4%;
  font-weight: bold;
`;
const InvisibleFileUpbtn = styled.input`
  position: absolute;
  width: 100%;
  height: 100%;
  margin: 0px;
  overflow: hidden;
  padding: 0;
  opacity: 0;
  cursor: pointer;
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

export default ProfileEdit;
