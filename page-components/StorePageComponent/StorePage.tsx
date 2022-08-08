import { CookieFlavorsCarousel, Logo } from '../../components';
import { StorePageProps } from './StorePage.props';

export const StorePage = ({ products, ...props }: StorePageProps) => {
  return (
    <div className="flex flex-col mt-3 sm:mt-0" {...props}>
      <Logo className="block sm:hidden mx-auto mb-10" />
      <h2 className="text-center mb-4 sm:mb-0 md:mx-0 text-lg sm:text-2xl md:text-3xl 2xl:text-6xl font-bold text-primary">
        Cookie Flavors
      </h2>
      <CookieFlavorsCarousel products={products} />
    </div>
  );
};
