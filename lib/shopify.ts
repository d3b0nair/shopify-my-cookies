import { HomePageCollectionModel } from '../interfaces/collection.interface';
import { ProductModel, ProductsEdges } from '../interfaces/products.interface';

const domain = process.env.SHOPIFY_STORE_DOMAIN;
const storefrontAccessToken = process.env.SHOPIFY_STOREFRONT_API;

const shopifyData = async (query: string) => {
  const URL: string = `https://${domain}/api/2022-07/graphql.json`;
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
    return data;
  } catch (err) {
    throw new Error('Products not fetched');
  }
};

export const getProductsInCollection =
  async (): Promise<HomePageCollectionModel> => {
    const query = `{
    collection(handle: "frontpage") {
      title
      products(first: 25) {
        edges {
          node {
            id
            title
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

    const res = await shopifyData(query);
    const allProducts = res.data && res.data.collection.products.edges;
    return allProducts;
  };

export const getAllProducts = async (): Promise<ProductsEdges[]> => {
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
  const res = await shopifyData(query);

  const slugs = res.data && res.data.products.edges;
  return slugs;
};

export const getProduct = async (handle: string): Promise<ProductModel> => {
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

  const res = await shopifyData(query);
  const product = res.data && res.data.product;
  return product;
};
