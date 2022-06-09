import axios from 'axios';
import { UserInfo } from '../api/useAuth';

// FIXME: 状態管理見直したい
const userData: UserInfo = JSON.parse(localStorage.userData);

console.log(1, userData);
console.log(2, userData.access_token);

const client = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  withCredentials: true,
  headers: {
    Authorization: `Bearer ${userData.access_token ?? ''}`,
  },
});

export default client;
