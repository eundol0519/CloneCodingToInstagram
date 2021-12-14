// *** Button.jsx ***

import React from 'react';
import styled from 'styled-components';

const Button = props => {
  const {
    text,
    img,
    _onClick,
    is_float,
    children,
    margin,
    width,
    className,
    padding,
    disabled,
    bg,
    color,
    border,
    size,
  } = props;

  if (is_float) {
    return (
      <React.Fragment>
        <FloatButton onClick={_onClick}>{text ? text : children}</FloatButton>
      </React.Fragment>
    );
  }

  const styles = {
    margin: margin,
    width: width,
    padding: padding,
    img: img,
    bg,
    color,
    border,
    size,
  };

  return (
    <React.Fragment>
      <ElButton
        className={className}
        {...styles}
        onClick={_onClick}
        disabled={disabled}
      >
        {text ? text : children}
      </ElButton>
    </React.Fragment>
  );
};

Button.defaultProps = {
  className: '',
  text: false,
  children: null,
  _onClick: () => {},
  is_float: false,
  margin: false,
  width: '100%',
  padding: '12px 0px',
  disabled: false,
  img: false,
  bg: false,
  color: '#ffffff',
  border: 'none',
  size: '12px',
};

const ElButton = styled.button`
  width: ${props => props.width};
  background-color: ${props =>
    props.className === 'unActiveBtn' ? '#B2DFFC' : '#0095F6'};
  ${props => (props.img ? `background-image : ${props.img};` : '')}
  color: ${props => props.color};
  background: ${props => props.bg};
  padding: ${props => props.padding};
  box-sizing: border-box;
  border-radius: 3px;
  border: ${props => props.border};
  ${props => (props.margin ? `margin: ${props.margin};` : '')}
  cursor: pointer;
  font-size: ${props => props.size};
`;

const FloatButton = styled.button`
  width: 50px;
  height: 50px;
  background-color: #212121;
  color: #ffffff;
  box-sizing: border-box;
  font-size: 36px;
  font-weight: 800;
  position: fixed;
  bottom: 50px;
  right: 16px;
  text-align: center;
  vertical-align: middle;
  border: none;
  cursor: pointer;
  border-radius: 50px;
`;

export default Button;
