import Meta from '@/components/ui/Meta';
import CatalogFavorites from '@/components/ui/catalog/CatalogFavorites';
import Layout from '@/components/ui/layout/Layout';
import { useProfile } from '@/hooks/useProfile';
import { NextPage } from 'next';

const FavoritePage: NextPage = () => {
  const { profile } = useProfile();

  console.log(profile?.favorites, 'profile?.favorites');

  return (
    <Meta title="Favorites" description="This is your favorites">
      <Layout>
        <CatalogFavorites
          title="Favorites"
          data={profile?.favorites || []}
        ></CatalogFavorites>
      </Layout>
    </Meta>
  );
};

export default FavoritePage;
