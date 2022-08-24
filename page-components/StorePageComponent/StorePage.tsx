import { useState } from 'react';
import { Button, Carousel } from '../../components';
import { useWindowSize } from '../../hooks/useWindowDimensions';
import { StorePageProps } from './StorePage.props';

export const StorePage = ({ collections, ...props }: StorePageProps) => {
  const { width } = useWindowSize();
  const categories = collections.map(({ collectionTitle }) => collectionTitle);
  let bestSellersIndex = 0;
  for (let i = 0; i < categories.length; i++) {
    if (categories[i] === 'Best Sellers') {
      bestSellersIndex = i;
    }
  }
  const [selectedCategory, setSelectedCategory] =
    useState<number>(bestSellersIndex);
  const [isExpanded, setIsExpanded] = useState(false);

  const emptySpaceInCategorySection = // 150px container size, 16px margin-x of selected element, 12px grid gap
    (width ? width : 0) -
    150 * (categories.length + 1) +
    16 +
    12 * categories.length;

  return (
    <div
      className="flex flex-col mt-[112px] sm:mt-8 min-h-[100vh] sm:min-h-[calc(100vh-96px)]"
      {...props}
    >
      <div className={`flex flex-col mb-8 p-1 sm:mb-0 `}>
        <div className="flex items-baseline justify-between">
          <h2 className="text-lg font-semibold mb-5">Categories:</h2>
          <Button
            className={`${
              emptySpaceInCategorySection > 0 && !isExpanded
                ? 'hidden'
                : 'block cursor-pointer text-sm'
            } bg-white shadow-inner rounded-full p-1 border`}
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? 'Hide' : 'See all'}
          </Button>
        </div>
        <div
          className={`grid gap-3 py-1 sm:mb-0 ${
            isExpanded
              ? 'grid-cols-1 gap-x-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:gap-x-3  xl:grid-cols-6 2xl:grid-cols-8'
              : 'grid-flow-col justify-start overflow-x-scroll overflow-y-hidden'
          } ${
            emptySpaceInCategorySection > 0 ? 'no-scrollbar' : 'scrollbar-block'
          } select-none transition-all snap-x snap-mandatory`}
        >
          {categories.map(
            (category, i) =>
              collections[i].products.length > 0 && (
                <span
                  key={`category-${category}`}
                  onClick={() => setSelectedCategory(i)}
                  className={`${
                    selectedCategory === i
                      ? 'scale-110 font-bold text-white bg-primary mx-2'
                      : 'scale-100 text-darkestGrey bg-gray-200'
                  } ${
                    category === 'Best Sellers' ? 'order-first' : ''
                  } min-w-[150px] py-1 sm:py-2 snap-start shadow-inner transition-all text-md text-center rounded-full cursor-pointer whitespace-nowrap hover:text-white  hover:bg-red-600 focus:bg-red-600 active:bg-red-700`}
                >
                  {category}
                </span>
              )
          )}
        </div>
      </div>
      <Carousel products={collections[selectedCategory].products} />
    </div>
  );
};
