import { instance } from '@/api/api.interceptor';
import { IOrder } from '@/types/order.interface';

export const OrderService = {
  async getAll() {
    return instance<IOrder[]>({
      url: '/orders',
      method: 'GET',
    });
  },
};
