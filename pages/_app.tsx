import '../styles/globals.css';
import Layout from '../layout/Layout';
import type { AppProps } from 'next/app';
import { ShopProvider } from '../context/shopContext';
import { useRouter } from 'next/router';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Shopify My Cookies</title>
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:site_name" content="Shopify My Cookies" />
        <meta charSet="UTF-8" />
        <meta property="og:locale" content="en_US" />
        <meta
          name="description"
          content="All kinds of cookies! Wide variety of options that satisfies the most picky person."
        />
        <meta
          property="og:description"
          content="All kinds of cookies! Wide variety of options that satisfies the most picky person."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <ShopProvider>
        <Layout>
          <Component {...pageProps} key={router.asPath} />
        </Layout>
      </ShopProvider>
    </>
  );
}

export default MyApp;
