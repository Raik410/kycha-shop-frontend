import Home from '@/components/screens/home/Home';
import { ProductService } from '@/service/product/product.service';
import { TypePaginationProducts } from '@/types/product.interface';
import Cookies from 'js-cookie';
import { GetStaticProps, NextPage } from 'next';

const HomePage: NextPage<TypePaginationProducts> = ({ products, length }) => {
  return <Home products={products} length={length} />;
};

export const getStaticProps: GetStaticProps<
  TypePaginationProducts
> = async () => {
  console.log(Cookies.get('refreshToken'), 'Cookies.get("refreshToken")');
  const { data } = await ProductService.getAll({
    page: 1,
    perPage: 4,
  });

  return {
    props: data,
  };
};

export default HomePage;
