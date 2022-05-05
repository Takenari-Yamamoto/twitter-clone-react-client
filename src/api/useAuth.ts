import axios from 'axios';
axios.defaults.baseURL = process.env.REACT_APP_API_URL;

interface RegisterParams {
  name: string;
  email: string;
  password: string;
}

type LoginParams = Omit<RegisterParams, 'name'>;

const useAuth = () => {
  const register = async (params: RegisterParams) => {
    try {
      await axios.post('/api/register', params);
    } catch (e) {
      console.error(e);
    }
  };

  const login = async (params: LoginParams) => {
    try {
      await axios.post('/api/login', params);
    } catch (e) {
      console.error(e);
    }
  };

  return { register, login };
};

export default useAuth;
