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

export interface IProduct {
  id: string;
  title: string;
  handle: string;
  description?: string | undefined;
  options: Array<IOptionModel>;
  priceRange: {
    minVariantPrice: {
      amount: number;
    };
  };
  variants: Array<IVariantModel>;
  images: Array<IImageModel>;
}
