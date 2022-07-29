import { HeroSection, ProductsPreview } from '../../components';
import { HomePageProps } from './HomePage.props';

export const HomePage = ({ products }: HomePageProps): JSX.Element => {
  return (
    <div className="grid min-h-[1px] xl:min-h-[620px] md:h-auto 2xl:max-w-[1600px] 2xl:max-h-[1000px] mt-[50px] md:mt-[50px] grid-cols-[1fr] sm:grid-cols-[1fr_1fr] xl:grid-cols-[705px_1fr] text-primary gap-x-0 sm:gap-x-5 md:gap-x-0">
      <HeroSection />
      <ProductsPreview products={products} />
    </div>
  );
};
