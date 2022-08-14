import { IOptionModel, IProductModel } from './products.interface';

export type getProductQueryType = { data: { product: IProductModel } };

export interface IallProductsQuery {
  data: { products: { edges: Array<IgetAllProductsReturn> } };
}

export interface IgetAllProductsReturn {
  node: { handle: string; id: string };
}

export type lineItemsType = {
  handle: string;
  id: string;
  image: string;
  options: Array<IOptionModel>;
  title: string;
  variantPrice: string;
  quantity: number;
  variantTitle: string;
};

export interface IProductsInCollection {
  node: Omit<IProductModel, 'description' | 'options' | 'variants'>;
}
