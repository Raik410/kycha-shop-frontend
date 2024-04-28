import { instance } from '@/api/api.interceptor';
import { IUser } from '@/types/user.interface';

type TypeData = {
  name?: string;
  email: string;
  password?: string;
  phone?: string;
  avatarPath?: string;
};

export const UserService = {
  async getProfile() {
    return instance<IUser>({
      url: '/users/profile',
      method: 'GET',
    });
  },

  async updateProfile(data: TypeData) {
    return instance<IUser>({
      url: `/users/profile`,
      method: 'PUT',
      data,
    });
  },

  async toggleFavorite(productId: string | number) {
    return instance<IUser>({
      url: `/users/profile/favorites/${productId}`,
      method: 'PATCH',
    });
  },
};
