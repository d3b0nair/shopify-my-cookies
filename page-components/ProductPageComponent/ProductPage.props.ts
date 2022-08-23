import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { IProduct } from '../../interfaces/products.interface';

export interface ProductPageComponentProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  product: IProduct;
}
