import { useContext } from 'react';
import { CartContainer } from '..';
import { CartContext } from '../../context/shopContext';
import { IVariant } from '../ProductForm/ProductForm.props';

export const Cart = ({ cart }: { cart: IVariant[] }) => {
  const {
    cartOpen,
    setCartOpen,
    removeCartItem,
    updateQty,
    checkOutUrl,
    resetCart,
  } = useContext(CartContext);
  let cartTotal = 0;
  cart.map((item) => {
    cartTotal += item?.variantPrice * item?.quantity;
  });
  return (
    <CartContainer
      cart={cart}
      cartOpen={cartOpen}
      cartTotal={cartTotal}
      setCartOpen={setCartOpen}
      removeCartItem={removeCartItem}
      updateQty={updateQty}
      checkOutUrl={checkOutUrl}
      resetCart={resetCart}
    />
  );
};
export default Cart;
