import {
  DetailedHTMLProps,
  Dispatch,
  HTMLAttributes,
  SetStateAction,
} from 'react';

export interface PaginatorProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  dataLength: number;
  activeIndex: number;
  selectProduct: Dispatch<SetStateAction<number>>;
  slideRight: () => void;
  slideLeft: () => void;
}
