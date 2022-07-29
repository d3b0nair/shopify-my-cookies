import type { NextPage } from 'next';
import { getProductsInCollection } from '../lib/shopify';
import { HomePage } from '../page-components';
import { StoreProps } from './store';

const Home: NextPage<StoreProps> = ({ products }: StoreProps): JSX.Element => {
  return <HomePage products={products} />;
};

export async function getStaticProps() {
  const products = await getProductsInCollection();
  if (!products) {
    return {
      notFound: true,
    };
  }
  return {
    props: { products },
  };
}

export default Home;
