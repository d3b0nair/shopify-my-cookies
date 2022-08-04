import {
  ICheckoutCreateMutationModel,
  ICheckoutModel,
  IcheckoutLineItemsReplaceModel,
  IlineItemsModel,
} from '../interfaces/checkout.interface';
import { IHomePageCollectionModel } from '../interfaces/collection.interface';
import { IProductModel } from '../interfaces/products.interface';
import {
  IallProductsQuery,
  getProductQueryType,
  IProductsInCollection,
  IgetAllProductsReturn,
} from '../interfaces/shopify.interface';

const domain = process.env.SHOPIFY_STORE_DOMAIN as string;
const storefrontAccessToken = process.env.SHOPIFY_STOREFRONT_API as string;

async function shopifyData<T>(query: string): Promise<T> {
  const URL = `https://${domain}/api/2022-07/graphql.json`;
  const requestHeaders = {
    'X-Shopify-Storefront-Access-Token': `${storefrontAccessToken}`,
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };
  const options = {
    endpoint: URL,
    method: 'POST',
    headers: requestHeaders,
    body: JSON.stringify({ query }),
  };
  try {
    const data = await fetch(URL, options).then((res) => {
      return res.json() as Promise<T>;
    });
    return data;
  } catch (err) {
    throw new Error(`Shopify data not fetched`);
  }
}

export const getProductsInCollection = async (): Promise<
  Array<IProductsInCollection> | Record<string, never>
> => {
  const query = `{
    collection(handle: "frontpage") {
      title
      products(first: 25) {
        edges {
          node {
            id
            title
            description
            handle
            priceRange {
              minVariantPrice {
                amount
              }
            }
            images(first: 5) {
              edges {
                node {
                  url
                  altText
                }
              }
            }
          }
        }
      }
    }
  }
  `;

  const res: IHomePageCollectionModel = await shopifyData(query);

  return res.data.collection.products.edges;
};

export const getAllProducts = async (): Promise<
  Array<IgetAllProductsReturn>
> => {
  const query = `{
    products(first: 25) {
      edges {
        node {
          handle
          id
        }
      }
    }
  }
  `;
  const res: IallProductsQuery = await shopifyData(query);

  return res.data.products.edges;
};

export const getProduct = async (handle: string): Promise<IProductModel> => {
  const query = `{
    product(handle: "${handle}") {
      id
      title
      handle
      description
      images(first: 5) {
        edges {
          node {
            url
            altText
          }
        }
      }
      options {
        name
        values
        id
      }
      variants(first: 25) {
        edges {
          node {
            selectedOptions {
              name
              value
            }
            image {
              url
              altText
            }
            title
            id
            priceV2 {
              amount
            }
          }
        }
      }
    }
  }`;

  const res: getProductQueryType = await shopifyData(query);
  return res.data.product;
};

export const createCheckout = async (
  id: string,
  quantity: number
): Promise<Omit<ICheckoutModel, 'lineItems'>> => {
  const query = `
  mutation {
    checkoutCreate(input: {lineItems: [{variantId: "${id}", quantity: ${quantity}}]}) {
      checkout {
        id
        webUrl
      }
    }
  }
  `;
  const res: Omit<ICheckoutCreateMutationModel, 'lineItems'> =
    await shopifyData(query);
  return res.data.checkoutCreate.checkout;
};

export const updateCheckout = async (
  id: string,
  lineItems: Array<{ id: string; variantQuantity: number }>
): Promise<IlineItemsModel | Record<string, unknown>> => {
  const lineItemsObject = lineItems.map((item) => {
    return `{
      variantId: "${item.id}",
      quantity: ${item.variantQuantity}
    }`;
  });

  const query = `
  mutation {
    checkoutLineItemsReplace(lineItems: [${lineItemsObject.toString()}], checkoutId: "${id}"){
      checkout{
        id
        webUrl
        lineItems(first:25){
          edges {
            node {
              id
              title
              quantity
            }
          }
        }
      }
    }
  }
  `;
  const res: IcheckoutLineItemsReplaceModel = await shopifyData(query);

  return res.data ? res.data.checkoutLineItemsReplace.checkout : {};
};
