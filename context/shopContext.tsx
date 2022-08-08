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
  removeCartItem: (itemToRemove: string) => void;
  updateQty: (itemToUpdate: IVariant, qty: number) => void;
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

  const updateCart = (newCart: IVariant[]) => {
    setCart(newCart);
    const newCheckout = async () => {
      return await updateCheckout(checkOutId, newCart);
    };

    const cartObject = JSON.stringify([newCart, newCheckout]);
    localStorage.setItem('local_checkout', cartObject);
  };

  const addToCart = async (newItem: IVariant) => {
    if (cart.length === 0) {
      setCart([newItem]);
      const checkout = await createCheckout(
        newItem.id,
        newItem.variantQuantity
      );
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
          item.variantQuantity++;
          newCart = [...cart];
        } else {
          newCart = [...cart, newItem];
        }
      });

      updateCart(newCart);
    }
  };
  const removeCartItem = (itemToRemove: string) => {
    const updatedCart = cart.filter((item) => item.id !== itemToRemove);

    updateCart(updatedCart);

    if (cart.length === 1) {
      setCartOpen(false);
    }
  };

  const updateQty = (itemToUpdate: IVariant, qty: number) => {
    let updatedCart = [...cart];
    cart.map((item) => {
      if (item.id === itemToUpdate.id) {
        item.variantQuantity = qty;
        updatedCart = [...cart];
      } else {
        updatedCart = [...cart, itemToUpdate];
      }
    });
    updateCart(updatedCart);
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
      }}
      {...props}
    >
      {children}
    </CartContext.Provider>
  );
};

const ShopConsumer = CartContext.Consumer;

export { ShopConsumer, CartContext };
