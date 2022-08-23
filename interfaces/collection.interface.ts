import { IShopifyProductModel } from './shopify.interface';

export interface IHomePageCollectionModel {
  data: {
    title: string;
    collection: {
      title: string;
      products: {
        edges: Array<{
          node: Omit<IShopifyProductModel, 'variants' | 'options'>;
        }>;
      };
    };
  };
}

export interface IAllCollections {
  data: {
    collections: {
      edges: [
        {
          node: {
            handle: string;
            products: {
              edges: [
                {
                  node: IShopifyProductModel;
                }
              ];
            };
          };
        }
      ];
    };
  };
}
