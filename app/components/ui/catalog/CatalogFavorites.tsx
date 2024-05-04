import { EnumProductSort } from '@/service/product/product.types';
import { IProduct } from '@/types/product.interface';
import { FC, useState } from 'react';
import Heading from '../Heading';
import Loader from '../loader/Loader';
import SortDropDown from './SortDropDown';
import ProductItem from './product-item/ProductItem';

interface ICatalogFavorites {
  data: IProduct[];
  isLoading?: boolean;
  title?: string;
}

const CatalogFavorites: FC<ICatalogFavorites> = ({
  data,
  isLoading,
  title,
}) => {
  const [sortType, setSortType] = useState<EnumProductSort>(
    EnumProductSort.NEWEST,
  );

  if (isLoading) return <Loader />;

  return (
    <section className="flex flex-col">
      {title && <Heading>{title}</Heading>}

      <SortDropDown sortType={sortType} setSortType={setSortType} />
      {data.length > 0 ? (
        <ul className="grid grid-cols-4 gap-10">
          {data.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
        </ul>
      ) : (
        <p>No products</p>
      )}
    </section>
  );
};

export default CatalogFavorites;
