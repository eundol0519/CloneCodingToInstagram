// *** Header.js ***

import React from 'react';
import styled from 'styled-components';
import { Grid, Image, Button } from '../elements/Index';
import logo from '../logo.png';
import write from '../add.svg';
import myPage from '../person.svg';
import logOut from '../exit.svg';
import { useHistory } from 'react-router-dom';

const Header = props => {
  const history = useHistory();
  return (
    <React.Fragment>
      <Grid is_flex margin="-2% 0px 0px 0px">
        <Grid>
          <Logo src={logo}></Logo>
        </Grid>
        <Grid>
          <Btn
            margin="4% 5% 0px 0px;"
            src={write}
            onClick={() => {
              history.push('/postWrite');
            }}
          ></Btn>
          <Btn
            margin="3% 5% 0px 0px;"
            src={myPage}
            onClick={() => {
              history.push('/myPage');
            }}
          ></Btn>
          <Btn
            margin="3% 0px 0px 0px;"
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
  width: 18%;
  height: 23%;
  margin: 3% 0px 0px 0px;
  cursor: pointer;
`;

const Btn = styled.img`
  width: 4%;
  margin : ${props => props.margin}
  cursor: pointer;
`;

export default Header;
