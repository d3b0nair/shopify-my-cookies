export interface IProductModel {
  id: string;
  title: string;
  handle: string;
  description?: string;
  images: {
    edges: Array<{
      node: IImageModel;
    }>;
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
export interface IProductsListModel {
  edges: Array<{
    node: IProductModel;
  }>;
}
export interface IImageModel {
  url: string;
  altText: string;
}
export interface IOptionModel {
  name: string;
  values: string[];
  id: string;
}
export interface IVariantModel {
  selectedOptions: Array<{
    name: string;
    value: string;
  }>;
  image?: IImageModel;
  title: string;
  id: string;
  priceV2: {
    amount: number;
  };
}

export interface IRecommendedProducts {
  data: {
    product: {
      collections: {
        edges: Array<{
          node: {
            products: {
              edges: Array<{
                node: Omit<IProductModel, 'variants' | 'options'>;
              }>;
            };
          };
        }>;
      };
    };
  };
}
