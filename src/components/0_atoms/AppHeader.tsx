import { Link } from 'react-router-dom';
import styled from 'styled-components';

const AppHeaderComp = styled.button`
  display: flex;
  width: 100%;
  gap: 10px;
  padding: 10px;
  border-bottom: 1px solid;
`;

export const AppHeader = () => {
  return (
    <AppHeaderComp>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </AppHeaderComp>
  );
};
