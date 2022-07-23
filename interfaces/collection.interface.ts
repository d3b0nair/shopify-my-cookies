import { ProductModel } from './products.interface';

export interface HomePageCollectionModel {
  data?: HomePageData;
}

export interface HomePageData {
  title: string;
  collection: HomePageCollection;
}

export interface HomePageCollection {
  title: string;
  products: ProductsCollectionEdges;
}

export interface ProductsCollectionEdges {
  edges: Array<ProductCollectionNode>;
}

export interface ProductCollectionNode {
  node: ProductModel;
}
