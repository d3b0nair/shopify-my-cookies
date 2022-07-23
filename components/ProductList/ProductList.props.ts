import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { ProductCollectionNode } from '../../interfaces/collection.interface';

export interface ProductListProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  products: ProductCollectionNode[];
}
