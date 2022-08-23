import {
  DetailedHTMLProps,
  Dispatch,
  LiHTMLAttributes,
  SetStateAction,
} from 'react';
import { IVariant } from '../ProductForm/ProductForm.props';

export interface CartListItemProps
  extends DetailedHTMLProps<LiHTMLAttributes<HTMLLIElement>, HTMLLIElement> {
  productVariant: IVariant;
  setCartOpen: Dispatch<SetStateAction<boolean>>;
  removeCartItem: (itemToRemove: string) => Promise<void>;
  updateQty: (itemToUpdate: IVariant, qty: number) => Promise<void>;
}
