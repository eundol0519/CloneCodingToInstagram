// *** Main.jsx ***

import React from 'react';
import styled from 'styled-components';
import PostDetail from '../pages/PostDetail';
import Post from '../components/Post';
import { history } from '../redux/configureStore';
import { actionCreators as postAtions } from '../redux/modules/post';
import { useDispatch, useSelector } from 'react-redux';

const Main = props => {
  const [postDetailModal, setPostDetailModal] = React.useState(false);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(postAtions.getPostDB());
  }, []);

  const postList = useSelector(state => state.post.postList);
  console.log(postList);

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
        {postList.map((p, idx) => {
          return (
            <Item>
              <Post key={p.postId} p={p} />
            </Item>
          );
        })}
      </Container>
    </React.Fragment>
  );
};

const Container = styled.div`
  max-width: 614px;
  /* width: 891px; */
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
`;

const Item = styled.div`
  width: 614px;
  height: 891px;
  margin-bottom: 40px;
`;

export default Main;
