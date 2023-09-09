import "@styles/globals.scss";
import "@styles/gallery.scss";
import "swiper/css";
import dynamic from "next/dynamic";
import { getStore, StoreProvider } from "@store/index";
import { useEffect } from "react";
import NextApp, { AppContext, AppProps } from "next/app";
import CookieHolder from "@/components/CookieHolder";
import { StickyCTA } from "@/components";

interface CustomAppProps extends Omit<AppProps, "Component"> {
  Component: AppProps["Component"] & { Layout: JSX.Element };
}

const MyApp = ({ Component, pageProps }: AppProps<CustomAppProps>) => {
  const RedeclaredAndHacky_Component = Component as any;
  const Layout = RedeclaredAndHacky_Component.layoutProps?.Layout;
  const store = getStore();

  useEffect(() => {
    if (store && window?.location?.search) {
      const queryObject = window.location.search;
      if (queryObject) {
        store.setQueryString(new URLSearchParams(queryObject));
      }
    }
  }, [store]);

  return (
    <StoreProvider value={store}>
      <div style={{ position: "relative", zIndex: 0 }}>
        <RedeclaredAndHacky_Component {...pageProps} />
      </div>
      <StickyCTA />
      <CookieHolder />
    </StoreProvider>
  );
};

MyApp.getInitialProps = async (
  appContext: AppContext
): Promise<{
  pageProps: AppProps["pageProps"];
}> => {
  const appProps = await NextApp.getInitialProps(appContext);
  return { ...appProps };
};

export default dynamic(() => Promise.resolve(MyApp), {
  ssr: false,
});
