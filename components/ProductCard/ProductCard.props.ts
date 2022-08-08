import {
  DetailedHTMLProps,
  HTMLAttributes,
  MouseEvent,
  TouchEvent,
} from 'react';
import { IProductModel } from '../../interfaces/products.interface';

export interface ProductCardProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  product: Omit<IProductModel, 'variants' | 'options'>;
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
