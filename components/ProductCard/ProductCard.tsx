import Link from 'next/link';
import Image from 'next/image';
import { floatToUSDCurrency } from '../../utils/helpers';
import { ProductCardProps } from './ProductCard.props';


export const ProductCard = ({ product }: ProductCardProps): JSX.Element => {
  const { handle, title } = product;
  const { url, altText } = product.images.edges[0].node;
  const price = floatToUSDCurrency(product.priceRange.minVariantPrice.amount);
  return (
    <Link href={`/products/${handle}`}>
      <a className="group text-primary hover:text-accent">
        <div className="w-full bg-offGrey rounded-3xl overflow-hidden">
          <div className="relative group-hover:opacity-75 h-72">
            <Image
              src={url}
              alt={altText}
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
        <h3 className="mt-4 text-lg font-medium">{title}</h3>
        <p className="mt-1 text-sm text-grey">{price}</p>
      </a>
    </Link>
  );
};
