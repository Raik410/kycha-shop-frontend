import Link from 'next/link';
import { FC } from 'react';
import { CiHeart, CiShop } from 'react-icons/ci';
import HeaderCart from './HeaderCart';

const Header: FC = () => {
  return (
    <header className="bg-secondary w-full p-5 grid grid-cols-[1fr_2fr_1fr] items-center">
      <Link className="justify-self-center" href={'/'}>
        <CiShop className="justify-self-center" size={50} color="white" />
      </Link>
      <div></div>
      <div className="grid grid-cols-3 justify-items-center gap-3">
        <Link href={'/favorites'}>
          <CiHeart size={40} color="white" />
        </Link>
        <HeaderCart />
      </div>
      {/* <HeaderProfile /> */}
    </header>
  );
};

export default Header;
