import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { IProduct } from '../../interfaces/products.interface';

export interface StorePageProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  collections: Array<{ collectionHandle: string; products: IProduct[] }>;
}
