// *** Input.jsx ***

import React from 'react';
import styled from 'styled-components';
import { Text, Grid } from './index';

const Input = props => {
  const {
    label,
    placeholder,
    _onChange,
    _onKeyUp,
    type,
    multiLine,
    value,
    is_submit,
    onSubmit,
    rows,
    cols,
    children,
    _ref,
  } = props;

  if (multiLine) {
    return (
      <Grid>
        {label && <Text margin="0px">{label}</Text>}
        <ElTextarea
          ref={_ref}
          rows={rows}
          cols={cols}
          value={value}
          placeholder={placeholder}
          onKeyUp={_onKeyUp}
          onChange={_onChange}
        >
          {children}
        </ElTextarea>
      </Grid>
    );
  }

  return (
    <React.Fragment>
      <Grid>
        {label && <Text margin="0px">{label}</Text>}
        {is_submit ? (
          <ElInput
            ref={_ref}
            type={type}
            placeholder={placeholder}
            onChange={_onChange}
            value={value}
            onKeyPress={e => {
              if (e.key === 'Enter') {
                onSubmit(e);
              }
            }}
          />
        ) : (
          <ElInput
            ref={_ref}
            type={type}
            placeholder={placeholder}
            onChange={_onChange}
            onKeyUp={_onKeyUp}
          />
        )}
      </Grid>
    </React.Fragment>
  );
};

Input.defaultProps = {
  multiLine: false,
  label: false,
  placeholder: '텍스트를 입력해주세요.',
  type: 'text',
  value: '',
  is_submit: false,
  onSubmit: () => {},
  _onChange: () => {},
};

const ElTextarea = styled.textarea`
  border: 1px solid white;
  background-color: whites;
  width: 100%;
  margin: 4% 2% 4% 2%;
  padding: 2% 2% 2% 2%;
  box-sizing: border-box;
  border-radius: 3px;
  // textarea 넓이 조정 안되게 설정
  resize: none;
  // 자동으로 줄바꿈
  word-break: keep-all;
  word-wrap: break-word;

  &:focus {
    outline: none;
  }
`;

const ElInput = styled.input`
  border: 1px solid #dfdfdf;
  width: 20%;
  padding: 12px 10px;
  box-sizing: border-box;
  background-color: #fafafa;
  border-radius: 3px;
`;

export default Input;
