import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { IProduct } from '../../interfaces/products.interface';

export interface BestSellersSectionProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  products: Array<Omit<IProduct, 'variants' | 'options'>>;
}
