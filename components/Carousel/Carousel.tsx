import { Paginator, ProductCard, CarouselSliderButton } from '..';
import useCarousel from '../../hooks/useCarousel';
import { CarouselProps } from './Carousel.props';

export const Carousel = ({
  products,
  isSmallSize,
  className,
  ...props
}: CarouselProps): JSX.Element => {
  const transitionDuration = 300;
  const [isGrabbing, handleEventFunction, selectedElement, slideTo] =
    useCarousel(products.length, transitionDuration);

  return (
    <div {...props} className={`${className ? className : ''}`}>
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
            if (Math.abs(selectedElement.index - i) < 2) {
              position =
                i === selectedElement.index
                  ? 'activeCard'
                  : i > selectedElement.index
                  ? 'nextCard'
                  : 'prevCard';
            } else {
              position = 'hidden';
            }
            return (
              <ProductCard
                isSmallSize={isSmallSize}
                currentIndex={i}
                selectedCard={selectedElement.index}
                cardsLength={products.length - 1}
                cardStyle={position}
                key={product.node.id}
                product={product.node}
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
          activeIndex={selectedElement.index}
          selectProduct={selectedElement.setIndex}
          slideRight={() => slideTo('right')}
          slideLeft={() => slideTo('left')}
          isSmallSize={isSmallSize}
        />
      </div>
    </div>
  );
};
