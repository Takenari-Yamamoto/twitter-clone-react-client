import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import client from '../service/useAxios';
interface RegisterParams {
  name: string;
  email: string;
  password: string;
}

type LoginParams = Omit<RegisterParams, 'name'>;

export interface UserInfo {
  id: number | null;
  name: string | null;
  created_at: string | null;
  email: string | null;
  updated_at: string | null;
  access_token: string;
}

const useAuth = () => {
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
      const { data } = await client.post<UserInfo>('/api/login', params);
      // FIX: ローカルストレージやめたい
      console.log(data);
      localStorage.userData = JSON.stringify(data);
      auth?.setUserAuth(data);
    } catch (e) {
      alert('認証に失敗しました');
    }
  };

  const logout = async () => {
    try {
      await client.post('api/logout');
      localStorage.removeItem('userData');
      auth?.setUserAuth(null);
    } catch (e) {
      console.error(e);
    }
  };

  // const fetchMyInfo = async () => {
  //   await client.post<UserInfo>('/api/me');
  // };

  return { register, login, logout };
};

export default useAuth;
