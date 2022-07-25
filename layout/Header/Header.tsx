import { useContext } from 'react';
import { CustomLink, Logo, MiniCartIcon } from '../../components';
import { Cart } from '../../components/Cart/Cart';
import { CartContext } from '../../context/shopContext';

const Header = (): JSX.Element => {
  const { cart, cartOpen, setCartOpen } = useContext(CartContext);

  let cartQuantity = 0;
  cart.map((item) => {
    return (cartQuantity += item?.variantQuantity);
  });
  return (
    <header className="top-0 z-20 mt-4 text-secondary">
      <div className="grid grid-cols-[1fr_4fr_1fr] md:grid-cols-[100px_1fr_44px] items-center justify-between">
        <Logo />
        <div className="ml-[5px] sm:ml-[20px] md:ml-[45px]">
          <CustomLink href="/">Home</CustomLink>
          <CustomLink href="/store">Store</CustomLink>
          <CustomLink href="/contact">Contact</CustomLink>
        </div>
        <div>
          <div>
            <a
              className="cursor-pointer hover:text-primary"
              onClick={() => setCartOpen(!cartOpen)}
            >
              <MiniCartIcon cartQuantity={cartQuantity} />
            </a>
          </div>
        </div>
      </div>
      <Cart cart={cart} />
    </header>
  );
};

export default Header;
