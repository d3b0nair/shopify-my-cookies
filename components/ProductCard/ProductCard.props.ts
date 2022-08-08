import {
  DetailedHTMLProps,
  HTMLAttributes,
  MouseEvent,
  TouchEvent,
} from 'react';
import { IProductModel } from '../../interfaces/products.interface';

export interface ProductCardProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  product: IProductModel;
  className?: string;
  cardStyle?: string;
  cardsLength: number;
  currentIndex: number;
  selectedCard: number;
  onPointerEvent?: (
    evt: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>
  ) => void;
  transitionDuration: number;
}
