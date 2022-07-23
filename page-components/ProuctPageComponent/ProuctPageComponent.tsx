import { ProductPageProps } from '../../pages/products/[product]';

export const ProductPageComponent = ({
  product,
}: ProductPageComponentProps): JSX.Element => {

  return <div>{product && product.title}</div>;
};

export interface ProductPageComponentProps extends ProductPageProps {}
