import { axiosClassic } from '@/api/api.interceptor';
import Cookies from 'js-cookie';
import { IAuthResponce, IEmailPassword } from '../../store/user/user.interface';
import { saveToStorage } from './auth.helper';

export const AuthService = {
  async main(type: 'login' | 'register', data: IEmailPassword) {
    const response = await axiosClassic<IAuthResponce>({
      url: `/auth/${type}`,
      method: 'POST',
      data,
    });

    if (response.data.accessToken) {
      await saveToStorage(response.data);
    }

    return response.data;
  },

  async getNewTokens() {
    const refreshToken = Cookies.get('refreshToken');

    const response = await axiosClassic.post<string, { data: IAuthResponce }>(
      '/auth/login/access-token',
      { refreshToken },
    );

    if (response.data.accessToken) {
      saveToStorage(response.data);
    }

    return response;
  },
};
