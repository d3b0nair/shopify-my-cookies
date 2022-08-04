import {
  ArrowNarrowRightIcon,
  ArrowNarrowLeftIcon,
} from '@heroicons/react/outline';
import { useState } from 'react';
import { ProductCard } from '..';
import { CookieFlavorsCarouselProps } from './CookieFlavorsCarousel.props';

export const CookieFlavorsCarousel = ({
  products,
  className,
  ...props
}: CookieFlavorsCarouselProps): JSX.Element => {
  const [index, setIndex] = useState(Math.round(products.length / 2));
  const slideLeft = () => {
    if (index - 1 >= 0) {
      setIndex(index - 1);
    }
  };

  const slideRight = () => {
    if (index + 1 <= products.length - 1) {
      setIndex(index + 1);
    }
  };

  const arrowStyles =
    'h-10 w-[60px] lg:h-20 xl:h-28 xl:w-28 my-4 stroke-primary cursor-pointer hover:stroke-accent';

  const IconContainerStyles =
    'hidden md:block absolute top-[50%] -translate-y-2/4 z-30';
  return (
    <div
      style={{ transformStyle: 'preserve-3d' }}
      className={`${className ? className : ''} relative w-full h-[550px]`}
      {...props}
    >
      <div
        className={`${IconContainerStyles} left-[-5%] 2xl:left-0`}
        onClick={slideLeft}
      >
        <ArrowNarrowLeftIcon
          className={arrowStyles}
          stroke=""
          strokeWidth={1}
        />
      </div>
      {products.map((product, i) => {
        let position: string;
        if (Math.abs(index - i) < 2) {
          position =
            i === index ? 'activeCard' : i > index ? 'prevCard' : 'nextCard';
        } else {
          position = 'hidden';
        }
        return (
          <ProductCard
            currentIndex={i}
            selectedCard={index}
            cardStyle={position}
            key={product.node.id}
            product={product.node}
          />
        );
      })}
      <div
        className={`${IconContainerStyles} right-[-5%] 2xl:right-0`}
        onClick={slideRight}
      >
        <ArrowNarrowRightIcon
          stroke=""
          strokeWidth={1}
          className={arrowStyles}
        />
      </div>
    </div>
  );
};
