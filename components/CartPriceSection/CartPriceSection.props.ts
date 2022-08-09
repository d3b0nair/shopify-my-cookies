import {
  DetailedHTMLProps,
  Dispatch,
  HTMLAttributes,
  SetStateAction,
} from 'react';

export interface CartPriceSectionProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  cartTotal: number;
  setCartOpen: Dispatch<SetStateAction<boolean>>;
  checkOutUrl?: string;
}
