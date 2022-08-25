import Image from 'next/image';
import { floatToUSDCurrency } from '../../utils/helpers';
import { Button, CustomLink } from '../index';
import { CartListItemProps } from './CartListItem.props';
import { useQtyController } from '../../hooks/useQtyController';

export const CartListItem = ({
  productVariant,
  setCartOpen,
  removeCartItem,
}: CartListItemProps): JSX.Element => {
  const [QtyControllerComponent] = useQtyController(1, productVariant);

  return (
    <li key={productVariant.id} className="flex py-6">
      <div className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
        <Image
          src={productVariant.image}
          alt={productVariant.title}
          layout="fill"
          objectFit="cover"
          quality={40}
        />
      </div>
      <div className="ml-4 flex flex-1 flex-col">
        <div>
          <div className="flex justify-between items-center text-base font-medium text-gray-900">
            <h3>
              <CustomLink
                href={`/products/${productVariant.handle}`}
                className="text-sm sm:text-md"
              >
                <span
                  className="text-primary hover:text-accent"
                  onClick={() => setCartOpen(false)}
                >
                  {productVariant.title}
                </span>
              </CustomLink>
            </h3>
            <p className="ml-4">
              {floatToUSDCurrency(productVariant.variantPrice)}
            </p>
          </div>
          <p className="mt-1 text-sm text-gray-500">
            {productVariant.variantTitle}
          </p>
        </div>
        <div className="flex flex-1 flex-col sm:flex-row items-end justify-between text-sm">
          <fieldset className='self-start sm:self-auto'>
            <div className="flex flex-row items-center my-0.5">
              <legend className="text-gray-500 mr-4">Qty:</legend>
              <QtyControllerComponent />
            </div>
          </fieldset>
          <div className="flex self-end">
            <Button
              onClick={() => {
                void removeCartItem(productVariant.id);
              }}
              transparent
              type="button"
              className="font-medium text-base text-primary"
            >
              Remove
            </Button>
          </div>
        </div>
      </div>
    </li>
  );
};
