import '@styles/globals.scss';
import 'swiper/css';
import dynamic from 'next/dynamic';
import { getStore, StoreProvider } from '@store/index';
import { useEffect } from 'react';
import Head from 'next/head';
import NextApp, { AppContext, AppProps } from 'next/app';
import CookieHolder from '@/sections/CookieHolder';
import { StickyCTA } from '@/components';
import { metaTags } from '@/constants';
import { ModalHero } from '@/views';
import { NextPageContext } from 'next';

interface CustomAppProps extends Omit<AppProps, "Component"> {
    Component: AppProps["Component"] & { Layout: JSX.Element };
  }

const MyApp = ({
  Component,
  pageProps,
}: AppProps<CustomAppProps>) => {
    const RedeclaredAndHacky_Component = Component as any;
    const Layout = RedeclaredAndHacky_Component.layoutProps?.Layout;
    const store = getStore();

  useEffect(() => {
    if (store && window?.location?.search) {
      const queryObject = window.location.search;
      if (queryObject) {
        store.setSearchQuery(new URLSearchParams(queryObject));
      }
    }
  }, [store]);

  return (
    <>
      <Head>
        <title>{metaTags.title}</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        />
      </Head>
      <StoreProvider value={store}>
            <div style={{ position: 'relative', zIndex: 0 }}>
                {/* <NextPageContext></NextPageContext> */}
            <RedeclaredAndHacky_Component {...pageProps} />
        </div>
        <StickyCTA />
        <CookieHolder />
        <ModalHero />
      </StoreProvider>
    </>
  );
};

MyApp.getInitialProps = async (
  appContext: AppContext,
): Promise<{
  pageProps: AppProps['pageProps'];
}> => {
  const appProps = await NextApp.getInitialProps(appContext);
  return { ...appProps };
};

export default dynamic(() => Promise.resolve(MyApp), {
  ssr: false,
});


