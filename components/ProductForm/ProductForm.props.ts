import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';
import { IProductModel } from '../../interfaces/products.interface';

export interface ProductFormProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  product: IProductModel;
  children?: ReactNode;
}

export interface IVariant {
  handle: string;
  id: string;
  image: string;
  options: allOptionsType;
  title: string;
  quantity: number;
  variantPrice: number;
  variantTitle: string;
}

export type allOptionsType = { [key: string]: string };
