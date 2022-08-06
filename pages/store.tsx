import type { NextPage } from 'next';
import { getProductsInCollection } from '../lib/shopify';
import { IProductModel } from '../interfaces/products.interface';
import { StorePage } from '../page-components/index';

const Store: NextPage<StoreProps> = ({
  products,
  ...props
}: StoreProps): JSX.Element => {
  return (
    <StorePage products={products} {...props} />
  );
};

export default Store;

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
export interface StoreProps extends Record<string, unknown> {
  products: Array<{ node: IProductModel }>;
}
