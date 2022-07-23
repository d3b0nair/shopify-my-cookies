/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    SHOPIFY_STOREFRONT_API: process.env.SHOPIFY_STOREFRONT_API,
    SHOPIFY_STORE_DOMAIN: process.env.SHOPIFY_STORE_DOMAIN,
  },
  images: { domains: ['cdn.shopify.com'] },
};

module.exports = nextConfig;
