import axios from 'axios';
import SessionService from '../../services/SessionService';

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

const axiosInstance = axios.create({
  baseURL: 'http://127.0.0.1:8000',
  headers: {
    'Content-type': 'application/json',
  },
});

axiosInstance.interceptors.response.use(
  async (response) => {
    return response;
  },
  async (error) => {
    if (error.response.status === 401) {
      SessionService.clearSessionStorage();
      window.location.assign('/login');
    }
    if (error.response.status === 403) {
      window.location.assign('/403');
    }

    return error;
  }
);

export default axiosInstance;
