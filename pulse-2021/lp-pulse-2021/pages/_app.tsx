import '@styles/globals.scss';
import 'swiper/css';
import dynamic from 'next/dynamic'
import { getStore, StoreProvider } from '@store/index';
import { useEffect } from 'react';
import Head from 'next/head';
import NextApp, { AppContext, AppProps } from 'next/app';
import CookieHolder from '@/sections/CookieHolder';
import { heroBackgrounds } from '@/assets';
import { StickyCTA } from '@/components';
import { metaTags } from '@/constants';
import getCache from '@/utils/getCache';

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  const store = getStore();

  // CACHING ASSETS IN THE BACKGROUND
  useEffect(() => {
    const filesToCache: string[] = store.isDesktop ? [
      heroBackgrounds.conectividade.desktop,
      heroBackgrounds.design.desktop,
      heroBackgrounds.performance.desktop,
      heroBackgrounds.robustez.desktop,
      heroBackgrounds.seguranca.desktop,
    ] : [
      heroBackgrounds.conectividade.mobile,
      heroBackgrounds.design.mobile,
      heroBackgrounds.performance.mobile,
      heroBackgrounds.robustez.mobile,
      heroBackgrounds.seguranca.mobile,
    ];

    getCache(filesToCache);

  }, [store]);

  useEffect(() => {
    if (store && window?.location?.search) {
      const queryObject = window.location.search;
      if (queryObject) {
        store.setQueryString(new URLSearchParams(queryObject));
      }
    }
  }, [store]);

  return (
    <>
      <Head>
        <title>
          {metaTags.title}
        </title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <StoreProvider value={store}>
        <div
          style={{ position: 'relative', zIndex: 0 }}
        >
          <Component {...pageProps} />
        </div>
        <StickyCTA />
        <CookieHolder />
      </StoreProvider>
    </>
  )
}

MyApp.getInitialProps = async (appContext: AppContext): Promise<{
  pageProps: AppProps['pageProps'];
}> => {
  const appProps = await NextApp.getInitialProps(appContext);
  return { ...appProps };
};

export default dynamic(() => Promise.resolve(MyApp), {
  ssr: false
});
