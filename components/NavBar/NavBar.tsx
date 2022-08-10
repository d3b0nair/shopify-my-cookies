import { NavBarProps } from './NavBar.props';
import { NavBarDesktop } from '../NavBarDesktop/NavBarDesktop';
import { NavBarResponsive } from '../NavBarResponsive/NavBarResponsive';

export const NavBar = ({
  cartOpen,
  setCartOpen,
  cartQuantity,
  currentPage,
  ...props
}: NavBarProps): JSX.Element => {
  return (
    <nav
      className="bottom-0 flex justify-start items-center md:grid-cols-[1fr_3fr_1fr] md:justify-between"
      {...props}
    >
      <NavBarDesktop
        cartOpen={cartOpen}
        setCartOpen={setCartOpen}
        cartQuantity={cartQuantity}
        currentPage={currentPage}
      />
      <NavBarResponsive
        setCartOpen={setCartOpen}
        cartOpen={cartOpen}
        currentPage={currentPage}
      />
    </nav>
  );
};
