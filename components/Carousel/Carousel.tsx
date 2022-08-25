import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import { CarouselSliderButton, Paginator } from '..';
import useCarousel from '../../hooks/useCarousel';
import { CarouselProps } from './Carousel.props';

const DynamicProductCard = dynamic(
  () => import('../../components/ProductCard/ProductCard'),
  {
    suspense: true,
  }
);

export const Carousel = ({
  products,
  isSmallSize,
  className,
  ...props
}: CarouselProps): JSX.Element => {
  const transitionDuration = 300;
  const [isGrabbing, handleEventFunction, selectedElement, slideTo] =
    useCarousel(products.length, transitionDuration);
  const { index, setIndex } = selectedElement;

  return (
    <div
      {...props}
      className={`${
        className ? className : ''
      }`}
    >
      <div className={`${isSmallSize ? ' max-w-[864px] mx-auto' : ''}`}>
        <div
          style={{ transformStyle: 'preserve-3d' }}
          className={`relative w-full select-none ${
            isSmallSize ? 'h-[350px]' : 'h-[450px] sm:h-[500px] lg:h-[550px]'
          } `}
        >
          <CarouselSliderButton
            action={() => slideTo('left')}
            direction={'left'}
            isSmallSize={isSmallSize}
          />
          {products.map((product, i) => {
            let position: 'activeCard' | 'prevCard' | 'nextCard' | 'hidden';
            if (products.length === 1) {
              position = 'activeCard';
            } else if (Math.abs(index - i) < 2) {
              position =
                i === index
                  ? 'activeCard'
                  : i > index
                  ? 'nextCard'
                  : 'prevCard';
            } else {
              position = 'hidden';
            }
            return (
              <Suspense key={`suspense-${product.id}`} fallback={`Loading...`}>
                <DynamicProductCard
                  isSmallSize={isSmallSize}
                  currentIndex={i}
                  selectedCard={index}
                  cardsLength={products.length - 1}
                  cardStyle={position}
                  key={`productCard-${product.id}`}
                  product={product}
                  transitionDuration={transitionDuration}
                  onClick={() => {
                    return !isGrabbing
                      ? position === 'prevCard'
                        ? slideTo('left')
                        : position === 'nextCard'
                        ? slideTo('right')
                        : null
                      : null;
                  }}
                  onPointerEvent={
                    position === 'activeCard'
                      ? handleEventFunction
                      : () => {
                          return;
                        }
                  }
                />
              </Suspense>
            );
          })}
          <CarouselSliderButton
            action={() => slideTo('right')}
            direction={'right'}
            isSmallSize={isSmallSize}
          />
        </div>
        <Paginator
          dataLength={products.length}
          activeIndex={index}
          selectProduct={setIndex}
          slideRight={() => slideTo('right')}
          slideLeft={() => slideTo('left')}
          isSmallSize={isSmallSize}
        />
      </div>
    </div>
  );
};
export default Carousel;
