import axios from 'axios';
import SessionService from '../../services/SessionService';

const axiosInstance = axios.create({
  baseURL: 'http://127.0.0.1:8000',
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
    return error;
  }
);

export default axiosInstance;
