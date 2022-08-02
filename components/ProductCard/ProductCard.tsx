import Link from 'next/link';
import Image from 'next/image';
import { floatToUSDCurrency } from '../../utils/helpers';
import { ProductCardProps } from './ProductCard.props';
import { RippleEffect } from '..';

export const ProductCard = ({
  product,
  className,
  ...props
}: ProductCardProps): JSX.Element => {
  const { handle, title } = product;
  const { url, altText } = product.images.edges[0].node;
  const price = floatToUSDCurrency(product.priceRange.minVariantPrice.amount);
  return (
    <Link href={`/products/${handle}`} {...props}>
      <a
        className={`${
          className ? className : ''
        } group text-primary hover:text-accent`}
      >
        <div className="w-full bg-offGrey rounded-3xl overflow-hidden">
          <div className="relative group-hover:opacity-75 group-active:opacity-60 h-72">
            <Image src={url} alt={altText} layout="fill" objectFit="cover" />
            <RippleEffect
              duration={800}
              bgColor={'bg-background'}
              rippleSize={100}
            />
          </div>
        </div>
        <h3 className="mt-4 text-lg font-medium">{title}</h3>
        <p className="mt-1 text-sm text-grey">{price}</p>
      </a>
    </Link>
  );
};
