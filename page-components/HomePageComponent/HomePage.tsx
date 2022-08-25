import { BestSellersSection, HeroSection } from '../../components';
import { HomePageProps } from './HomePage.props';

export const HomePage = ({ products }: HomePageProps): JSX.Element => {
  return (
    <div className="h-full w-full">
      <HeroSection className="min-h-[100vh] md:min-h-[calc(100vh-86px)] self-start" />
      <BestSellersSection products={products} />
    </div>
  );
};
