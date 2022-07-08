import axiosInstance from '../shared/axiosInstance/axiosInstance';
import SessionService from './SessionService';

export default class AuthenticationService {
  static async Authenticate({ formData }) {
    try {
      const { data } = await axiosInstance.post('/authenticate/', formData);

      if (data.access) {
        SessionService.setSessionStorage(data.access);
        SessionService.setInterceptors();
        window.location.assign('/artigos');
      }
      return Promise.resolve();
    } catch (e) {
      SessionService.clearSessionStorage();
      alert('Usuário ou senha inválido. Tente novamente.');
      return Promise.reject();
    }
  }
}
