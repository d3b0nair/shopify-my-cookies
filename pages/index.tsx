import type { NextPage } from 'next';
import Head from 'next/head';
import { getProductsInCollection } from '../lib/shopify';
import { ProductCollectionNode } from '../interfaces/collection.interface';
import { ProductList } from '../components';

const Home: NextPage<HomeProps> = ({ products }: HomeProps): JSX.Element => {
  return (
    <div>
      <ProductList products={products} />
    </div>
  );
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
  products: ProductCollectionNode[];
}
