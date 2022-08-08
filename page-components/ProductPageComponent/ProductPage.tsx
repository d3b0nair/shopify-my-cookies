import Image from 'next/image';
import { ProductForm } from '../../components';
import { ProductPageComponentProps } from './ProductPage.props';

export const ProductPageComponent = ({
  product,
  ...props
}: ProductPageComponentProps): JSX.Element => {
  return (
    <div
      className="grid grid-cols-[1fr] md:grid-cols-[1fr_1fr] max-w-[864px] gap-[20px] mx-auto mt-28 sm:mt-8 md:mt-0"
      {...props}
    >
      <div className="w-full rounded-2xl overflow-hidden shadow-2xl">
        <div className="h-[20rem] xs:h-[32rem] md:h-full relative">
          <Image
            src={product.images.edges[0].node.url}
            alt={product.images.edges[0].node.altText}
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
      <ProductForm product={product} />
    </div>
  );
};
