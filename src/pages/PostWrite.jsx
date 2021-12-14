// *** PostWrtie.jsx ***

import React from 'react';
import Modal from 'react-modal';
import { Grid, Text, Image, Button, Input } from '../elements/index';

const PostWrtie = props => {
  const [modal, setModal] = React.useState(props.modal ? true : false); // 모달창
  const [active, setActive] = React.useState(true); // 버튼 활성화 유무
  const [contents, setContents] = React.useState(''); // 글 내용 작성

  // 모달창을 닫으면 header state도 false로 바꾸기
  const modalOff = () => {
    setModal(false);
    props.setPostWriteModal(false);
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
          <Text margin="0px 0px 1% 22%" bold>
            게시물 작성하기
          </Text>
        </Grid>
        {/* ----------------------------------------------- */}
        <Grid is_flex is_fix>
          <Grid width="130vw">
            <input type="file"></input>
            <Button width="25%" padding="5px" text="업로드"></Button>
          </Grid>
          {/* ----------------------------------------------- */}
          <Grid width="68vw" margin="3% 5% 0px 0px">
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
                width="80%"
                padding="5px"
                margin="0px 0px 0px 13%"
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

export default PostWrtie;
