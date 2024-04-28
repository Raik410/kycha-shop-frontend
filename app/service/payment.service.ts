import { instance } from '@/api/api.interceptor';
import { IPaymentResponce } from '@/types/payment.interface';

export const PaymentService = {
  async createPayment(amount: number) {
    return await instance.post<IPaymentResponce>('/payment', {
      amount,
    });
  },
};
