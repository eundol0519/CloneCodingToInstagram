// *** Header.js ***

import React from 'react';
import styled from 'styled-components';
import { Grid, Image, Button } from '../elements/index';
import logo from '../logo.png';
import write from '../add.svg';
import myPage from '../person.svg';
import logOut from '../exit.svg';
import PostWrite from '../pages/PostWrite';
import { useHistory } from 'react-router-dom';

const Header = props => {
  const history = useHistory();
  const [postWrtieModal, setPostWriteModal] = React.useState(false);
  return (
    <React.Fragment>
      <Grid is_flex padding="1% 0px 0px 0px">
        <Logo src={logo}></Logo>
        <Grid is_flex gap="20px" width="auto">
          <Btn
            src={write}
            onClick={() => {
              setPostWriteModal(true);
            }}
          ></Btn>
          {postWrtieModal && (
            <PostWrite
              modal={postWrtieModal}
              setPostWriteModal={setPostWriteModal}
            ></PostWrite>
          )}
          <Btn
            src={myPage}
            onClick={() => {
              history.push('/myPage');
            }}
          ></Btn>
          <Btn
            src={logOut}
            onClick={() => {
              window.alert('로그아웃 되었습니다.');
            }}
          ></Btn>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

const Logo = styled.img`
  width: 150px;
  height: 23%;
  cursor: pointer;
`;

const Btn = styled.img`
  width: 30px;
  cursor: pointer;
`;

export default Header;
