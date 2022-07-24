import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { ProductModel } from '../../interfaces/products.interface';

export interface ProductPageComponentProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  product: ProductModel;
}
