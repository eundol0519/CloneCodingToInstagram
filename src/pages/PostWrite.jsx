// *** PostWrtie.jsx ***

import React from 'react';
import Modal from 'react-modal';
import axios from 'axios';
import { getToken } from '../shared/token';
import { Grid, Text, Image, Button, Input } from '../elements/index';
import styled from 'styled-components';

const PostWrtie = props => {
  const [modal, setModal] = React.useState(props.modal ? true : false); // 모달창
  const [active, setActive] = React.useState(true); // 버튼 활성화 유무
  const [contents, setContents] = React.useState(''); // 글 내용 작성

  // 모달창을 닫으면 header state도 false로 바꾸기
  const modalOff = () => {
    setModal(false);
    props.setPostWriteModal(false);
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

  const upload = () => {
    const state = true;

    if (state) {
      setImgFile('https://i.ytimg.com/vi/Ct1Pp_4FEIY/maxresdefault.jpg');
      setPreview('https://i.ytimg.com/vi/Ct1Pp_4FEIY/maxresdefault.jpg');
    } else {
      setImgFile(
        'https://img.insight.co.kr/static/2021/01/10/700/img_20210110130830_kue82l80.webp'
      );
      setPreview(
        'https://img.insight.co.kr/static/2021/01/10/700/img_20210110130830_kue82l80.webp'
      );
    }

    // const formData = new FormData();
    // formData.append('file', files);
    // axios({
    //   method: 'post',
    //   url: '/api/posts/images',
    //   data: formData,
    //   headers: {
    //     'Content-Type': 'multipart/form-data',
    //     Authorization: getToken(),
    //   },
    // })
    //   .then(response => {
    //     if (response.data.success) {
    //       window.alert('사진이 업로드 되었습니다.');
    //       setImgFile(response.data.url); // 서버에서 받아온 이미지 url
    //       setPreview(`http://3.37.36.119${response.data.url}`); // 이미지 url 변수에 저장
    //     } else {
    //       window.alert('파일을 업로드 하지 못했습니다.');
    //       setImgFile('');
    //       setPreview('');
    //     }
    //   })
    //   .catch(err => {
    //     window.alert('사진 업로드 실패');
    //   });
  };

  // 내용 onchange 함수
  const changeContents = e => {
    setContents(e.target.value);
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
            top: '10%',
            left: '23%',
            right: '23%',
            bottom: '10%',
            border: '1px solid #ccc',
            background: '#fff',
            overflow: 'auto',
            WebkitOverflowScrolling: 'touch',
            borderRadius: '5px',
            outline: 'none',
            padding: '20px 0px 20px 0px',
          },
        }}
      >
        <Grid width="100vw" borderBottom="solid rgba(188, 191, 187, 0.93) 1px">
          <Text margin="0px 0px 1% 25%" bold>
            게시물 작성하기
          </Text>
        </Grid>
        {/* ----------------------------------------------- */}
        <Grid is_flex is_fix>
          <Grid width="130vw" margin="4% 0px 0px 0px">
            <Grid margin="6% 10px 2% 10px"></Grid>
            <Grid>
              {preview ? (
                <Image
                  src={preview}
                  alt="게시물 사진"
                  shape="rectangle"
                  width="50%"
                ></Image>
              ) : (
                <Image
                  src="https://blog.kakaocdn.net/dn/yNtgW/btrmKkQHuOa/OleSub2Kfz7nKcaA54M3Jk/img.gif"
                  alt="게시물 사진"
                  shape="rectangle"
                  width="50%"
                  border="2px solid black"
                ></Image>
              )}
            </Grid>
            <Grid margin="1% 0px 0px 0px" center>
              <FileLabel for="file">업로드</FileLabel>
              <FileInput
                type="file"
                id="file"
                encType="multipart/form-data"
                onChange={selectFile}
                ref={fileInput}
              ></FileInput>
            </Grid>
          </Grid>
          {/* ----------------------------------------------- */}
          <Grid width="68vw" margin="2% 5% 0px 0px">
            <Grid is_flex justifyContent>
              <Image shape="circle"></Image>
              <Text bold>eundol</Text>
            </Grid>
            <Grid>
              <Input
                rows="30"
                cols="60"
                wrap="on"
                value={contents}
                _onChange={changeContents}
                multiLine
                placeholder="문구 입력..."
              ></Input>
              <Button
                width="55%"
                padding="5px"
                margin="0px 0px 0px 30%"
                text="작성하기"
              ></Button>
            </Grid>
          </Grid>
          {/* ----------------------------------------------- */}
        </Grid>
      </Modal>
    </React.Fragment>
  );
};

const FileLabel = styled.label`
  display: inline-block;
  width: 28%;
  height: 27px;
  background-color: #0095f6;
  color: #ffffff;
  line-height: 45px;
  border-radius: 3px;
  text-align: center;
  line-height: 27px;
  font-size: 14px;
  margin-top: 15%;
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
