import axios from 'axios';
import { UserInfo } from '../api/useAuth';

// const accessToken = JSON.parse(localStorage.getItem('userData'));
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
