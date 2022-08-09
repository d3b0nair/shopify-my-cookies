import { Suspense, useContext } from 'react';
import { CartContext } from '../../context/shopContext';
import dynamic from 'next/dynamic';
import { NavBar } from '../../components';

const DynamicCart = dynamic(() => import('../../components/Cart/Cart'), {
  suspense: true,
});

const Header = (): JSX.Element => {
  const { cart, cartOpen, setCartOpen } = useContext(CartContext);

  let cartQuantity = 0;
  cart.map((item) => {
    return (cartQuantity += item?.variantQuantity);
  });
  return (
    <header className="top-0 z-50 mt-4 text-primary fixed sm:relative pt-5 sm:pt-0 max-w-[1600px] max-h-[800px] mx-auto">
      <NavBar
        cartOpen={cartOpen}
        setCartOpen={setCartOpen}
        cartQuantity={cartQuantity}
      />
      <Suspense fallback={`Loading...`}>
        <DynamicCart cart={cart} />
      </Suspense>
    </header>
  );
};

export default Header;
