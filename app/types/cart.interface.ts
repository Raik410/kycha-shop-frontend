import { IProduct } from './product.interface';

export interface ICart {
  id: number;
  product: IProduct;
  quantity: number;
  price: number;
}
