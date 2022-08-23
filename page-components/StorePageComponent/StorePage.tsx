import { Carousel } from '../../components';
import { StorePageProps } from './StorePage.props';

export const StorePage = ({ collections, ...props }: StorePageProps) => {
  return (
    <div
      className="flex flex-col mt-[112px] sm:mt-8 min-h-[100vh] sm:min-h-[calc(100vh-96px)]"
      {...props}
    >
      <h2 className="text-center mb-8 sm:mb-0 md:mx-0 text-lg sm:text-2xl md:text-3xl 2xl:text-6xl font-bold text-primary">
        Cookie Flavors
      </h2>
      <Carousel products={collections[0].products} />
    </div>
  );
};
