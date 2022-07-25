import { IProductModel } from './products.interface';
export interface IHomePageCollectionModel {
  data: {
    title: string;
    collection: {
      title: string;
      products: { edges: Array<{ node: IProductModel }> };
    };
  };
}
