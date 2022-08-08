import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { IProductModel } from '../../interfaces/products.interface';

export interface RecommendedListProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  selectedProduct: IProductModel;
  recomendedProducts: {
    node: Omit<IProductModel, 'variants' | 'options'>;
  }[];
}
