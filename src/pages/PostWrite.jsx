// *** PostWrtie.jsx ***

import React from "react";
import Modal from "react-modal";
import { Grid, Text, Image, Button, Input } from "../elements/index";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { actionCreators as postActions } from "../redux/modules/post";
import { uploadPostImageOn } from "../shared/api/post";

const PostWrtie = props => {
  const dispatch = useDispatch();
  const [modal, setModal] = React.useState(props.modal ? true : false); // 모달창
  const [active, setActive] = React.useState(true); // 버튼 활성화 유무
  const [content, setContent] = React.useState(""); // 글 내용 작성
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));

  // 모달창을 닫으면 header state도 false로 바꾸기
  const modalOff = () => {
    setModal(false);
    props.setPostWriteModal(false);
  };

  // 글 내용
  const changeContent = e => {
    setContent(e.target.value);
  };

  // 이미지 업로드
  const [imgFile, setImgFile] = React.useState("");
  const [preview, setPreview] = React.useState("");

  const upload = async e => {
    try {
      const files = e.target.files[0];
      const formData = new FormData();
      formData.append("img", files);

      const response = await uploadPostImageOn(formData);
      console.log(response.data.url);

      window.alert("사진이 업로드 되었습니다.");
      setImgFile(response.data.url); // 서버에서 받아온 이미지 url
      setPreview(`http://13.125.45.147/${response.data.url}`); // 이미지 url 변수에 저장
    } catch (error) {
      window.alert("사진 업로드에 실패 했습니다.");
      console.log(error);
    }
  };

  // 버튼 활성화 / 비활성화 유무 확인
  const checkActive = () => {
    if (imgFile === "") {
      console.log("이미지 없다.");
      setActive(true);
    } else if (content === "") {
      console.log("글 내용 없다.");
      setActive(true);
    } else {
      setActive(false);
    }
  };

  // 게시글 작성
  const write = () => {
    dispatch(postActions.PostWriteFB(content, imgFile));
    modalOff();
  };

  return (
    <React.Fragment>
      <Modal
        isOpen={modal}
        ariaHideApp={false}
        onRequestClose={modalOff}
        style={{
          overlay: {
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(15, 15, 15, 0.79)",
          },
          content: {
            position: "absolute",
            top: "13%",
            left: "13%",
            right: "13%",
            bottom: "13%",
            width: "60%",
            height: "70vh",
            border: "none",
            background: "#fff",
            overflow: "auto",
            WebkitOverflowScrolling: "touch",
            borderRadius: "3px",
            padding: "0px",
            margin: "auto",
          },
        }}
      >
        <Grid width="100%" height="10%" float="left" center>
          <Text bold margin="2% 0px 0px 0px">
            게시물 작성하기
          </Text>
        </Grid>
        <Grid width="60%" height="90%" float="left">
          <Grid height="90%">
            <label htmlFor="file">
              {preview ? (
                <Image
                  src={preview}
                  alt="게시물 사진"
                  shape="rectangle"
                  size="20"
                ></Image>
              ) : (
                <Image
                  src="https://image.freepik.com/free-vector/the-robot-can-not-find-your-page-error-page-404-not-found_138353-32.jpg"
                  alt="게시물 사진"
                  shape="rectangle"
                  size="20"
                ></Image>
              )}
            </label>
            <FileInput
              type="file"
              id="file"
              name="img"
              encType="multipart/form-data"
              onChange={upload}
              margin="5% 0px 0px 0px"
            ></FileInput>
          </Grid>
          {/* <Grid height="10%" center>
            <FileBtn
              onClick={upload}
              className={imgFile !== '' ? 'activeBtn' : 'unActiveBtn'}
            >
              업로드
            </FileBtn>
          </Grid> */}
        </Grid>
        <Grid width="40%" height="90%" float="left" is_fix>
          <Grid height="10%" is_flex jusifyContent>
            <Image
              padding="10px"
              shape="circle"
              src={userInfo.imageUrl_profile}
            ></Image>
            <Text width="85%" bold>
              {userInfo.nickname}
            </Text>
          </Grid>
          <Grid height="80%">
            <Input
              rows="20"
              width="100%"
              wrap="on"
              value={content}
              _onChange={changeContent}
              _onKeyUp={checkActive}
              multiLine
              border="none"
              placeholder="문구 입력..."
            ></Input>
          </Grid>
          <Grid height="10%" center>
            <FileBtn
              style={{
                width: "55%",
                height: "28px",
              }}
              className={!active ? "activeBtn" : "unActiveBtn"}
              disabled={active}
              onClick={write}
            >
              작성하기
            </FileBtn>
          </Grid>
        </Grid>
      </Modal>
    </React.Fragment>
  );
};

const FileBtn = styled.button`
  display: inline-block;
  width: 28%;
  height: 27px;
  background-color: ${props =>
    props.className === "unActiveBtn" ? "#B2DFFC" : "#0095f6"};
  border-color : ${props =>
    props.className === "unActiveBtn" ? "#B2DFFC" : "#0095f6"};
  color: #ffffff;
  line-height: 45px;
  border-radius: 3px;
  text-align: center;
  line-height: 27px;
  font-size: 14px;
}`;

const FileInput = styled.input`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  clip: rect(0, 0, 0, 0);
  /* 클립에 범위 만큼만 노출 시킴 */
  overflow: hidden;
  padding: 0;
}`;

export default PostWrtie;
