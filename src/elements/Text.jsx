// *** Text.jsx ***

import React from 'react';
import styled from 'styled-components';

const Text = props => {
  const { bold, color, size, children, margin } = props;

  const styles = { bold: bold, color: color, size: size, margin };
  return <P {...styles}>{children}</P>;
};

Text.defaultProps = {
  children: null,
  bold: false,
  color: '#222831',
  size: '14px',
  margin: false,
};

const P = styled.p`
  color: ${props => props.color};
  font-size: ${props => props.size};
  font-weight: ${props => (props.bold ? '600' : '400')};
  ${props => (props.margin ? `margin: ${props.margin};` : '')}

  // 텍스트를 마우스로 드래그하는 것을 방지하는 CSS
  -ms-user-select: none;
  -moz-user-select: -moz-none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  user-select: none;
`;

export default Text;
