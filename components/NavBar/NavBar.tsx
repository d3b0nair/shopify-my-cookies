import { NavBarProps } from './NavBar.props';
import { NavBarDesktop } from '../NavBarDesktop/NavBarDesktop';
import { NavBarResponsive } from '../NavBarResponsive/NavBarResponsive';

export const NavBar = ({
  cartOpen,
  setCartOpen,
  cartQuantity,
  ...props
}: NavBarProps): JSX.Element => {
  return (
    <nav
      className="bottom-0 flex justify-end sm:grid grid-cols-[1fr_4fr_1fr] md:grid-cols-[100px_1fr_44px] items-center sm:justify-between"
      {...props}
    >
      <NavBarDesktop
        cartOpen={cartOpen}
        setCartOpen={setCartOpen}
        cartQuantity={cartQuantity}
      />
      <NavBarResponsive setCartOpen={setCartOpen} cartOpen={cartOpen} />
    </nav>
  );
};
