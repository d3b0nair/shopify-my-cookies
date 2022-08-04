import { AnchorHTMLAttributes, DetailedHTMLProps } from 'react';
import { IProductModel } from '../../interfaces/products.interface';

export interface ProductCardProps
  extends DetailedHTMLProps<
    AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > {
  product: IProductModel;
  className?: string;
  cardStyle?: string;
  currentIndex: number;
  selectedCard: number;
}
