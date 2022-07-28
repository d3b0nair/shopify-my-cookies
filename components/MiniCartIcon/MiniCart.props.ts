import {
  DetailedHTMLProps,
  HTMLAttributes,
} from 'react';

export interface MiniCartProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  cartQuantity: number;
}
