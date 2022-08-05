import { DetailedHTMLProps, HTMLAttributes, MouseEvent } from 'react';
import { IProductModel } from '../../interfaces/products.interface';

export interface ProductCardProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  product: IProductModel;
  className?: string;
  cardStyle?: string;
  currentIndex: number;
  selectedCard: number;
  handleMouseDown?: (evt: MouseEvent<HTMLDivElement>) => void;
  transitionDuration: number;
}
