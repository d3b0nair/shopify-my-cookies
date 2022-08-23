import { CartListItem } from '..';
import WowSuchEmptySVG from '../../assets/svg/Doggie.svg';

import { CartListSectionProps } from './CartListSection.props';

export const CartListSection = ({
  cart,
  cartTotal,
  setCartOpen,
  removeCartItem,
  updateQty,
}: CartListSectionProps) => {
  return (
    <div className="mt-8">
      {cartTotal > 0 ? (
        <div className="flow-root">
          <ul role="list" className="-my-6 divide-y divide-gray-200">
            {cart.map((product, i) => (
              <CartListItem
                key={`CartItem-${product.id} ${i}}`}
                productVariant={product}
                setCartOpen={setCartOpen}
                removeCartItem={removeCartItem}
                updateQty={updateQty}
              />
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
