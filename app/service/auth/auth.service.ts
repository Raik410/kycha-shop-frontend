import { getContentType } from '@/api/api.helper';
import { instance } from '@/api/api.interceptor';
import axios from 'axios';
import Cookies from 'js-cookie';
import { IAuthResponce, IEmailPassword } from '../../store/user/user.interface';
import { saveToStorage } from './auth.helper';

export const AuthService = {
  async main(type: 'login' | 'register', data: IEmailPassword) {
    const response = await instance<IAuthResponce>({
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
    const refreshToken = Cookies.get('refresh-token');

    const response = await axios.post<string, { data: IAuthResponce }>(
      process.env.SERVER_URL + '/auth/login/access-token',
      { refreshToken },
      {
        headers: getContentType(),
      },
    );

    if (response.data.accessToken) {
      saveToStorage(response.data);
    }

    return response;
  },
};
