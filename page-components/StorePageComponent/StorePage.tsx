import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import { Carousel } from '../../components';
import { StorePageProps } from './StorePage.props';

const DynamicLogo = dynamic(() => import('../../components/Logo/Logo'), {
  suspense: true,
});

export const StorePage = ({ products, ...props }: StorePageProps) => {
  return (
    <div className="flex flex-col mt-3 sm:mt-0" {...props}>
      <Suspense fallback={`Loading...`}>
        <DynamicLogo className="block sm:hidden mx-auto mb-10" />
      </Suspense>
      <h2 className="text-center mb-4 sm:mb-0 md:mx-0 text-lg sm:text-2xl md:text-3xl 2xl:text-6xl font-bold text-primary">
        Cookie Flavors
      </h2>
      <Carousel products={products} />
    </div>
  );
};
