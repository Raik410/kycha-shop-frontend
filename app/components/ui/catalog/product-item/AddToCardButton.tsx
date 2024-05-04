import { useActions } from '@/hooks/useActions';
import { useCart } from '@/hooks/useCart';
import { IProduct } from '@/types/product.interface';
import { FC } from 'react';
import { PiShoppingCartFill, PiShoppingCartLight } from 'react-icons/pi';

const AddToCardButton: FC<{ product: IProduct }> = ({ product }) => {
  const { addToCart, removeFromCart } = useActions();
  const { items } = useCart();

  const currentElement = items.find((cartItem) => {
    return cartItem.product.id === product.id;
  });

  return (
    <div>
      <button
        className="text-primary"
        onClick={() =>
          currentElement
            ? removeFromCart({ id: currentElement.id })
            : addToCart({
                product,
                quantity: 1,
                price: product.price,
              })
        }
      >
        {currentElement ? (
          <PiShoppingCartFill size={20} />
        ) : (
          <PiShoppingCartLight size={20} />
        )}
      </button>
    </div>
  );
};

export default AddToCardButton;
