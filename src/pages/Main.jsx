// *** Main.jsx ***

import React from 'react';
import Header from '../components/Header';
import PostDetail from '../pages/PostDetail';

const Main = props => {
  const [postDetailModal, setPostDetailModal] = React.useState(false);

  return (
    <React.Fragment>
      <Header></Header>
      <button
        onClick={() => {
          setPostDetailModal(true);
        }}
      >
        상세 페이지
      </button>
      {postDetailModal && (
        <PostDetail
          modal={postDetailModal}
          setPostDetailModal={setPostDetailModal}
        ></PostDetail>
      )}
    </React.Fragment>
  );
};

export default Main;
