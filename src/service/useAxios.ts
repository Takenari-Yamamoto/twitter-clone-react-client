import axios from 'axios';

const accessToken = localStorage.getItem('accessToken') ?? '';

const client = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  withCredentials: true,
  headers: {
    Authorization: `Bearer ${accessToken}`,
  },
});

export default client;
