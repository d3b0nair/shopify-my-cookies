import { IImageModel, IOptionModel, IVariantModel } from './products.interface';

export interface IShopifyProductModel {
  id: string;
  title: string;
  handle: string;
  description?: string;
  images: {
    edges: [
      {
        node: IImageModel;
      }
    ];
  };
  options: Array<IOptionModel>;
  variants: {
    edges: Array<{
      node: IVariantModel;
    }>;
  };
  priceRange: {
    minVariantPrice: {
      amount: number;
    };
  };
}

export type getProductQueryType = { data: { product: IShopifyProductModel } };

export interface IallProductsQuery {
  data: { products: { edges: Array<IgetAllProductsReturn> } };
}

export interface IgetAllProductsReturn {
  node: { handle: string; id: string };
}

export interface IRecommendedProducts {
  data: {
    product: {
      collections: {
        edges: Array<{
          node: {
            products: {
              edges: Array<{
                node: Omit<IShopifyProductModel, 'variants' | 'options'>;
              }>;
            };
          };
        }>;
      };
    };
  };
}
