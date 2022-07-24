export interface ProductModel {
  id: string;
  title: string;
  handle: string;
  description?: string;
  images: ImagesEdges;
  options: OptionsModel[];
  variants: VariantsEdges;
  priceRange: PriceRange;
}

export interface PriceRange {
  minVariantPrice: MinVariantPrice;
}
export interface MinVariantPrice {
  amount: number;
}

export interface ProductsListModel {
  edges: Array<ProductsEdges>;
}
export interface ProductsEdges {
  node: ProductNode;
}
export interface ProductNode {
  handle: string;
  id: string;
}

export interface ImagesEdges {
  edges: Array<ImageNode>;
}

export interface ImageNode {
  node: ImageModel;
}

export interface ImageModel {
  url: string;
  altText: string;
}

export interface OptionsModel {
  name: string;
  values: string[];
  id: string;
}

export interface VariantsEdges {
  edges: Array<VariantNode>;
}

export interface VariantNode {
  node: VariantModel;
}

export interface VariantModel {
  selectedOptions: SelectedOptionsModel[];
  image?: ImageModel;
  title: string;
  id: string;
  priceV2: PriceV2Model;
}

export interface SelectedOptionsModel {
  name: string;
  value: string;
}

export interface PriceV2Model {
  amount: number;
}
