import { ProductPageComponentProps } from './ProductPage.props';

import dynamic from 'next/dynamic';
import { ProductPageImage } from '../../components';

const DynamicProductForm = dynamic(
  () => import('../../components/ProductForm/ProductForm')
);

export const ProductPageComponent = ({
  product,
  className,
  ...props
}: ProductPageComponentProps): JSX.Element => {
  const { altText, url } = product.images[0];
  return (
    <div
      className={`${
        className ? className : ''
      } grid grid-cols-[1fr] md:grid-cols-[1fr_1fr] max-w-[864px] gap-[20px] mx-auto mt-28`}
      {...props}
    >
      <ProductPageImage altText={altText} url={url} />
      <DynamicProductForm product={product} />
    </div>
  );
};
