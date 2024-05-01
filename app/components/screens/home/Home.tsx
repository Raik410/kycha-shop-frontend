import Heading from '@/components/ui/Heading';
import Meta from '@/components/ui/Meta';
import Catalog from '@/components/ui/catalog/Catalog';
import Layout from '@/components/ui/layout/Layout';
import { TypePaginationProducts } from '@/types/product.interface';
import { FC } from 'react';

const Home: FC<TypePaginationProducts> = ({ products, length }) => {
  return (
    <Meta title="Home" description="bla">
      <Layout>
        <Heading>Darova</Heading>
        <Catalog title="New products" products={products || []} />
      </Layout>
    </Meta>
  );
};

export default Home;
