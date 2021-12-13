// *** PostWrtie.jsx ***

import React from 'react';
import Modal from 'react-modal';
import { Grid } from '../elements/index';

const PostWrtie = props => {
  const [modal, setModal] = React.useState(props.modal ? true : false); // 모달창
  const [active, setActive] = React.useState(true); // 버튼 활성화 유무

  // 모달창을 닫으면 header state도 false로 바꾸기
  const modalOff = () => {
    setModal(false);
    props.setPostWriteModal(false);
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
            left: '25%',
            right: '25%',
            bottom: '10%',
            border: '1px solid #ccc',
            background: '#fff',
            overflow: 'auto',
            WebkitOverflowScrolling: 'touch',
            borderRadius: '5px',
            outline: 'none',
            padding: '20px',
          },
        }}
      >
        <Grid center>
          <h1>게시물 작성 페이지</h1>
          <p>이미지 미리보기 / 유저 프로필 / 유저 닉네임 / 게시물 내용</p>
          <hr></hr>
        </Grid>
      </Modal>
    </React.Fragment>
  );
};

export default PostWrtie;
