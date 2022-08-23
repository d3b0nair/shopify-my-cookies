import type { NextPage } from 'next';
import { getAllCollections } from '../lib/shopify';
import { StorePage } from '../page-components/index';
import { StorePageProps } from '../page-components/StorePageComponent/StorePage.props';

const Store: NextPage<StorePageProps> = ({
  collections,
  ...props
}: StorePageProps): JSX.Element => {
  return <StorePage collections={collections} {...props} />;
};

export default Store;

export async function getStaticProps() {
  const collections = await getAllCollections();
  if (!collections) {
    return {
      notFound: true,
    };
  }
  return {
    props: { collections },
  };
}
