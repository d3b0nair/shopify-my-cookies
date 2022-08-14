import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline';

import { PaginatorProps } from './Paginator.props';

export const Paginator = ({
  dataLength,
  activeIndex,
  selectProduct,
  slideLeft,
  slideRight,
  isSmallSize,
}: PaginatorProps) => {
  const iconSize = 'h-4 w-4';
  const defaultClasses = `${
    isSmallSize ? 'py-1 px-2' : 'py-2 px-3'
  } leading-tight  cursor-pointer border border-gray-300`;
  const arrowAdditionalClasses = `flex flex-col justify-center`;
  const standartDot =
    'text-gray-500 bg-white hover:bg-gray-100 active:bg-gray-200 hover:text-gray-700';

  const dots = [];

  for (let index = 0; index < dataLength; index++) {
    dots.push(
      <span
        key={`paginator-${index}`}
        tabIndex={0}
        onClick={() => selectProduct(index)}
        className={`${
          index === activeIndex
            ? 'text-red-500 hover:text-red-600 active:text-red-400 bg-red-50 hover:bg-red-100 active:bg-red-50 font-bold'
            : standartDot
        } ${defaultClasses}`}
      >
        {index + 1}
      </span>
    );
  }

  return (
    <nav
      tabIndex={0}
      className="relative z-0 flex my-0 sm:my-16 justify-center rounded-md -space-x-px "
      aria-label="Pagination"
    >
      <span
        className={`${defaultClasses} ${standartDot} rounded-l-md ${arrowAdditionalClasses}`}
        onClick={() => slideLeft()}
        tabIndex={0}
      >
        <span className="sr-only">Previous</span>
        <ChevronLeftIcon className={iconSize} />
      </span>
      {dots.map((dot) => dot)}
      <span
        tabIndex={0}
        className={`${defaultClasses} ${standartDot} rounded-r-md ${arrowAdditionalClasses}`}
        onClick={() => slideRight()}
      >
        <span className="sr-only">Next</span>
        <ChevronRightIcon className={iconSize} />
      </span>
    </nav>
  );
};
