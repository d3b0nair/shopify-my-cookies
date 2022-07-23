import { getAllProducts, getProduct } from '../../lib/shopify';
import type { GetStaticProps } from 'next';
import {
  ProductModel,
  ProductsEdges,
} from '../../interfaces/products.interface';
import { ParsedUrlQuery } from 'querystring';
import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { ProductPageComponent } from '../../page-components';

export default function ProductPage({
  product,
}: ProductPageProps): JSX.Element {
  return (
    <div>
      <ProductPageComponent product={product} />
    </div>
  );
}

export async function getStaticPaths() {
  const products: ProductsEdges[] = await getAllProducts();

  const paths = products.map((item) => {
    const product = String(item.node.handle);
    return { params: { product } };
  });

  return {
    paths,
    fallback: true,
  };
}

export const getStaticProps: GetStaticProps<ProductPageProps, Params> = async ({
  params,
}) => {
  if (!params) {
    return {
      notFound: true,
    };
  }

  const productHandler = params.product;
  const product = await getProduct(productHandler);
  if (!product) {
    return {
      notFound: true,
    };
  }
  return { props: { product } };
};

export interface ProductPageProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  product?: ProductModel;
}

interface Params extends ParsedUrlQuery {
  product: string;
}
