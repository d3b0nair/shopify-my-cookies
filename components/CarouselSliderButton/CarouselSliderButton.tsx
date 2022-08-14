import {
  ArrowNarrowRightIcon,
  ArrowNarrowLeftIcon,
} from '@heroicons/react/outline';
import { CarouselSliderButtonProps } from './CarouselSliderButton.props';

export const CarouselSliderButton = ({
  action,
  direction,
  isSmallSize,
}: CarouselSliderButtonProps) => {
  const arrowStyles = `
    ${
      isSmallSize ? 'hidden' : 'h-10 w-[60px] lg:h-20 xl:h-28 xl:w-28'
    }  my-4 stroke-primary cursor-pointer hover:stroke-accent active:stroke-accentLighter transition-colors`;
  const IconContainerStyles =
    'hidden md:block absolute top-[50%] -translate-y-2/4 z-30';

  const thisDirectionToStyle =
    direction === 'right' ? 'right-[-5%] 2xl:right-0' : 'left-[-5%] 2xl:left-0';
  return (
    <div
      tabIndex={0}
      className={`${IconContainerStyles} ${thisDirectionToStyle}`}
      onClick={action}
    >
      {direction === 'left' ? (
        <ArrowNarrowLeftIcon
          className={arrowStyles}
          stroke=""
          strokeWidth={1}
        />
      ) : (
        <ArrowNarrowRightIcon
          className={arrowStyles}
          stroke=""
          strokeWidth={1}
        />
      )}
      {direction === 'left' ? (
        <span className="sr-only">Previous Product</span>
      ) : (
        <span className="sr-only">Next Product</span>
      )}
    </div>
  );
};
