import { Carousel } from '..';
import { RecommendedListProps } from './RecommendedList.props';
import WowSuchEmptySVG from '../../assets/svg/Doggie.svg';

export const RecommendedList = ({
  recomendedProducts,
  selectedProduct,
  className,
  ...props
}: RecommendedListProps): JSX.Element => {
  const products = recomendedProducts.filter(
    (item) => item.id !== selectedProduct.id
  );
  return (
    <div className={`${className ? className : ''} flex flex-col`} {...props}>
      <h2 className="text-center text-2xl my-4">Recommended for you</h2>
      {products.length > 0 ? (
        <Carousel isSmallSize products={products} />
      ) : (
        <div className="flex flex-col mb-8 p-1">
          <WowSuchEmptySVG className="h-[40%] w-[40%] xl:h-[20%] xl:w-[20%] mx-auto" />
          <h2 className="text-center text-xl md:text-3xl lg:text-4xl text-primary">
            doggo didn&apos;t found anything
          </h2>
        </div>
      )}
    </div>
  );
};
