import { useContext } from 'react';
import styled from 'styled-components';
import { AuthContext } from '../../context/AuthContext';

export const MyPage = () => {
  const auth = useContext(AuthContext);

  const MyPageContainer = styled.div`
    padding: 16px;
  `;

  return (
    <MyPageContainer>
      <h1>My Page</h1>
      <p>id: {auth?.userAuth?.id}</p>
      <p>name: {auth?.userAuth?.name}</p>
      <p>email: {auth?.userAuth?.email}</p>
    </MyPageContainer>
  );
};
