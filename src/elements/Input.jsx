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
    children,
  } = props;

  if (multiLine) {
    return (
      <Grid>
        {label && <Text margin="0px">{label}</Text>}
        <ElTextarea
          rows={rows}
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
  resize: none;
  white-space: pre; // 개행과 공백을 원래대로 보이게 해준다.
  wrap: 'virtual'; // 화면에 자동으로 줄바꿈 , 전송 시에는 입력대로 전송

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
