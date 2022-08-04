import Image from 'next/image';
import WowSuchEmptySVG from '../../assets/svg/Doggie.svg';
import { floatToUSDCurrency } from '../../utils/helpers';
import { Button, CustomLink } from '../index';
import { CartListSectionProps } from './CartListSection.props';

export const CartListSection = ({
  cart,
  cartTotal,
  setCartOpen,
}: CartListSectionProps) => {
  return (
    <div className="mt-8">
      {cartTotal > 0 ? (
        <div className="flow-root">
          <ul role="list" className="-my-6 divide-y divide-gray-200">
            {cart.map((product) => (
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
                          <span onClick={() => setCartOpen(false)}>
                            {product.title}
                          </span>
                        </CustomLink>
                      </h3>
                      <p className="ml-4">
                        {floatToUSDCurrency(product.variantPrice)}
                      </p>
                    </div>
                    <p className="mt-1 text-sm text-gray-500">
                      {product.variantTitle}
                    </p>
                  </div>
                  <div className="flex flex-1 items-end justify-between text-sm">
                    <p className="text-gray-500">
                      Qty {product.variantQuantity}
                    </p>

                    <div className="flex">
                      <Button
                        transparent
                        type="button"
                        className="font-medium text-base"
                      >
                        Remove
                      </Button>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div className="flex flex-col">
          <WowSuchEmptySVG className="h-[40%] w-[40%] xl:h-[60%] xl:w-[60%] mx-auto" />
          <h2 className="text-center text-xl md:text-3xl lg:text-4xl text-primary">
            wow such empty
          </h2>
        </div>
      )}
    </div>
  );
};
