import {
  createContext,
  useState,
  Dispatch,
  SetStateAction,
  useEffect,
} from 'react';
import { IVariant } from '../components/ProductForm/ProductForm.props';
import { ICheckoutModel } from '../interfaces/checkout.interface';
import { createCheckout, updateCheckout } from '../lib/shopify';
import { shopContextProps } from './shopContext.props';

type CartContextType = {
  addToCart: (newItem: IVariant) => Promise<void>;
  cart: IVariant[];
  cartOpen: boolean;
  setCartOpen: Dispatch<SetStateAction<boolean>>;
  checkOutUrl: string;
  removeCartItem: (itemToRemove: string) => Promise<void>;
  updateQty: (itemToUpdate: IVariant, qty: number) => Promise<void>;
  resetCart: () => void;
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
  useEffect(() => {
    if (localStorage.local_checkout) {
      const cartObject = JSON.parse(localStorage.local_checkout as string) as [
        IVariant[] | IVariant,
        Omit<ICheckoutModel, 'lineItems'>
      ];

      if (Array.isArray(cartObject[0]) && cartObject[0].length > 0) {
        setCart([...cartObject[0]]);
      } else if (!Array.isArray(cartObject[0])) {
        setCart([cartObject[0]]);
      }
      if (cartObject[1]) {
        setCheckOutId(cartObject[1].id);
        setCheckOutUrl(cartObject[1].webUrl);
      }
    }
  }, []);

  const updateCart = async (newCart: IVariant[]) => {
    setCart(newCart);
    const newCheckout = await updateCheckout(checkOutId, newCart);
    const cartObject = JSON.stringify([newCart, newCheckout]);
    localStorage.setItem('local_checkout', cartObject);
  };

  const addToCart = async (newItem: IVariant) => {
    if (cart.length === 0) {
      setCart([newItem]);
      const checkout = await createCheckout([
        { id: newItem.id, quantity: newItem.quantity },
      ]);
      setCheckOutId(checkout.id);
      setCheckOutUrl(checkout.webUrl);

      localStorage.setItem(
        'local_checkout',
        JSON.stringify([newItem, checkout])
      );
    } else {
      let newCart = [...cart];
      cart.map((item) => {
        if (item.id === newItem.id) {
          newItem.quantity = item.quantity + newItem.quantity;
        }
      });
      const sanitizedCart = cart.filter((item) => item.id !== newItem.id);
      newCart = [...sanitizedCart, newItem];
      await updateCart(newCart);
    }
  };

  const removeCartItem = async (itemToRemove: string) => {
    const updatedCart = cart.filter((item) => item.id !== itemToRemove);

    await updateCart(updatedCart);

    if (cart.length === 1) {
      setCartOpen(false);
    }
  };

  const updateQty = async (itemToUpdate: IVariant, qty: number) => {
    let updatedCart = [...cart];

    cart.map((item) => {
      if (item.id === itemToUpdate.id) {
        item.quantity = qty;
        updatedCart = [...cart];
      }
    });
    await updateCart(updatedCart);
  };

  const resetCart = () => {
    setCheckOutId('');
    setCheckOutUrl('');
    setCart([]);
    localStorage.removeItem('local_checkout');
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        cartOpen,
        setCartOpen,
        addToCart,
        checkOutUrl,
        removeCartItem,
        updateQty,
        resetCart,
      }}
      {...props}
    >
      {children}
    </CartContext.Provider>
  );
};

const ShopConsumer = CartContext.Consumer;

export { ShopConsumer, CartContext };
