import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { IProduct } from '../../interfaces/products.interface';

export interface RecommendedListProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  selectedProduct: IProduct;
  recomendedProducts: Omit<IProduct, 'variants' | 'options'>[];
}
