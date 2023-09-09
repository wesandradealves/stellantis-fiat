import { Conditional, ContainerBody, WhatsappBtn } from "@/components";
import { FC, useEffect, useRef, useState } from "react";
import FastbackStore from "@store/FastbackStore";
import { useMobxStores } from "@/store";
import Script from "next/script";
import {
  MainStories,
  ProductDisplay,
  Versions,
  Gallery,
  ProductDetails,
  CustomerType,
} from "@/sections";
import Footer from "@/sections/Footer";
import { MenuLabel } from "@/models";
import { observer } from "mobx-react-lite";
import Head from "next/head";
import { metaTags } from "@/constants";

const Home: FC<{
  navRef: MenuLabel | undefined;
  slugSuffix?: string;
}> = observer(({ navRef, slugSuffix }) => {
  const store: FastbackStore = useMobxStores();
  const timeout = useRef<NodeJS.Timeout | undefined>();
  const [loaded, setLoaded] = useState(false);
  const [loadedSlugSuffix, setLoadedSlugSuffix] = useState(false);

  const deleteCaches = async () => {
    try {
      const keys = await window.caches.keys();
      await Promise.all(keys.map((key) => caches.delete(key)));
    } catch (err) {
      console.log("deleteCache err: ", err);
    }
  };

  useEffect(() => {
    try {
      if ("serviceWorker" in navigator) {
        caches.keys().then(function (cacheNames) {
          cacheNames.forEach(function (cacheName) {
            caches.delete(cacheName);
            console.log(cacheName);
          });
        });

        navigator.serviceWorker
          .getRegistrations()
          .then(function (registrations) {
            for (const registration of registrations) {
              registration.unregister();
            }
          })
          .catch(function (err) {
            console.log("Service Worker registration failed: ", err);
          });
      }

      if (!localStorage.getItem("cacheReset")) {
        deleteCaches()
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          .then((_) => {
            localStorage.setItem("cacheReset", "yes");
          });
      }

      console.log("trying to stop and clear serviceWorker...");
    } catch (error) {
      console.log("error cache", error);
    }

    const handleResize = () => {
      store.setPageX(window?.innerWidth);
      if (store.isDesktop && store.menuOpen) {
        store.setMenuOpen(false);
      }
    };
    window?.addEventListener("resize", handleResize);
    handleResize();
    setLoaded(true);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [store]);

  useEffect(() => {
    if (navRef) {
      timeout.current = setTimeout(() => {
        store.scrollToRef(navRef.prefixRelation ?? navRef);
      }, 400);
    }

    return () => {
      if (timeout.current) {
        clearTimeout(timeout.current);
      }
    };
  }, [navRef, store]);

  useEffect(() => {
    if (slugSuffix && !loadedSlugSuffix) {
      if (Object.keys(store.slugSuffixes)?.length && navRef?.slug) {
        store.setStopHistoryChange(true);
        if (store.slugSuffixes[navRef?.slug]) {
          setTimeout(() => {
            store.slugSuffixes[navRef?.slug](slugSuffix);
            store.setStopHistoryChange(false);
            setLoadedSlugSuffix(true);
          }, 10);
        } else {
          store.setStopHistoryChange(false);
        }
      }
    }
  }, [store, navRef, store.slugSuffixes, slugSuffix, loadedSlugSuffix]);

  return (
    <>
      <Head>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <link
          rel="canonical"
          href={"https://" + metaTags.url.replace(/(^\w+:|^)\/\//, "")}
        />

        <meta name="robots" content="index, follow" />
        <link rel="manifest" href="site.webmanifest" />

        <title>{metaTags.title}</title>
        <meta name="title" content={metaTags.title} />
        <meta name="description" content={metaTags.description} />
        <meta name="keywords" content={metaTags.keywords} />
        <meta property="image" content={metaTags.image} />

        <meta
          property="og:title"
          content={metaTags.facebook.title || metaTags.title}
        />
        <meta
          property="og:description"
          content={metaTags.facebook.description || metaTags.description}
        />
        <meta
          property="og:site_name"
          content={metaTags.facebook.title || metaTags.title}
        />
        <meta property="og:url" content={metaTags.url} />
        <meta property="fb:app_id" content={metaTags.facebook.app_id || ""} />
        <meta property="og:type" content={metaTags.facebook.type} />
        <meta property="og:image" content={metaTags.facebook.image} />
        <meta
          property="og:image:alt"
          content={metaTags.facebook.imageAlt || metaTags.imageAlt || ""}
        />
        <meta
          property="og:image:width"
          content={metaTags.facebook.imageWidth}
        />
        <meta
          property="og:image:height"
          content={metaTags.facebook.imageHeight}
        />

        <meta name="twitter:card" content={metaTags.twitter.card} />
        <meta
          name="twitter:title"
          content={metaTags.twitter.title || metaTags.title}
        />
        <meta
          name="twitter:description"
          content={metaTags.twitter.description || metaTags.description}
        />
        <meta name="twitter:site" content={metaTags.twitter.site || ""} />
        <meta name="twitter:image" content={metaTags.twitter.image} />
        <meta
          name="twitter:image:alt"
          content={metaTags.twitter.imageAlt || metaTags.imageAlt || ""}
        />
        <meta name="twitter:url" content={metaTags.url} />

        <link
          rel="icon"
          href={`${process.env.BASE_PREFIX}images/general/icons/favicon.ico`}
          type="image/x-icon"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href={`${process.env.BASE_PREFIX}images/general/icons/favicon-16x16.png`}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href={`${process.env.BASE_PREFIX}images/general/icons/favicon-32x32.png`}
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href={`${process.env.BASE_PREFIX}images/general/icons/apple-icon-120x120.png`}
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href={`${process.env.BASE_PREFIX}images/general/icons/apple-icon-144x144.png`}
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href={`${process.env.BASE_PREFIX}images/general/icons/apple-icon-152x152.png`}
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${process.env.BASE_PREFIX}images/general/icons/apple-icon-180x180.png`}
        />

        <link
          rel="mask-icon"
          href={`${process.env.BASE_PREFIX}images/general/icons/safari-pinned-tab.svg`}
          color={metaTags.themeColor || "#000000"}
        />
        <meta
          name="msapplication-TileColor"
          content={metaTags.themeColor || "#000000"}
        />
        <meta name="theme-color" content={metaTags.themeColor || "#000000"} />

        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />

        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, shrink-to-fit=no, user-scalable=0"
        />

        <script
          defer
          type="text/javascript"
          src={`${process.env.BASE_PREFIX}third-party/script.js`}
        />
      </Head>
      <ContainerBody includeNavigation>
        <Conditional notOn="mobile">
          <ProductDisplay />
        </Conditional>

        <Conditional notOn="desktop">
          <MainStories />
        </Conditional>

        <CustomerType />
        <Versions />
        {loaded && <Gallery />}
        <ProductDetails />
        <Footer />
        <WhatsappBtn />
        <Script strategy="afterInteractive" id="handleTalk">
          {`
            window.ht = new HT({
              token: '5e678207a1f3d846ea77640b9216dd4f',
              avatar: 'MAYA',
              opacity: 0,
              highContrast: true,
              mobileConfig: {
                align: 'top',
              },
            });
          `}
        </Script> 
      </ContainerBody>
    </>
  );
});

export default Home;
