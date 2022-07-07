import axiosInstance from '../shared/axiosInstance/axiosInstance';

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
}
