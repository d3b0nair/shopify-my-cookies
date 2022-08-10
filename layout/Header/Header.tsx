import { Suspense, useContext } from 'react';
import { CartContext } from '../../context/shopContext';
import dynamic from 'next/dynamic';
import { NavBar } from '../../components';
import { useRouter } from 'next/router';

const DynamicCart = dynamic(() => import('../../components/Cart/Cart'), {
  suspense: true,
});

const Header = (): JSX.Element => {
  const { cart, cartOpen, setCartOpen } = useContext(CartContext);
  let cartQuantity = 0;
  cart.map((item) => {
    return (cartQuantity += item?.variantQuantity);
  });
  const currentPage = useRouter().asPath;
  return (
    <header
      className={`top-0 z-40 fixed sm:relative w-full py-8 ${
        currentPage !== '/' ? 'md:bg-accentLighter' : ''
      }`}
    >
      <div className="sm:pt-0 max-w-[1600px] max-h-[86px] px-6 md:px-14 xl:px-24 mx-auto">
        <NavBar
          cartOpen={cartOpen}
          setCartOpen={setCartOpen}
          cartQuantity={cartQuantity}
          currentPage={currentPage}
        />
        <Suspense fallback={`Loading...`}>
          <DynamicCart cart={cart} />
        </Suspense>
      </div>
    </header>
  );
};

export default Header;
