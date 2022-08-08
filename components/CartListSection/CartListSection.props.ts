import {
  DetailedHTMLProps,
  Dispatch,
  HTMLAttributes,
  SetStateAction,
} from 'react';
import { IVariant } from '../ProductForm/ProductForm.props';

export interface CartListSectionProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  cart: IVariant[];
  cartTotal: number;
  setCartOpen: Dispatch<SetStateAction<boolean>>;
  removeCartItem: (itemToRemove: string) => void;
  updateQty: (itemToUpdate: IVariant, qty: number) => void;
}
