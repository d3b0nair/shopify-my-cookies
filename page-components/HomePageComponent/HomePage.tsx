import { BestSellersSection, HeroSection } from '../../components';
import { HomePageProps } from './HomePage.props';

export const HomePage = ({ products }: HomePageProps): JSX.Element => {
  return (
    <div className="h-full w-full">
      <HeroSection className="min-h-[95vh] md:min-h-[calc(100vh-86px)] mb-[5vh] md:mb-[0] self-start" />
      <BestSellersSection products={products} />
    </div>
  );
};
