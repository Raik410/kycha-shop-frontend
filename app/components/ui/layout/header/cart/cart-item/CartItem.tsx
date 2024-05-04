import { ICartItem } from '@/types/cart.interface';
import { convertPrice } from '@/utils/convert-price';
import Image from 'next/image';
import { FC } from 'react';
import CartActions from './CartActions';

const CartItem: FC<{ item: ICartItem }> = ({ item }) => {
  return (
    <div className="flex flex-col gap-4 bg-primary rounded-md p-5">
      <div className="flex items-center justify-between">
        <Image
          alt={item.product.name}
          width={100}
          height={100}
          src={item.product.images[0]}
          className="rounded-md"
        />
        <CartActions item={item} />
      </div>
      <div className="flex flex-col justify-between">
        <div className="">{item.product.name}</div>
        <div className="">
          Price: {convertPrice(item.product.price * item.quantity)}
        </div>
      </div>
    </div>
  );
};

export default CartItem;
