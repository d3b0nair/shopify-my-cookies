import {
  ArrowNarrowRightIcon,
  ArrowNarrowLeftIcon,
} from '@heroicons/react/outline';
import { useState } from 'react';
import { Paginator, ProductCard } from '..';
import { CookieFlavorsCarouselProps } from './CookieFlavorsCarousel.props';

export const CookieFlavorsCarousel = ({
  products,
  className,
  ...props
}: CookieFlavorsCarouselProps): JSX.Element => {
  const [index, setIndex] = useState<number>(2);
  const [grabbing, setGrabbing] = useState<boolean>(false);
  const transitionDuration = 300;

  function handleMouseDown(evt: React.MouseEvent<HTMLDivElement>) {
    const card = evt.currentTarget;
    const initialX = evt.clientX;
    let offset = 0;

    document.onmousemove = onMouseMove;
    document.onmouseup = onMouseUp;

    const preventOnClickEvent = () => {
      setGrabbing(true);
      setTimeout(() => setGrabbing(false), transitionDuration);
    };

    function onMouseMove(e: MouseEvent) {
      offset = e.clientX - initialX;
      if (offset <= -50) {
        slideRight();
        if (index === products.length - 1) {
          card.style.left = '0';
        }
        onMouseUp();
        return;
      }
      if (offset >= 50) {
        slideLeft();
        setGrabbing(true);
        if (index === 0) {
          card.style.left = '0';
        }
        onMouseUp();
        return;
      }
      card.style.left = `${offset}px`;
    }
    function onMouseUp() {
      preventOnClickEvent();
      const quickReleaseLeft = offset < 0 && offset > -50;
      const quickReleaseRight = offset > 0 && offset < 50;
      if (quickReleaseLeft || quickReleaseRight) {
        card.style.left = '0';
      }
      document.onmousemove = null;
      document.onmouseup = null;
    }
  }

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
    <div {...props} className={className ? className : ''}>
      <div
        style={{ transformStyle: 'preserve-3d' }}
        className="relative w-full h-[550px]"
      >
        <div
          tabIndex={0}
          className={`${IconContainerStyles} left-[-5%] 2xl:left-0`}
          onClick={slideLeft}
        >
          <ArrowNarrowLeftIcon
            className={arrowStyles}
            stroke=""
            strokeWidth={1}
          />
          <span className="sr-only">Previous Product</span>
        </div>
        {products.map((product, i) => {
          let position: string;
          if (Math.abs(index - i) < 2) {
            position =
              i === index ? 'activeCard' : i > index ? 'nextCard' : 'prevCard';
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
              transitionDuration={transitionDuration}
              onClick={() => {
                return !grabbing
                  ? position === 'prevCard'
                    ? slideLeft()
                    : position === 'nextCard'
                    ? slideRight()
                    : null
                  : null;
              }}
              handleMouseDown={
                position === 'activeCard'
                  ? handleMouseDown
                  : () => {
                      return;
                    }
              }
            />
          );
        })}
        <div
          tabIndex={0}
          className={`${IconContainerStyles} right-[-5%] 2xl:right-0`}
          onClick={slideRight}
        >
          <ArrowNarrowRightIcon
            stroke=""
            strokeWidth={1}
            className={arrowStyles}
          />
          <span className="sr-only">Next Product</span>
        </div>
      </div>
      <Paginator
        dataLength={products.length}
        activeIndex={index}
        selectProduct={setIndex}
        slideRight={slideRight}
        slideLeft={slideLeft}
      />
    </div>
  );
};
