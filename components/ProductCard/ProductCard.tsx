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
  onPointerEvent,
  transitionDuration,
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

  const nextCardStyle =
    'cursor-zoom-in	bottom-0 opacity-[0.8] sm:opacity-[0.4] hover:opacity-[1] z-[2] scale-[80%] hover:scale-[90%] bottom-[100px] translate-y-[0] left-[100%] translate-x-[-100%] xl:left-[90%] xl:translate-x-[-90%] 2xl:left-[80%] 2xl:translate-x-[-80%]';

  const prevCardStyle =
    'cursor-zoom-in	z-[1] opacity-[0.4] hover:opacity-[1] scale-[80%] hover:scale-[90%] bottom-[100px] translate-y-[0] left-[1%] translate-x-[-1%] lg:left-[-1%] lg:translate-x-[-1%] xl:left-[11%] xl:translate-x-[-11%] 2xl:left-[20%] 2xl:translate-x-[-20%]';

  const activeCardStyle =
    'z-[3] left-[50%] scale-100 translate-x-[-50%] bottom-[60px] translate-y-[30px] cursor-grab active:cursor-grabbing';

  const cardHiddenStyle = `z-[3] pointer-events-none scale-75 opacity-[0.4]	${
    direction ? 'left-[200%] sm:left-[150%]' : 'left-[-100%] sm:left-[-50%]'
  }`;

  const titleStyle =
    'mt-4 text-xl text-accent hover:text-accentLighter font-bold ';

  const pickCardStyle =
    cardStyle === 'hidden'
      ? cardHiddenStyle
      : cardStyle === 'prevCard'
      ? prevCardStyle
      : cardStyle === 'nextCard'
      ? nextCardStyle
      : activeCardStyle;

  return (
    <article
      tabIndex={cardStyle !== 'hidden' ? 0 : -1}
      style={{ transitionDuration: `${transitionDuration}ms` }}
      className={`${pickCardStyle} absolute h-[500px] w-[300px] transition-[left,bottom,scale,transform]`}
      {...props}
    >
      <div
        style={{ transitionProperty: 'left' }}
        onMouseDown={onPointerEvent}
        onTouchStart={onPointerEvent}
        className={`${
          className ? className : ''
        } text-primary hover:text-accent absolute`}
      >
        <div className="shadow-[0_35px_60px_-15px_#c9a197] rounded-2xl p-5 flex flex-col justify-between	bg-white h-[500px] w-[300px] select-none">
          <div className="w-full bg-offGrey rounded-3xl overflow-hidden">
            <div className="relative group-hover:opacity-75 group-active:opacity-60 w-full min-h-[250px]">
              <Image
                className="pointer-events-none"
                src={url}
                alt={altText}
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
          {cardStyle === 'activeCard' ? (
            <Link href={`/products/${handle}`}>
              <h3 className={`${titleStyle} cursor-pointer`}>{title}</h3>
            </Link>
          ) : (
            <h3 className={`${titleStyle}`}>{title}</h3>
          )}
          <p className="mt-2 text-sm text-darkestGrey">{description}</p>
          <p className="mt-2 text-xl text-grey font-bold">{price}+</p>
        </div>
      </div>
    </article>
  );
};
