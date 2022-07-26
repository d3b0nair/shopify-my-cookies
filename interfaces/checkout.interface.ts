export interface ICheckoutCreateMutationModel {
  data: { checkoutCreate: { checkout: ICheckoutModel } };
}

export interface IcheckoutLineItemsReplaceModel {
  data: { checkoutLineItemsReplace: { checkout: IlineItemsModel } };
}

export interface ICheckoutModel {
  id: string;
  webUrl: string;
  lineItems: IlineItemsModel;
}

export interface IlineItemsModel {
  edges: Array<{ node: { id: string; title: string; quantity: number } }>;
}
