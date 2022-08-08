import Link from 'next/link';
import Image from 'next/image';
import { floatToUSDCurrency } from '../../utils/helpers';
import { ProductCardProps } from './ProductCard.props';
import { useEffect, useState } from 'react';

export const ProductCard = ({
  product,
  cardStyle,
  cardsLength,
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

  const middleOfCards = Math.round(cardsLength / 2);
  const removeNextCardOnSmallScreen =
    selectedCard === 0 || selectedCard === cardsLength - 1
      ? 'hidden sm:block'
      : '';
  const removePreviousCardOnSmallScreen =
    selectedCard === cardsLength || selectedCard === 1 ? 'hidden sm:block' : '';
  const scalePreviousCardOnSmallScree =
    middleOfCards > currentIndex
      ? 'scale-[105%]'
      : middleOfCards === currentIndex
      ? 'scale-[105%]'
      : 'scale-[110%]';
  const scaleNextCardOnSmallScree =
    middleOfCards > currentIndex
      ? 'scale-[105%]'
      : middleOfCards === currentIndex
      ? 'scale-[105%]'
      : 'scale-[110%]';

  const centerCardOnSmallScreen = `left-[50%] translate-x-[-50%]`;

  const globalSideCardStyle = `top-0 cursor-zoom-in sm:opacity-[0.4] hover:opacity-[1] sm:scale-[80%] hover:scale-[90%]`;

  const positionCardOnRight = `sm:left-[100%] sm:translate-x-[-100%] xl:left-[90%] xl:translate-x-[-90%] 2xl:left-[80%] 2xl:translate-x-[-80%]`;

  const positionCardOnLeft = `sm:left-[1%] sm:translate-x-[-1%] lg:left-[-1%] lg:translate-x-[-1%] xl:left-[11%] xl:translate-x-[-11%] 2xl:left-[20%] 2xl:translate-x-[-20%]`;

  const nextCardStyle = `${removeNextCardOnSmallScreen} ${centerCardOnSmallScreen} ${globalSideCardStyle} z-[1] sm:z-[2] ${scaleNextCardOnSmallScree} ${positionCardOnRight}`;

  const prevCardStyle = `${removePreviousCardOnSmallScreen} ${centerCardOnSmallScreen} ${globalSideCardStyle} z-[2] sm:z-[1] ${scalePreviousCardOnSmallScree} ${positionCardOnLeft}`;

  const activeCardStyle = `${centerCardOnSmallScreen} z-[3] scale-100 top-0 translate-y-[0] sm:top-[50px] cursor-grab active:cursor-grabbing`;

  const cardHiddenStyle = `z-[3] pointer-events-none scale-[80%] opacity-[0]	${
    direction ? `left-[200%] sm:left-[150%]` : `left-[-100%] sm:left-[-50%] transition-none`
  }`;

  const titleStyle = `mt-4 text-xl text-accent hover:text-accentLighter font-bold`;

  const cardSizeStyle = `h-[400px] sm:h-[450px] w-[250px] lg:h-[500px] lg:w-[300px]`;

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
      className={`${pickCardStyle} ${cardSizeStyle} absolute  transition-[left,top,scale,transform]`}
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
        <div
          className={`${cardSizeStyle} shadow-[0_35px_60px_-15px_#c9a197] rounded-2xl p-5 flex flex-col justify-between	bg-white select-none`}
        >
          <div className="w-full bg-offGrey rounded-3xl overflow-hidden">
            <div className="relative w-full min-h-[200px] sm:min-h-[250px]">
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
