import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
const Mypostcard = props => {
  const myPageList = useSelector(state => state.post.myPageList);
  console.log(myPageList);

  return (
    <React.Fragment>
      {myPageList.map((p, idx) => {
        return <Card key={p.postId} imageUrl={p.imageUrl} />;
      })}
    </React.Fragment>
  );
};

const Card = styled.div`
  width: 293px;
  height: 293px;
  background-color: lemonchiffon;
  display: flex;
  flex-wrap: wrap;
  background-image: url('${props => props.imageUrl}');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  &: nth-child(3n+2) {
    margin: 0 28px;
  }
  &: nth-child(n + 4) {
    margin-top: 28px;
  }
`;

export default Mypostcard;
