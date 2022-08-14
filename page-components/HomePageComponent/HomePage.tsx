import {
  AnimateWithInView,
  Carousel,
  FeaturesInfo,
  HeroSection,
} from '../../components';
import { HomePageProps } from './HomePage.props';

export const HomePage = ({ products }: HomePageProps): JSX.Element => {
  return (
    <div className="h-full w-full">
      <HeroSection className="h-[95vh] md:h-[calc(100vh-86px)] mb-[5vh] md:mb-[0] self-start" />
      <div className="lg:min-h-[100vh] lg:mb-[5vh]">
        <h2 className="mb-16 md:mb-0 text-center text-lg md:text-xl lg:text-4xl font-bold text-accent">
          BEST SELLERS
        </h2>
        <AnimateWithInView
          animation={'animate-showUpSection'}
          defaultState={'opacity-0'}
        >
          <Carousel
            products={products}
            className="animate-showUpSection opacity-0"
          />
        </AnimateWithInView>
        <AnimateWithInView
          animation={'animate-showUpSection delay-300'}
          defaultState={'opacity-0'}
        >
          <FeaturesInfo />
        </AnimateWithInView>
      </div>
    </div>
  );
};
