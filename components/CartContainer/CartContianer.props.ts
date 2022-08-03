import {
  DetailedHTMLProps,
  Dispatch,
  HTMLAttributes,
  SetStateAction,
} from 'react';
import { IVariant } from '../ProductForm/ProductForm.props';

export interface CartContianerProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  cart: IVariant[];
  cartOpen: boolean;
  cartTotal: number;
  setCartOpen: Dispatch<SetStateAction<boolean>>;
}
