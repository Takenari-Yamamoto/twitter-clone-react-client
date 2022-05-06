import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import client from '../service/useAxios';
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

export interface UserInfo {
  id: number | null;
  name: string | null;
  created_at: string | null;
  email: string | null;
  email_verified_at: string | null;
  updated_at: string | null;
}

const useAuth = () => {
  // const { setUserInfo } = useAuthContext();
  const auth = useContext(AuthContext);

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
      await client.post<UserInfo>('/api/me');
      auth?.setUserAuth(true);
    } catch (e) {
      alert('認証に失敗しました');
    }
  };

  const fetchMyInfo = async () => {};

  return { register, login, fetchMyInfo };
};

export default useAuth;
