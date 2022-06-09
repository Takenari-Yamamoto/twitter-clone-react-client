import { useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import useAuth from '../../api/useAuth';
import { AuthContext } from '../../context/AuthContext';

const AppHeaderComp = styled.button`
  display: flex;
  width: 100%;
  gap: 10px;
  padding: 10px;
  border-bottom: 1px solid;
`;

export const AppHeader = () => {
  const auth = useContext(AuthContext);
  const { logout } = useAuth();
  return (
    <AppHeaderComp>
      <Link to="/">Twitter Clone</Link>
      <Link to="/about">About</Link>
      {auth?.userAuth ? <p onClick={() => logout()}>Logout</p> : ''}
      {auth?.userAuth ? (
        <Link to="/mypage">ようこそ{auth?.userAuth.name}さん</Link>
      ) : (
        ''
      )}
    </AppHeaderComp>
  );
};
