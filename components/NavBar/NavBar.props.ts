import {
  DetailedHTMLProps,
  Dispatch,
  HTMLAttributes,
  SetStateAction,
} from 'react';

export interface NavBarProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  cartOpen: boolean;
  setCartOpen: Dispatch<SetStateAction<boolean>>;
  cartQuantity: number;
}
