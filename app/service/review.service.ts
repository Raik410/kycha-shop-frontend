import { instance } from '@/api/api.interceptor';
import { IReview } from '@/types/review.interface';

type TypeData = {
  raiting: number;
  text: string;
};

export const ReviewService = {
  async getAll() {
    return instance<IReview[]>({
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
};
