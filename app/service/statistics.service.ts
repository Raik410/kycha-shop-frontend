import { instance } from '@/api/api.interceptor';

type TypeStatistics = {
  name: string;
  value: number;
};

export const StatisticsService = {
  async getMain() {
    return instance<TypeStatistics[]>({
      url: '/statistics/main',
      method: 'GET',
    });
  },
};
