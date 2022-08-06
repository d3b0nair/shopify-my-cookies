import { useRouter } from 'next/router';
import { MiniCartProps } from './MiniCart.props';
import { ShoppingCartIcon } from '@heroicons/react/outline';

export const MiniCartIcon = ({
  cartQuantity,
  ...props
}: MiniCartProps): JSX.Element => {
  const currentPage = useRouter().asPath;
  const homepage = '/';

  return (
    <>
      {currentPage === homepage ? null : (
        <div
          tabIndex={0}
          className="hidden sm:border-0 border-primary p-1 sm:bg-transparent sm:p-0 rounded-full relative sm:flex justify-center	items-center text-red hover:text-accent  text-base active:text-red-500"
          {...props}
        >
          <span className="absolute top-1">
            {cartQuantity < 9 ? cartQuantity : '>9'}
          </span>
          <ShoppingCartIcon strokeWidth={1} width={44} height={44} />
        </div>
      )}
    </>
  );
};
