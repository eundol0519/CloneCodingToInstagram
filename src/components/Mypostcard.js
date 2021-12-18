import React from "react";
import styled from "styled-components";
import PostDetail from "../pages/PostDetail";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as postActions } from "../redux/modules/post";
const Mypostcard = props => {
  const dispatch = useDispatch();
  const myPageList = useSelector(state => state.post.myPageList);
  console.log(myPageList);
  const [postDetailModal, setPostDetailModal] = React.useState(false);
  return (
    <React.Fragment>
      {myPageList.map((p, idx) => {
        return (
          <Card
            onClick={() => {
              dispatch(postActions.PostDetailLookUpFB(p.postId));
              setPostDetailModal(true);
            }}
            key={p.postId}
            imageUrl={p.imageUrl}
          />
        );
      })}
      {postDetailModal && (
        <PostDetail
          modal={postDetailModal}
          setPostDetailModal={setPostDetailModal}
        ></PostDetail>
      )}
    </React.Fragment>
  );
};

const Card = styled.div`
  width: 293px;
  height: 293px;
  background-color: lemonchiffon;
  display: flex;
  flex-wrap: wrap;
  background-image: url("${props => props.imageUrl}");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;
  &: nth-child(3n+2) {
    margin: 0 28px;
  }
  &: nth-child(n + 4) {
    margin-top: 28px;
  }
`;

export default Mypostcard;
