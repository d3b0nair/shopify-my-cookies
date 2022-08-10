import Link from 'next/link';
import Image from 'next/image';
import { floatToUSDCurrency } from '../../utils/helpers';
import { ProductCardProps } from './ProductCard.props';
import { useEffect, useState } from 'react';
import { createProductCardClasses } from './ProductCard.classes';

export const ProductCard = ({
  isSmallSize,
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
  const [directionOfHiddenCard, setDirectionOfHiddenCard] = useState<
    'left' | 'right'
  >('right');

  useEffect(() => {
    selectedCard > currentIndex
      ? setDirectionOfHiddenCard('left')
      : setDirectionOfHiddenCard('right');
  }, [currentIndex, directionOfHiddenCard, selectedCard]);

  const { handle, title, description } = product;
  const { url, altText } = product.images.edges[0].node;

  const price = floatToUSDCurrency(product.priceRange.minVariantPrice.amount);

  const cardClasses = createProductCardClasses(
    cardStyle,
    selectedCard,
    cardsLength,
    currentIndex,
    directionOfHiddenCard,
    isSmallSize
  );

  return (
    <article
      tabIndex={cardStyle !== 'hidden' ? 0 : -1}
      style={{ transitionDuration: `${transitionDuration}ms` }}
      className={`${cardClasses.selectCardTypeClass} ${cardClasses.setCardSizeClass} absolute select-none transition-[left,top,scale,transform,opacity]`}
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
          className={`${cardClasses.setCardSizeClass} shadow-[0_35px_60px_-15px_#c9a197] rounded-2xl p-5 flex flex-col justify-between	bg-white`}
        >
          <div className="w-full bg-offGrey rounded-3xl overflow-hidden">
            <div className={`relative w-full ${cardClasses.setImageSizeClass}`}>
              <Image
                draggable="false"
                className="pointer-events-none"
                src={url}
                alt={altText ? altText : 'product image'}
                layout="fill"
                objectFit="cover"
                quality={
                  cardStyle === 'activeCard' ? (isSmallSize ? 40 : 80) : 1
                }
                priority={
                  cardStyle === 'activeCard'
                    ? isSmallSize
                      ? false
                      : true
                    : false
                }
              />
            </div>
          </div>
          {cardStyle === 'activeCard' ? (
            <Link href={`/products/${handle}`}>
              <h3 className={`${cardClasses.titleClass} cursor-pointer`}>
                {title}
              </h3>
            </Link>
          ) : (
            <h3 className={`${cardClasses.titleClass}`}>{title}</h3>
          )}
          {!isSmallSize ? (
            <p className="mt-2 text-sm text-darkestGrey">{description}</p>
          ) : null}
          <p
            className={`${
              isSmallSize ? 'text-md' : 'text-xl mt-2'
            } text-grey font-bold`}
          >
            {price}+
          </p>
        </div>
      </div>
    </article>
  );
};
export default ProductCard;
