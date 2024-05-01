import { axiosClassic, instance } from '@/api/api.interceptor';
import { IReview } from '@/types/review.interface';

type TypeData = {
  raiting: number;
  text: string;
};

export const ReviewService = {
  async getAll() {
    return axiosClassic<IReview[]>({
      url: '/reviews',
      method: 'GET',
    });
  },

  async leaveReview(productId: string | number, data: TypeData) {
    return instance<IReview>({
      url: `/reviews/leave/${productId}`,
      method: 'POST',
      data,
    });
  },

  async getAverageByProductRating(productId: string | number) {
    return instance<number>({
      url: `/reviews/average-value/${productId}`,
      method: 'GET',
    });
  },
};
