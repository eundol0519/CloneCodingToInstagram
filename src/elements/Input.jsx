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
  } = props;

  if (multiLine) {
    return (
      <Grid>
        {label && <Text margin="0px">{label}</Text>}
        <ElTextarea
          rows={10}
          value={value}
          placeholder={placeholder}
          onChange={_onChange}
        ></ElTextarea>
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
  border: 1px solid #dfdfdf;
  width: 100%;
  padding: 12px 10px;
  box-sizing: border-box;
  background-color: #fafafa;
  border-radius: 3px;
`;

const ElInput = styled.input`
  border: 1px solid #dfdfdf;
  width: 100%;
  padding: 12px 10px;
  box-sizing: border-box;
  background-color: #fafafa;
  border-radius: 3px;
`;

export default Input;
