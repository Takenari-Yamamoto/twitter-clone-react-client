import React from 'react';
import styled from 'styled-components';

interface Props {
  text: string;
  clickButton: () => void;
}

const Button = styled.button`
  color: rgb(0, 0, 0);
  border: 1px solid;
  border-radius: 8px;
  padding: 10px;
`;

const AppButton = ({ text, clickButton }: Props) => {
  return (
    <Button className="app-button" onClick={() => clickButton()}>
      {text}
    </Button>
  );
};

// デフォルト値
AppButton.defaultProps = {
  text: 'BUTTON',
};

export default AppButton;
