import {
  DetailedHTMLProps,
  HTMLAttributes,
  MouseEvent,
  TouchEvent,
} from 'react';
import { IProduct } from '../../interfaces/products.interface';

export interface ProductCardProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  product: IProduct | Omit<IProduct, 'variants' | 'options'>;
  className?: string;
  cardStyle: 'activeCard' | 'prevCard' | 'nextCard' | 'hidden';
  cardsLength: number;
  currentIndex: number;
  selectedCard: number;
  onPointerEvent?: (
    evt: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>
  ) => void;
  transitionDuration: number;
  isSmallSize?: boolean;
}
