import { CookieFlavorsCarousel, Logo } from '../../components';
import { StorePageProps } from './StorePage.props';

export const StorePage = ({ products, ...props }: StorePageProps) => {
  return (
    <div className="flex flex-col mt-3 sm:mt-0" {...props}>
      <Logo className="block sm:hidden mx-auto" />
      <h2 className="text-center md:mx-0 text-2xl md:text-3xl lg:text-6xl font-bold my-5 sm:mb-8 text-primary">
        Cookie Flavors
      </h2>
      <CookieFlavorsCarousel products={products} />
    </div>
  );
};
