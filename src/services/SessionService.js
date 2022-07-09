import axiosInstance from '../shared/axiosInstance/axiosInstance';
import jwt_decode from 'jwt-decode';

export default class SessionService {
  static isUserAuthenticated() {
    return Boolean(sessionStorage.getItem('ACCESS_TOKEN'));
  }

  static setSessionStorage(accessToken) {
    sessionStorage.setItem('ACCESS_TOKEN', accessToken);
  }

  static clearSessionStorage() {
    axiosInstance.interceptors.request.use((config) => {
      config.headers.Authorization = null;
      return config;
    });
    sessionStorage.removeItem('ACCESS_TOKEN');
  }

  static setInterceptors() {
    axiosInstance.interceptors.request.use((config) => {
      const accessToken = sessionStorage.getItem('ACCESS_TOKEN');
      if (accessToken) config.headers.Authorization = `Bearer ${accessToken}`;

      config.headers['Content-Type'] = 'application/json';

      return config;
    });
  }

  static isAdmin() {
    if (!SessionService.isUserAuthenticated()) return false;

    const accessToken = sessionStorage.getItem('ACCESS_TOKEN');
    const decodedJwt = jwt_decode(accessToken);

    return decodedJwt.isAdmin ?? false;
  }
}
