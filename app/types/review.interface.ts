import { IProduct } from './product.interface';
import { IUser } from './user.interface';

export interface IReview {
  id: number;
  text: string;
  rating: number;
  createdAt: Date;
  product: IProduct;
  user: IUser;
}
