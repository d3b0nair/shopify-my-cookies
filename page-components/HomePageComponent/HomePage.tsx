import { CookieFlavorsCarousel, HeroSection } from '../../components';
import { HomePageProps } from './HomePage.props';

export const HomePage = ({ products }: HomePageProps): JSX.Element => {
  return (
    <div className="grid items-center min-h-[1px] xl:min-h-[620px] md:h-auto 2xl:max-w-[1600px] 2xl:max-h-[1000px] mt-8 md:mt-[50px] grid-cols-[1fr] sm:grid-cols-[1fr_1fr] xl:grid-cols-[605px_1fr] text-primary gap-x-0 sm:gap-x-5">
      <HeroSection />
      <CookieFlavorsCarousel className="sm:hidden block" products={products} />
    </div>
  );
};
