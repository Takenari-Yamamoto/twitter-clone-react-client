import React, { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';

interface Props {
  text: string;
  input: Dispatch<SetStateAction<string>>;
  placeholder?: string;
}

const Input = styled.input.attrs({
  type: 'text',
})`
  width: 100%;
  height: 40px;
  border: 1px solid;
`;

export const AppInput = ({ text, input, placeholder }: Props) => {
  return (
    <Input
      onChange={(e) => input(e.target.value)}
      value={text}
      placeholder={placeholder}
    />
  );
};

AppInput.defaultProps = {
  placeholder: '入力してください',
};
