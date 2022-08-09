import { floatToUSDCurrency } from '../../utils/helpers';
import { Button } from '../Button/Button';
import { CustomLink } from '../CustomLink/CustomLink';
import { CartPriceSectionProps } from './CartPriceSection.props';

export const CartPriceSection = ({
  cartTotal,
  setCartOpen,
  checkOutUrl,
}: CartPriceSectionProps) => {
  const CheckOutButton = () => (
    <Button standart primary ripple className="w-full">
      Checkout
    </Button>
  );
  return (
    <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
      <div className="flex justify-between text-base font-medium text-gray-900">
        <p>Subtotal</p>
        <p>{floatToUSDCurrency(cartTotal)}</p>
      </div>
      <p className="mt-0.5 text-sm text-gray-500">
        Shipping and taxes calculated at checkout.
      </p>
      <div className="mt-6 w-full">
        {checkOutUrl ? (
          <CustomLink href={checkOutUrl}>
            <CheckOutButton />
          </CustomLink>
        ) : (
          <CheckOutButton />
        )}
      </div>
      <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
        <p>
          <span>or </span>
          <button
            type="button"
            className="font-medium text-primary hover:text-accent"
            onClick={() => setCartOpen(false)}
          >
            Continue Shopping
            <span aria-hidden="true"> &rarr;</span>
          </button>
        </p>
      </div>
    </div>
  );
};
