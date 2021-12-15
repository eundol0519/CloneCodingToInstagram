import React from 'react';
import styled from 'styled-components';
import logo from '../logo.png';
import Mypostcard from './Mypostcard';
const MyPost = props => {
  return (
    <React.Fragment>
      <Container>
        <Mypostcard />
        <Mypostcard />
        <Mypostcard />
        <Mypostcard />
        <Mypostcard />
        <Mypostcard />
        <Mypostcard />
        <Mypostcard />
        <Mypostcard />
      </Container>
    </React.Fragment>
  );
};

const Container = styled.div`
  max-width: 935px;
  /* width: 891px; */
  margin: 0 auto;
  /* background-color: aqua; */
  display: flex;
  flex-wrap: wrap;
`;

export default MyPost;
