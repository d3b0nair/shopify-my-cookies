/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import {
  ICheckoutCreateMutationModel,
  ICheckoutModel,
  IcheckoutLineItemsReplaceModel,
} from '../interfaces/checkout.interface';
import { IHomePageCollectionModel } from '../interfaces/collection.interface';
import {
  IProductModel,
  IRecommendedProducts,
} from '../interfaces/products.interface';
import {
  IallProductsQuery,
  getProductQueryType,
  IProductsInCollection,
  IgetAllProductsReturn,
} from '../interfaces/shopify.interface';
import { sleep } from '../utils/helpers';

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
      return res.json();
    });
    if (data.errors) {
      let i = 0;
      let newData;
      while (
        data.errors[0].message ===
        'Too many requests. Please try again in a few seconds'
      ) {
        i++;
        await sleep(1000 * i);
        newData = await fetch(URL, options).then((res) => {
          return res.json();
        });
      }
      if (newData.data) {
        return newData as Promise<T>;
      } else {
        if (typeof data.errors[0].message === 'string') {
          throw new Error(data.errors[0].message as string);
        } else {
          throw new Error(`Shopify data not fetched`);
        }
      }
    }
    return data as Promise<T>;
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
  lineItems: Array<{ id: string; quantity: number }>
): Promise<Omit<ICheckoutModel, 'lineItems'>> => {
  const lineItemsObject = lineItems.map((item) => {
    return `{
      variantId: "${item.id}",
      quantity: ${item.quantity}
    }`;
  });
  const query = `
  mutation {
    checkoutCreate(input: {lineItems: [${lineItemsObject.toString()}],}) {
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
  checkoutId: string,
  lineItems: Array<{ id: string; quantity: number }>
) => {
  const lineItemsObject = lineItems.map((item) => {
    return `{
      variantId: "${item.id}",
      quantity: ${item.quantity}
    }`;
  });
  if (!checkoutId) {
    await createCheckout(lineItems);
  } else {
    const query = `
  mutation {
    checkoutLineItemsReplace(lineItems: [${lineItemsObject.toString()}], checkoutId: "${checkoutId}"){
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
    return res.data.checkoutLineItemsReplace.checkout;
  }
};

export const getRecomendedProducts = async (
  handle: string
): Promise<
  {
    node: Omit<IProductModel, 'variants' | 'options'>;
  }[]
> => {
  const query = `{
    product(handle: "${handle}") {
      collections(first: 1) {
        edges {
          node {
            products(first: 5) {
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
      }
    }
  }

  `;
  const res: IRecommendedProducts = await shopifyData(query);

  return res.data.product.collections.edges[0].node.products.edges;
};
