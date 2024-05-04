import { useCart } from '@/hooks/useCart';
import { useOutside } from '@/hooks/useOutside';
import { convertPrice } from '@/utils/convert-price';
import cn from 'clsx';
import { FC } from 'react';
import { RiShoppingCartLine } from 'react-icons/ri';
import Button from '../../button/Button';
import SquareButton from '../../button/SquareButton';
import CartItem from './cart/cart-item/CartItem';

const HeaderCart: FC = () => {
  const { isShow, setIsShow, ref } = useOutside(false);

  const { items, total } = useCart();

  // const { push } = useRouter;

  return (
    <div className="relative" ref={ref}>
      <SquareButton
        Icon={RiShoppingCartLine}
        onClick={() => setIsShow(!isShow)}
        number={items.length}
      />
      <div
        className={cn(
          'absolute top-[4.2rem] w-80 -left-[12.5rem] bg-secondary rounded-xl px-5 py-3 text-sm menu z-20 text-white',
          isShow ? 'block' : 'hidden',
        )}
      >
        <div className="font-normal text-lg mb-5">My cart</div>
        <div className="grid grid-cols-1fr grid-rows-1 gap-y-4">
          {items.length ? (
            items.map((item) => {
              return <CartItem key={item.id} item={item} />;
            })
          ) : (
            <div>Cart is empty</div>
          )}
        </div>

        <div className="pt-4">
          <div>Total: </div>
          <div>{convertPrice(total)}</div>
        </div>
        <div className="text-center">
          <Button variant="light" className="btn-link mt-5 mb-2">
            Place order
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeaderCart;
