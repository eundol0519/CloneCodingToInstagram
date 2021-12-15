import React from 'react';
import styled from 'styled-components';

const Mypostcard = props => {
  return (
    <React.Fragment>
      <Card />
    </React.Fragment>
  );
};

const Card = styled.div`
  width: 293px;
  height: 293px;
  background-color: lemonchiffon;
  display: flex;
  flex-wrap: wrap;
  background-image: url('http://image.yes24.com/goods/70874453/XL');
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
