import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { ProductModel } from '../../interfaces/products.interface';
import { ReactNode } from 'react';

export interface ProductFormProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  product: ProductModel;
  children?: ReactNode;
}
