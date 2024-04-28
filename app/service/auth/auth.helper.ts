import Cookies from 'js-cookie';
import { IAuthResponce, ITokens } from '../../store/user/user.interface';

export const saveTokensStorage = (data: ITokens) => {
  Cookies.set('accessToken', data.accessToken);
  Cookies.set('refreshToken', data.refreshToken);
};

export const getAccessToken = () => {
  const accessToken = Cookies.get('accessToken');
  return accessToken || null;
};

export const removeFromStorage = () => {
  Cookies.remove('accessToken');
  Cookies.remove('refreshToken');
  localStorage.removeItem('user');
};

export const saveToStorage = (data: IAuthResponce) => {
  saveTokensStorage(data);
  localStorage.setItem('user', JSON.stringify(data.user));
};
