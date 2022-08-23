import {
  getAllProducts,
  getProduct,
  getRecomendedProducts,
} from '../../lib/shopify';
import type {
  GetStaticPaths,
  GetStaticProps,
  GetStaticPropsContext,
  NextPage,
} from 'next';
import { ParsedUrlQuery } from 'querystring';
import { ProductPageComponent } from '../../page-components';
import { RecommendedList } from '../../components';
import { IProduct } from '../../interfaces/products.interface';

const ProductPage: NextPage<ProductPageProps> = ({
  selectedProduct,
  recomendedProducts,
}): JSX.Element => {
  return (
    <div className="flex flex-col">
      <ProductPageComponent product={selectedProduct} />
      <RecommendedList
        selectedProduct={selectedProduct}
        recomendedProducts={recomendedProducts}
      />
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const products = await getAllProducts();
  const paths = products.map((item) => {
    const productHandler = item.handle;
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
  const recommendedProductsList = await getRecomendedProducts(
    productHandle.toString()
  );
  const selectedProduct = await getProduct(productHandle.toString());
  if (!selectedProduct || !recommendedProductsList) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      selectedProduct: selectedProduct,
      recomendedProducts: recommendedProductsList,
    },
  };
};

interface ProductPageProps extends Record<string, unknown> {
  selectedProduct: IProduct;
  recomendedProducts: Omit<IProduct, 'variants' | 'options'>[];
}

export default ProductPage;
