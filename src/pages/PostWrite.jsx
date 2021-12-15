// *** PostWrtie.jsx ***

import React from 'react';
import Modal from 'react-modal';
import apis from '../shared/apis';
import { Grid, Text, Image, Button, Input } from '../elements/index';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
//import { actionCreators as postActions } from '../redux/modules/post';
import { Container } from '../elements';

const PostWrtie = props => {
  const dispatch = useDispatch();
  const [modal, setModal] = React.useState(props.modal ? true : false); // 모달창
  const [active, setActive] = React.useState(true); // 버튼 활성화 유무
  const [content, setContent] = React.useState(''); // 글 내용 작성

  // 모달창을 닫으면 header state도 false로 바꾸기
  const modalOff = () => {
    setModal(false);
    props.setPostWriteModal(false);
  };

  // 글 내용
  const changeContent = e => {
    console.log(e.target.value);
    setContent(e.target.value);
  };

  // 이미지 업로드
  const fileInput = React.useRef();
  const [files, setFiles] = React.useState('');
  const [imgFile, setImgFile] = React.useState('');
  const [preview, setPreview] = React.useState('');

  const selectFile = e => {
    console.log(e.target.files[0]); //파일 선택했을때 파일 값 둘이 같아야함
    console.log(fileInput.current.files[0]); //ref값으로 가져와 지는지
    setFiles(e.target.files[0]);

    upload();
  };

  const upload = async () => {
    const state = true;

    if (state) {
      setImgFile('https://i.ytimg.com/vi/Ct1Pp_4FEIY/maxresdefault.jpg');
      setPreview('https://i.ytimg.com/vi/Ct1Pp_4FEIY/maxresdefault.jpg');

      checkActive(); // 글, 이미지 모두 삽입 되었는 지 확인
    } else {
      setImgFile(
        'https://img.insight.co.kr/static/2021/01/10/700/img_20210110130830_kue82l80.webp'
      );
      setPreview(
        'https://img.insight.co.kr/static/2021/01/10/700/img_20210110130830_kue82l80.webp'
      );
    }

    const formData = new FormData();
    formData.append('file', files);

    const response = await apis.uploadPostImage(formData);

    if (response.data.status === 201) {
      window.alert('사진이 업로드 되었습니다.');
      setImgFile(response.data.url); // 서버에서 받아온 이미지 url
      setPreview(`http://3.37.36.119${response.data.url}`); // 이미지 url 변수에 저장
      checkActive(); // 글, 이미지 모두 삽입 되었는 지 확인
    } else {
      window.alert('파일을 업로드 하지 못했습니다.');
      setImgFile('');
      setPreview('');
    }
  };

  // 버튼 활성화 / 비활성화 유무 확인
  const checkActive = () => {
    if (imgFile === '') {
      console.log('이미지 없다.');
      setActive(true);
    } else if (content === '') {
      console.log('글 내용 없다.');
      setActive(true);
    } else {
      setActive(false);
    }
  };

  // 게시글 작성
  const write = () => {
    // postActions.PostWriteFB(content, imgFile);
  };

  return (
    <React.Fragment>
      <Modal
        isOpen={modal}
        ariaHideApp={false}
        onRequestClose={modalOff}
        style={{
          overlay: {
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(15, 15, 15, 0.79)',
          },
          content: {
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: '50%',
            height: '60%',
            // width: '60%',
            border: 'none',
            background: 'rgb(255, 255, 255)',
            overflow: 'auto',
            borderRadius: '5px',
            outline: 'none',
            padding: '20px 0px',
            transform: 'translate(-50%, -50%)',
          },
        }}
      >
        <Container>
          {/* ---------------------게시물 작성하기 text 부분--------------------- */}
          <Grid
            width="100%"
            center
            borderBottom="solid rgba(188, 191, 187, 0.93) 1px"
          >
            <Text lineHeight="10px" bold>
              게시물 작성하기
            </Text>
          </Grid>
          {/* ---------------------이미지 업로드 부분--------------------- */}
          <Grid is_flex>
            <Grid width="70%">
              <Grid center margin="-6% 0px 0px 0px">
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
                      src="https://lh3.googleusercontent.com/proxy/eN7kqAaYEdN961JDil-W2VAIs0C9ly0deQQg2l2aFqNwECL08FoT4ltpSGQJpILDP_AhPFoKBQyN0l-rU3mlTEYE"
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
                  onChange={selectFile}
                  ref={fileInput}
                  margin="5% 0px 0px 0px"
                ></FileInput>
                <FileBtn
                  onClick={upload}
                  className={imgFile !== '' ? 'activeBtn' : 'unActiveBtn'}
                >
                  업로드
                </FileBtn>
              </Grid>
            </Grid>
            {/* ---------------------게시물 내용 작성하는 부분--------------------- */}
            <Grid width="30%">
              <Grid is_flex justifyContent>
                <Image shape="circle"></Image>
                <Text bold>eundol</Text>
              </Grid>
              <Grid>
                <Input
                  rows="15"
                  width="100%"
                  wrap="on"
                  value={content}
                  _onChange={changeContent}
                  _onKeyUp={checkActive}
                  multiLine
                  border="none"
                  placeholder="문구 입력..."
                ></Input>
                <FileBtn
                  style={{
                    width: '55%',
                    height: '28px',
                    padding: '2x',
                  }}
                  className={!active ? 'activeBtn' : 'unActiveBtn'}
                  disabled={active}
                  onClick={write}
                >
                  작성하기
                </FileBtn>
              </Grid>
            </Grid>
            {/* ----------------------------------------------- */}
          </Grid>
        </Container>
      </Modal>
    </React.Fragment>
  );
};

const FileBtn = styled.button`
  display: inline-block;
  width: 28%;
  height: 27px;
  background-color: ${props =>
    props.className === 'unActiveBtn' ? '#B2DFFC' : '#0095f6'};
  border-color : ${props =>
    props.className === 'unActiveBtn' ? '#B2DFFC' : '#0095f6'};
  color: #ffffff;
  line-height: 45px;
  border-radius: 3px;
  text-align: center;
  line-height: 27px;
  font-size: 14px;
  margin-top: 3%;
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
