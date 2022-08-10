import { Carousel, FeaturesInfo, HeroSection } from '../../components';
import { HomePageProps } from './HomePage.props';

export const HomePage = ({ products }: HomePageProps): JSX.Element => {
  return (
    <div className="h-full w-full">
      <HeroSection className="h-[95vh] md:h-[calc(100vh-86px)] mb-[5vh] md:mb-[0] self-start" />
      <div className="lg:min-h-[100vh] lg:mb-[5vh]">
        <h2 className="mb-16 md:mb-0 text-center text-lg md:text-xl lg:text-4xl font-bold text-accent">
          BEST SELLERS
        </h2>
        <Carousel products={products} />
        <FeaturesInfo />
      </div>
    </div>
  );
};
