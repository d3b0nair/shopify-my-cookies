import '../styles/globals.css';
import Layout from '../layout/Layout';
import type { AppProps } from 'next/app';
import { ShopProvider } from '../context/shopContext';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <ShopProvider>
      <Layout>
        <Component {...pageProps} key={router.asPath} />
      </Layout>
    </ShopProvider>
  );
}

export default MyApp;
