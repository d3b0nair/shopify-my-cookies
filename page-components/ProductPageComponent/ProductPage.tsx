import Image from 'next/image';
import { ProductPageComponentProps } from './ProductPage.props';

import dynamic from 'next/dynamic';

const DynamicProductForm = dynamic(
  () => import('../../components/ProductForm/ProductForm')
);

export const ProductPageComponent = ({
  product,
  ...props
}: ProductPageComponentProps): JSX.Element => {
  const { altText, url } = product.images.edges[0].node;
  return (
    <div
      className="grid grid-cols-[1fr] md:grid-cols-[1fr_1fr] max-w-[864px] gap-[20px] mx-auto mt-28 sm:mt-8 md:mt-0"
      {...props}
    >
      <div className="w-full rounded-2xl overflow-hidden shadow-2xl">
        <div className="h-[20rem] xs:h-[32rem] md:h-full relative">
          <Image
            src={url}
            alt={altText ? altText : 'product image'}
            layout="fill"
            objectFit="cover"
            quality={80}
            priority
          />
        </div>
      </div>
      <DynamicProductForm product={product} />
    </div>
  );
};
