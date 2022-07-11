import axios from 'axios';
import SessionService from '../../services/SessionService';
import * as fs from 'fs';
import https from 'https';

const httpsAgent = new https.Agent({
  rejectUnauthorized: false,
  cert: fs.readFileSync('./cert.pem'),
  key: fs.readFileSync('./key.pem'),
});

const axiosInstance = axios.create({
  httpsAgent,
  baseURL: 'https://api.hugoserver.com',
  headers: {
    'Content-type': 'application/json',
  },
});

axiosInstance.interceptors.response.use(
  async (response) => {
    return response;
  },
  async (error) => {
    console.log(error);
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
