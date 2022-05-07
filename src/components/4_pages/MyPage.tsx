import { useContext, useEffect } from 'react';
import styled from 'styled-components';
import useAuth from '../../api/useAuth';
import { AuthContext } from '../../context/AuthContext';

export const MyPage = () => {
  // const { fetchMyInfo } = useAuth();
  const auth = useContext(AuthContext);

  const MyPageContainer = styled.div`
    padding: 16px;
  `;

  // useEffect(() => {
  //   fetchMyInfo();
  // }, []);

  return (
    <MyPageContainer>
      <h1>My Page</h1>
      <p>id: {auth?.userAuth?.id}</p>
      <p>name: {auth?.userAuth?.name}</p>
      <p>email: {auth?.userAuth?.email}</p>
    </MyPageContainer>
  );
};
