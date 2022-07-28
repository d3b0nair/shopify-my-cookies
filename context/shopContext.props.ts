import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { ReactNode } from 'react';

export interface shopContextProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children?: ReactNode;
}

export interface cartType {
  id: string;
  variantQuantity: number;
}
