import { ICategory } from './category.interface';
import { IReview } from './review.interface';

export interface IProduct {
  id: number;
  name: string;
  slug: string;
  description: string;
  images: string[];
  reviews: IReview[];
  category: ICategory;
  price: number;
  createdAt: Date;
}

export interface IProductDetails {
  product: IProduct;
}

export type TypeProducts = {
  products: IProduct[];
};

export type TypePaginationProducts = {
  length: number;
  products: IProduct[];
  allProductLength?: number;
};
