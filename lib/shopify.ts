import {
  ICheckoutCreateMutationModel,
  IcheckoutLineItemsReplaceModel,
} from '../interfaces/checkout.interface';
import {
  IAllCollections,
  IHomePageCollectionModel,
} from '../interfaces/collection.interface';
import {
  IRecommendedProducts,
  IallProductsQuery,
  getProductQueryType,
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
    interface IRes {
      data: unknown | null;
      errors?: [{ message: string }];
    }
    const data = await fetch(URL, options).then((res) => {
      return res.json() as Promise<IRes>;
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
          return res.json() as Promise<IRes>;
        });
      }
      if (newData && newData.data) {
        return newData as unknown as Promise<T>;
      } else {
        if (typeof data.errors[0].message === 'string') {
          throw new Error(data.errors[0].message);
        } else {
          throw new Error(`Shopify data not fetched`);
        }
      }
    }
    return data as unknown as Promise<T>;
  } catch (err) {
    throw new Error(`Shopify data not fetched`);
  }
}

export const getProductsInCollection = async (handle: string) => {
  const query = `{
    collection(handle: "${handle}") {
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
  const products = res.data.collection.products.edges.map(({ node }) => {
    return { ...node, images: node.images.edges.map(({ node }) => node) };
  });
  return products;
};

export const getAllProducts = async () => {
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
  const allProducts = res.data.products.edges.map(({ node }) => node);
  return allProducts;
};

export const getProduct = async (handle: string) => {
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
  const product = {
    ...res.data.product,
    images: res.data.product.images.edges.map(({ node }) => node),
    variants: res.data.product.variants.edges.map(({ node }) => node),
  };
  return product;
};

export const createCheckout = async (
  lineItems: Array<{ id: string; quantity: number }>
) => {
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

export const getRecomendedProducts = async (handle: string) => {
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
  const recProducts =
    res.data.product.collections.edges[0].node.products.edges.map(
      ({ node }) => {
        const images = node.images.edges.map(({ node }) => node);
        return {
          ...node,
          images,
        };
      }
    );
  return recProducts;
};

export const getAllCollections = async () => {
  const query = `{
    collections(first: 250) {
      edges {
        node {
          handle
          products(first: 250) {
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
  }`;

  const res: IAllCollections = await shopifyData(query);
  const handleAndProductsPairs = res.data.collections.edges.map(({ node }) => {
    const products = node.products.edges.map(({ node }) => {
      const images = node.images.edges.map(({ node }) => node);
      return { ...node, images };
    });
    return {
      collectionHandle: node.handle,
      products,
    };
  });
  return handleAndProductsPairs;
};
