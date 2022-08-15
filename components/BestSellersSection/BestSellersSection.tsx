import { AnimateWithInView, Carousel, FeaturesInfo } from '..';
import { BestSellersSectionProps } from './BestSellersSection.props';

export const BestSellersSection = ({
  products,
}: BestSellersSectionProps): JSX.Element => {
  return (
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
  );
};
