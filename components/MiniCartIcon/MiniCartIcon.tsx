import { useRouter } from 'next/router';
import MiniCartIconSVG from '../../assets/svg/MiniCart.svg';
import { MiniCartProps } from './MiniCart.props';

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
          className="relative flex justify-center	items-center text-primary hover:text-accent  text-md hover:stroke-accent stroke-primary"
          {...props}
        >
          <span className="absolute top-1">
            {cartQuantity < 9 ? cartQuantity : '>9'}
          </span>
          <MiniCartIconSVG width={44} height={44} />
        </div>
      )}
    </>
  );
};
