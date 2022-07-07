import axios from 'axios';
import SessionService from '../../services/SessionService';

const axiosInstance = axios.create({
  baseURL: 'http://127.0.0.1:8000',
});

axiosInstance.interceptors.request.use((config) => {
  const accessToken = sessionStorage.getItem('ACCESS_TOKEN');
  if (accessToken) config.headers.Authorization = `Bearer ${accessToken}`;

  config.headers['Access-Control-Allow-Origin'] = '*';
  config.headers['Access-Control-Allow-Headers'] = 'Origin, X-Requested-With, Content-Type, Accept';
  config.headers['Content-Type'] = 'application/json';

  return config;
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
