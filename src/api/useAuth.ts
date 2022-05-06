import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import client from '../service/axios';
interface RegisterParams {
  name: string;
  email: string;
  password: string;
}

type LoginParams = Omit<RegisterParams, 'name'>;

interface Token {
  access_token: string;
  token_type: 'Bearer';
}

interface UserInfo {
  id: number;
  name: string;
  created_at: string;
  email: string;
  email_verified_at: string | null;
  updated_at: string;
}

const useAuth = () => {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);

  const register = async (params: RegisterParams) => {
    try {
      await client.get('/sanctum/csrf-cookie');
      await client.post('/api/register', params);
    } catch (e) {
      console.error(e);
    }
  };

  const login = async (params: LoginParams) => {
    try {
      await client.get('/sanctum/csrf-cookie', { withCredentials: true });
      const { data } = await client.post<Token>('/api/login', params);
      // FIX: ローカルストレージやめたい
      localStorage.setItem('accessToken', data.access_token);
      // FIX: 遷移は App.js でやりたい
      navigate('/mypage');
    } catch (e) {
      alert('認証に失敗しました');
    }
  };

  const fetchMyInfo = async () => {
    const { data } = await client.post<UserInfo>('/api/me');
    setUserInfo(data);
  };

  return { register, login, fetchMyInfo, userInfo };
};

export default useAuth;
