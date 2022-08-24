import { MiniCartProps } from './MiniCart.props';
import { ShoppingCartIcon } from '@heroicons/react/outline';

export const MiniCartIcon = ({
  cartQuantity,
  ...props
}: MiniCartProps): JSX.Element => {
  return (
    <>
      <div
        tabIndex={0}
        className="hidden sm:border-0 sm:p-0 rounded-full relative sm:flex justify-center	items-center transition-colors  text-white hover:text-accent text-base active:text-accentLighter "
        {...props}
      >
        <span className="absolute top-1 select-none">
          {cartQuantity < 9 ? cartQuantity : '>9'}
        </span>
        <ShoppingCartIcon strokeWidth={1} width={44} height={44} />
      </div>
    </>
  );
};
