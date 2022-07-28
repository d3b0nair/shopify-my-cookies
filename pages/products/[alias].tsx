import { getAllProducts, getProduct } from '../../lib/shopify';
import type {
  GetStaticPaths,
  GetStaticProps,
  GetStaticPropsContext,
  NextPage,
} from 'next';
import { IProductModel } from '../../interfaces/products.interface';
import { ParsedUrlQuery } from 'querystring';
import { ProductPageComponent } from '../../page-components';

const ProductPage: NextPage<ProductPageProps> = ({
  selectedProduct,
}): JSX.Element => {
  return <ProductPageComponent product={selectedProduct} />;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const products = await getAllProducts();
  const paths = products.map((item) => {
    const productHandler = item.node.handle;
    return { params: { alias: productHandler.toString() } };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<ProductPageProps> = async ({
  params,
}: GetStaticPropsContext<ParsedUrlQuery>) => {
  if (!params || !params.alias) {
    return {
      notFound: true,
    };
  }
  const productHandle = params.alias;
  const selectedProduct = await getProduct(productHandle.toString());
  if (!selectedProduct) {
    return {
      notFound: true,
    };
  }
  return { props: { selectedProduct: selectedProduct } };
};

interface ProductPageProps {
  selectedProduct: IProductModel;
}

export default ProductPage;
