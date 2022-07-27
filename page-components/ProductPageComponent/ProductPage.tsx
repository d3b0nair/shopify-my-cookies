import Image from 'next/image';
import { ProductForm } from '../../components';
import { ProductPageComponentProps } from './ProductPage.props';

export const ProductPageComponent = ({
  product,
  ...props
}: ProductPageComponentProps): JSX.Element => {
  return (
    <div
      className="flex flex-col justify-center items-center space-y-8 md:flex-row md:items-start md:space-y-0 md:space-x-4 lg:space-x-8 max-w-6xl w-11/12 mx-auto"
      {...props}
    >
      <div className="w-full max-w-md rounded-2xl overflow-hidden shadow-2xl md:w-1/2">
        <div className="relative h-[24rem] w-full">
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