import { useEffect } from 'react';
import styled from 'styled-components';
import useAuth from '../../api/useAuth';

export const MyPage = () => {
  const { fetchMyInfo, userInfo } = useAuth();

  const MyPageContainer = styled.div`
    padding: 16px;
  `;

  useEffect(() => {
    fetchMyInfo();
    console.log(99, userInfo);
  }, []);

  return (
    <MyPageContainer>
      <h1>My Page</h1>
      <p>id: {userInfo?.id}</p>
      <p>name: {userInfo?.name}</p>
      <p>email: {userInfo?.email}</p>
    </MyPageContainer>
  );
};
