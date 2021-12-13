// *** PostDetail.jsx ***

import React from 'react';
import Modal from 'react-modal';
import { Grid } from '../elements/index';

const PostDetail = props => {
  const [modal, setModal] = React.useState(props.modal ? true : false); // 모달창
  const [active, setActive] = React.useState(true); // 버튼 활성화 유무

  // 모달창을 닫으면 state도 false로 바꾸기
  const modalOff = () => {
    setModal(false);
    props.setPostDetailModal(false);
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
            top: '15%',
            left: '25%',
            right: '25%',
            bottom: '15%',
            border: '1px solid #ccc',
            background: '#fff',
            overflow: 'auto',
            WebkitOverflowScrolling: 'touch',
            borderRadius: '3px',
            outline: 'none',
            padding: '20px',
          },
        }}
      >
        <Grid center>
          <h1>게시물 상세 페이지</h1>
          <p>
            게시물 이미지 / 시용자 프로필 사진 / 사용자 닉네임 / 게시물 내용 /
            작성 날짜 / 좋아요 버튼 / 좋아요 갯수 / 댓글 입력창 + 댓글 작성 버튼
            / 댓글 목록
          </p>
        </Grid>
      </Modal>
    </React.Fragment>
  );
};

export default PostDetail;
