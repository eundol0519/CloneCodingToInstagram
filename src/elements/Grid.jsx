// *** Grid.jsx ***

import React from 'react';
import styled from 'styled-components';

const Button = props => {
  const {
    is_flex,
    text,
    _onClick,
    is_float,
    children,
    margin,
    width,
    className,
    padding,
    disabled,
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
    is_flex: is_flex,
    width: width,
    padding: padding,
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
};

const ElButton = styled.button`
  width: ${props => props.width};
  background-color: ${props =>
    props.className === 'unActiveBtn' ? 'gray' : '#ffffff'};
  color: black;
  padding: ${props => props.padding};
  box-sizing: border-box;
  border: none;
  ${props => (props.margin ? `margin: ${props.margin};` : '')}
  ${props =>
    props.is_flex
      ? `display: flex; align-items: center; justify-content: space-evenly; `
      : ''}
`;

const FloatButton = styled.button`
  width: 50px;
  height: 50px;
  background-color: #ffffff;
  color: black;
  box-sizing: border-box;
  font-size: 36px;
  font-weight: 800;
  position: fixed;
  bottom: 50px;
  right: 16px;
  text-align: center;
  vertical-align: middle;
  border: none;
  border-radius: 50px;
  ${props =>
    props.is_flex
      ? `display: flex; align-items: center; justify-content: space-evenly; `
      : ''}
`;

export default Button;
