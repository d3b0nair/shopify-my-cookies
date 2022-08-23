import type { NextPage } from 'next';
import { getProductsInCollection } from '../lib/shopify';
import { HomePage } from '../page-components';
import { HomePageProps } from '../page-components/HomePageComponent/HomePage.props';

const Home: NextPage<HomePageProps> = ({ products }: HomePageProps): JSX.Element => {
  return <HomePage products={products} />;
};

export async function getStaticProps() {
  const products = await getProductsInCollection('best-sellers');
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
