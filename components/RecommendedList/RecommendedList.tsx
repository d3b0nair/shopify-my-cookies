import { Carousel } from '..';
import { RecommendedListProps } from './RecommendedList.props';

export const RecommendedList = ({
  recomendedProducts,
  selectedProduct,
}: RecommendedListProps): JSX.Element => {
  const products = recomendedProducts.filter(
    (item) => item.node.id !== selectedProduct.id
  );
  return (
    <div className="flex flex-col">
      <h2 className="text-center text-2xl my-8">Recommended for you</h2>
      <Carousel isSmallSize products={products} />
    </div>
  );
};
