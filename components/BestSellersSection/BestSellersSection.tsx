import { AnimateWithInView, Carousel, FeaturesInfo } from '..';
import { BestSellersSectionProps, HtagProps } from './BestSellersSection.props';

export const BestSellersSection = ({
  products,
}: BestSellersSectionProps): JSX.Element => {
  const Htag = ({ children, className }: HtagProps) => {
    return (
      <h2
        className={`${
          className ? className : ''
        } after:bg-primary before:bg-primary overflow-hidden line-between-element mb-10 text-center text-lg md:text-xl lg:text-4xl font-bold text-accent`}
      >
        {children}
      </h2>
    );
  };
  return (
    <>
      <div className="min-h-[100vh]">
        <Htag
          className="sm:-mb-[10px]" // take 50px from ProductCard element which is moved from top to bottom and to align in we need to subtract default 40px from margin bottom on Htag and move it up with margin-bottom:-10
        >
          BEST SELLERS
        </Htag>
        <AnimateWithInView
          animation={'animate-showUpSection'}
          defaultState={'opacity-0'}
        >
          <Carousel
            products={products}
            className="animate-showUpSection opacity-0"
          />
        </AnimateWithInView>
      </div>
      <AnimateWithInView
        animation={'animate-showUpSection delay-300'}
        defaultState={'opacity-0'}
        className="min-h-[100vh] sm:min-h-0 mb-0 sm:mb-[168px]" //168px height of FeaturesInfo component
      >
        <Htag>FEATURES</Htag>
        <FeaturesInfo />
      </AnimateWithInView>
    </>
  );
};
