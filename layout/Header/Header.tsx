import { useContext } from 'react';
import { NavBar } from '../../components';
import { Cart } from '../../components/Cart/Cart';
import { CartContext } from '../../context/shopContext';

const Header = (): JSX.Element => {
  const menu = [
    { url: '/', title: 'Home' },
    { url: '/store', title: 'Store' },
    { url: '/contact', title: 'Contact' },
  ];

  const { cart, cartOpen, setCartOpen } = useContext(CartContext);

  let cartQuantity = 0;
  cart.map((item) => {
    return (cartQuantity += item?.variantQuantity);
  });
  return (
    <header className="top-0 z-20 mt-4 text-primary">
      <NavBar
        menu={menu}
        cartOpen={cartOpen}
        setCartOpen={setCartOpen}
        cartQuantity={cartQuantity}
      />
      <Cart cart={cart} />
    </header>
  );
};

export default Header;
