import Image from 'next/image';
import { floatToUSDCurrency } from '../../utils/helpers';
import { Button, CustomLink } from '../index';
import { CartListItemProps } from './CartListItem.props';

export const CartListItem = ({
  product,
  setCartOpen,
}: CartListItemProps): JSX.Element => (
  <li key={product.id} className="flex py-6">
    <div className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
      <Image
        src={product.image}
        alt={product.title}
        layout="fill"
        objectFit="cover"
      />
    </div>
    <div className="ml-4 flex flex-1 flex-col">
      <div>
        <div className="flex justify-between text-base font-medium text-gray-900">
          <h3>
            <CustomLink href={`/products/${product.handle}`}>
              <span onClick={() => setCartOpen(false)}>{product.title}</span>
            </CustomLink>
          </h3>
          <p className="ml-4">{floatToUSDCurrency(product.variantPrice)}</p>
        </div>
        <p className="mt-1 text-sm text-gray-500">{product.variantTitle}</p>
      </div>
      <div className="flex flex-1 items-end justify-between text-sm">
        <p className="text-gray-500">Qty {product.variantQuantity}</p>

        <div className="flex">
          <Button transparent type="button" className="font-medium text-base">
            Remove
          </Button>
        </div>
      </div>
    </div>
  </li>
);
