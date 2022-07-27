import { ProductCard } from '../../components';
import { StorePageProps } from './StorePage.props';

export const StorePage = ({ products, ...props }: StorePageProps) => {
  return (
    <div {...props}>
      <h2 className="text-2xl font-extrabold mb-6 ml-4">Cookies</h2>
      <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {products.map((product) => (
          <ProductCard key={product.node.id} product={product.node} />
        ))}
      </div>
    </div>
  );
};
