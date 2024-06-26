import { useActions } from '@/hooks/useActions';
import { useCart } from '@/hooks/useCart';
import { ICartItem } from '@/types/cart.interface';
import { FC } from 'react';
import { FiMinus, FiPlus, FiTrash } from 'react-icons/fi';

const CartActions: FC<{ item: ICartItem }> = ({ item }) => {
  const { removeFromCart, changeQuantity } = useActions();
  const { items } = useCart();
  const quantity = items.find((cartItem) => cartItem.id === item.id)?.quantity;
  return (
    <div className="mt-3 flex items-center">
      <div className="flex items-center gap-2 m-0">
        <button onClick={() => changeQuantity({ id: item.id, type: 'minus' })}>
          <FiMinus fontSize={13} />
        </button>

        <input
          disabled
          readOnly
          value={quantity}
          className="w-10 bg-black text-center"
        />

        <button onClick={() => changeQuantity({ id: item.id, type: 'plus' })}>
          <FiPlus fontSize={13} />
        </button>

        <button
          onClick={() => removeFromCart({ id: item.id })}
          className="ml-3 text-primary"
        >
          <FiTrash fontSize={13} />
        </button>
      </div>
    </div>
  );
};

export default CartActions;
