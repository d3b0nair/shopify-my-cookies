import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { IProductModel } from '../../interfaces/products.interface';

export interface HomePageProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  products: Array<{ node: IProductModel }>;
}
