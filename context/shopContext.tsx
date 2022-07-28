import { createContext, useState, Dispatch, SetStateAction } from 'react';
import { IVariant } from '../components/ProductForm/ProductForm.props';
import { createCheckout, updateCheckout } from '../lib/shopify';
import { shopContextProps } from './shopContext.props';

type CartContextType = {
  addToCart: (newItem: IVariant) => Promise<void>;
  cart: IVariant[];
  cartOpen: boolean;
  setCartOpen: Dispatch<SetStateAction<boolean>>;
  checkOutUrl: string;
};

const CartContext = createContext<CartContextType>({} as CartContextType);

export const ShopProvider = ({
  children,
  ...props
}: shopContextProps): JSX.Element => {
  const [cart, setCart] = useState<IVariant[]>([]);
  const [cartOpen, setCartOpen] = useState<boolean>(false);
  const [checkOutId, setCheckOutId] = useState<string>('');
  const [checkOutUrl, setCheckOutUrl] = useState<string>('');

  const addToCart = async (newItem: IVariant) => {
    if (cart.length === 0) {
      setCart([newItem]);
      const checkout = await createCheckout(
        newItem.id,
        newItem.variantQuantity
      );
      setCheckOutId(checkout.id);
      setCheckOutUrl(checkout.webUrl);

      localStorage.setItem('checkout_id', JSON.stringify([newItem, checkout]));
    } else {
      let newCart = [...cart];

      cart.map((item) => {
        if (item.id === newItem.id) {
          item.variantQuantity++;
          newCart = [...cart];
        } else {
          newCart = [...cart, newItem];
        }
      });

      setCart(newCart);
      const newCheckout = async () => {
        return await updateCheckout(checkOutId, newCart);
      };
      localStorage.setItem(
        'checkout_id',
        JSON.stringify([newCart, newCheckout])
      );
    }
  };
  return (
    <CartContext.Provider
      value={{ cart, cartOpen, setCartOpen, addToCart, checkOutUrl }}
      {...props}
    >
      {children}
    </CartContext.Provider>
  );
};

const ShopConsumer = CartContext.Consumer;

export { ShopConsumer, CartContext };
