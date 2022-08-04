import Link from 'next/link';
import Image from 'next/image';
import { floatToUSDCurrency } from '../../utils/helpers';
import { ProductCardProps } from './ProductCard.props';
import { useEffect, useState } from 'react';

export const ProductCard = ({
  product,
  cardStyle,
  currentIndex,
  selectedCard,
  className,
  ...props
}: ProductCardProps): JSX.Element => {
  const [direction, setDirection] = useState(false);
  const { handle, title, description } = product;
  const { url, altText } = product.images.edges[0].node;
  const price = floatToUSDCurrency(product.priceRange.minVariantPrice.amount);
  useEffect(() => {
    selectedCard > currentIndex ? setDirection(false) : setDirection(true);
  }, [currentIndex, direction, selectedCard]);

  const prevCardStyle =
    'bottom-0 z-[1] opacity-[0.4] hover:opacity-[1] scale-[80%] hover:scale-[90%] bottom-[100px] translate-y-[0] right-[100%] translate-x-[100%] xl:right-[90%] xl:translate-x-[90%] 2xl:right-[80%] 2xl:translate-x-[80%]';
  const nextCardStyle =
    'z-[1] opacity-[0.4] hover:opacity-[1] scale-[80%] hover:scale-[90%] bottom-[100px] translate-y-[0] right-[1%] translate-x-[1%] lg:right-[1%] lg:translate-x-[1%] xl:right-[11%] xl:translate-x-[11%] 2xl:right-[20%] 2xl:translate-x-[20%]';
  const activeCardStyle =
    'z-[2] opacity-1 right-[50%] scale-100 translate-x-[50%] bottom-[60px] translate-y-[30px]';
  const cardHiddenStyle = `z-[2] opacity-[0] pointer-events-none scale-75	${
    direction ? 'right-[150%]' : 'right-[-50%]'
  }`;

  const pickCardStyle =
    cardStyle === 'hidden'
      ? cardHiddenStyle
      : cardStyle === 'prevCard'
      ? prevCardStyle
      : cardStyle === 'nextCard'
      ? nextCardStyle
      : activeCardStyle;
  return (
    <Link href={`/products/${handle}`}>
      <a
        className={`${
          className ? className : ''
        } text-primary hover:text-accent absolute transition-[right,bottom,transform,scale] lg:transition-all duration-500 lg:duration-[650ms]  ${pickCardStyle}`}
        {...props}
      >
        <div className="shadow-[0_35px_60px_-15px_#c9a197] rounded-2xl p-5 flex flex-col justify-between	bg-white h-[500px] w-[300px] select-none">
          <div className="w-full bg-offGrey rounded-3xl overflow-hidden">
            <div className="relative group-hover:opacity-75 group-active:opacity-60 w-full min-h-[250px]">
              <Image src={url} alt={altText} layout="fill" objectFit="cover" />
            </div>
          </div>
          <h3 className="mt-4 text-xl text-accent  font-bold">{title}</h3>
          <p className="mt-2 text-sm text-darkestGrey">{description}</p>
          <p className="mt-2 text-xl text-grey font-bold">{price}+</p>
        </div>
      </a>
    </Link>
  );
};
