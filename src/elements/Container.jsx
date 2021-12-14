//  v.js

// *** 패키지 import
import React from 'react';
import styled from 'styled-components';

const Container = props => {
  const { children } = props;

  const styles = {};

  return <ContainerBox>{children}</ContainerBox>;
};

Container.defaultProps = {};

const ContainerBox = styled.div`
  margin: auto;
  width: 935px;
`;

export default Container;
