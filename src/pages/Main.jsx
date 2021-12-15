// *** Main.jsx ***

import React from 'react';
import styled from 'styled-components';
import PostDetail from '../pages/PostDetail';
import Post from '../components/Post';

const Main = props => {
  const [postDetailModal, setPostDetailModal] = React.useState(false);

  return (
    <React.Fragment>
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
      <Container>
        <Item>
          <Post />
        </Item>
        <Item>
          <Post />
        </Item>
        <Item>
          <Post />
        </Item>
        <Item>
          <Post />
        </Item>
      </Container>
    </React.Fragment>
  );
};

const Container = styled.div`
  max-width: 614px;
  /* width: 891px; */
  margin: 0 auto;
  /* background-color: aqua; */
  display: flex;
  flex-wrap: wrap;
`;

const Item = styled.div`
  width: 614px;
  height: 891px;
  /* border: 2px
  background-color: blueviolet; */
`;

export default Main;
