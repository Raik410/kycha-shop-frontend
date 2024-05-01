import { IProduct } from '@/types/product.interface';
import { title } from 'process';
import { FC } from 'react';
import Heading from '../Heading';
import Loader from '../loader/Loader';
import ProductItem from './product-item/ProductItem';

interface ICatalog {
  products: IProduct[];
  isLoading?: boolean;
  title?: string;
}

const Catalog: FC<ICatalog> = ({ products, isLoading }) => {
  if (isLoading) return <Loader />;

  return (
    <section>
      {title && <Heading>{title}</Heading>}
      {products.length > 0 ? (
        <div className="grid grid-cols-4 gap-10">
          {products.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <p>No products</p>
      )}
    </section>
  );
};

export default Catalog;
