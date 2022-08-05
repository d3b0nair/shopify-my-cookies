import {
  DetailedHTMLProps,
  Dispatch,
  LiHTMLAttributes,
  SetStateAction,
} from 'react';
import { IVariant } from '../ProductForm/ProductForm.props';

export interface CartListItemProps
  extends DetailedHTMLProps<LiHTMLAttributes<HTMLLIElement>, HTMLLIElement> {
  product: IVariant;
  setCartOpen: Dispatch<SetStateAction<boolean>>;
}
