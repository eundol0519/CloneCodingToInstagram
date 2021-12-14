//  v.js

// *** 패키지 import
import React from 'react';
import styled from 'styled-components';

const Grid = props => {
  const {
    is_flex,
    gap,
    width,
    height,
    margin,
    padding,
    bg,
    children,
    center,
    _onClick,
    flexFlow,
    justifyContent,
    noWrap,
    boxShadow,
    column,
    border,
  } = props;

  const styles = {
    boxShadow: boxShadow,
    gap: gap,
    justifyContent: justifyContent,
    is_flex: is_flex,
    width: width,
    margin: margin,
    height: height,
    padding: padding,
    bg: bg,
    center: center,
    flexFlow: flexFlow,
    column,
    border,
  };

  if (noWrap) {
    return (
      <React.Fragment>
        <NoWrap onClick={_onClick} {...styles}>
          {children}
        </NoWrap>
      </React.Fragment>
    );
  }

  return (
    <React.Fragment>
      <GridBox onClick={_onClick} {...styles}>
        {children}
      </GridBox>
    </React.Fragment>
  );
};

Grid.defaultProps = {
  boxShadow: null,
  gap: 0,
  justifyContent: false,
  chidren: null,
  is_flex: false,
  width: '100%',
  padding: false,
  margin: false,
  bg: false,
  center: false,
  flexFlow: false,
  _onClick: () => {},
  column: false,
  border: '0px',
};

const GridBox = styled.div`
  width: ${props => props.width};
  height: ${props => props.height};
  gap: ${props => props.gap};
  box-sizing: border-box;
  border-radius: 5px;
  border: ${props => props.border};
  flex-direction: ${props => props.column};
  gap: ${props => props.gap};
  ${props => (props.padding ? `padding: ${props.padding};` : '')}
  ${props => (props.margin ? `margin: ${props.margin};` : '')}
    ${props => (props.bg ? `background-color: ${props.bg};` : '')}
    ${props => (props.is_flex ? `display: flex; align-items: center; ` : '')}
    ${props => (props.center ? `text-align: center;` : '')}
    ${props => (props.flexFlow ? 'flex-flow : row wrap;' : '')}
    ${props =>
    props.justifyContent
      ? 'justify-content: flex-start;'
      : 'justify-content: space-between;'};
`;

const NoWrap = styled.div`
  width: 450px;
  border-radius: 15px;
  height: 60px;
  /* border: 1px solid black; */
  box-shadow: 0px 5px 16px rgba(180, 150, 150, 0.4);
  background-color: #fafafa;
  justify-content: flex-start;
`;

export default Grid;
