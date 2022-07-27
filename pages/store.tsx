import type { NextPage } from 'next';
import { getProductsInCollection } from '../lib/shopify';
import { IProductModel } from '../interfaces/products.interface';
import { StorePage } from '../page-components/index';

const Home: NextPage<HomeProps> = ({ products }: HomeProps): JSX.Element => {
  return <StorePage products={products} />;
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

export interface HomeProps {
  products: Array<{ node: IProductModel }>;
}
