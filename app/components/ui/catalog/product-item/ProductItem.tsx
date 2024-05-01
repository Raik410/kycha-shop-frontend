import { IProduct } from '@/types/product.interface';
import { convertPrice } from '@/utils/convert-price';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import AddToCardButton from './AddToCardButton';
import ProductRating from './ProductRating';

const DynamicFavoriteButton = dynamic(() => import('./FavoriteButton'), {
  ssr: false,
});

const ProductItem: FC<{ product: IProduct }> = ({ product }) => {
  return (
    <div>
      <div className="bg-white rounded-xl relative overflow-hidden p-3">
        <div className="absolute top-2 right-2 z-10">
          <DynamicFavoriteButton productId={product.id} />
          <AddToCardButton product={product} />
        </div>
        <Link href={`/product/${product.category.slug}`}>
          <Image
            className="rounded-md overflow-hidden"
            width={300}
            height={300}
            src={product.images[0]}
            alt={product.name}
          ></Image>
          <div className="mb-1">{product.name}</div>
        </Link>
        <Link
          href={`category/${product.category.slug}`}
          className="text-blue test-sm mb-2"
        >
          {product.category.name}
        </Link>
        <ProductRating product={product} />
        <div className="text-2xl font-semibold text-center">
          {convertPrice(product.price)}
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
