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
    return (cartQuantity += item?.quantity);
  });
  const currentPage = useRouter().asPath;
  return (
    <header
      className={`top-0 z-[40] absolute sm:relative w-full  ${
        currentPage !== '/'
          ? 'bg-darkestGrey py-1 border-b-4 border-primary'
          : 'md:animate-showDownSection py-8'
      }`}
    >
      <div className="sm:pt-0 max-w-[1600px] max-h-[122px] sm:max-h-[86px] px-6 md:px-14 xl:px-24 mx-auto">
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
