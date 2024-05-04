import { ProductService } from '@/service/product/product.service';
import { EnumProductSort } from '@/service/product/product.types';
import { TypePaginationProducts } from '@/types/product.interface';
import { useQuery } from '@tanstack/react-query';
import { FC, useState } from 'react';
import Heading from '../Heading';
import Button from '../button/Button';
import Loader from '../loader/Loader';
import SortDropDown from './SortDropDown';
import ProductItem from './product-item/ProductItem';

interface ICatalog {
  data: TypePaginationProducts;
  isLoading?: boolean;
  title?: string;
  isPagination?: boolean;
}

const Catalog: FC<ICatalog> = ({
  data,
  isLoading,
  title,
  isPagination = false,
}) => {
  const [sortType, setSortType] = useState<EnumProductSort>(
    EnumProductSort.NEWEST,
  );
  const [page, setPage] = useState<number>(1);

  const { data: responce } = useQuery({
    queryKey: ['products', sortType, page],
    queryFn: () => {
      return ProductService.getAll({
        page,
        perPage: 4,
        sort: sortType,
      });
    },
    initialData: data,
  });

  if (isLoading) return <Loader />;

  return (
    <section className="flex flex-col">
      {title && <Heading>{title}</Heading>}

      {isPagination && (
        <SortDropDown sortType={sortType} setSortType={setSortType} />
      )}
      {responce.products.length > 0 ? (
        <>
          <ul className="grid grid-cols-4 gap-10">
            {responce.products.map((product) => (
              <ProductItem key={product.id} product={product} />
            ))}
          </ul>
          <div className="text-center flex justify-center gap-3">
            {Array.from({
              length: Math.ceil(responce.allProductLength! / 4),
            }).map((_, index) => {
              const pageNumber = index + 1;
              return (
                <Button
                  className="mt-8 self-center"
                  variant={page === pageNumber ? 'dark' : 'light'}
                  onClick={() => setPage(pageNumber)}
                  key={pageNumber}
                >
                  {pageNumber}
                </Button>
              );
            })}
          </div>
        </>
      ) : (
        <p>No products</p>
      )}
    </section>
  );
};

export default Catalog;
