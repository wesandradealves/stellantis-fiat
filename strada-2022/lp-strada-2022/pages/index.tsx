import { ContainerBody, WhatsappBtn } from '@/components';
import React, { FC, useEffect, useRef, useState } from 'react';
import StradaStore from '@/store/StradaStore';
import { useMobxStores } from '@/store';
import {
  Hero,
  Versions,
  Gallery,
  ProductDetails,
  CustomerType,
  SecondVersion,
} from '@/sections';
import Footer from '@/sections/Footer';
import { MenuLabel } from '@/models';
import { observer } from 'mobx-react-lite';

const Home: FC<{
  navRef: MenuLabel | undefined;
  slugSuffix?: string;
}> = observer(({ navRef, slugSuffix }) => {
  const store: StradaStore = useMobxStores();
  const timeout = useRef<NodeJS.Timeout | undefined>();
  const [loaded, setLoaded] = useState(false);
  const [loadedSlugSuffix, setLoadedSlugSuffix] =
    useState(false);

  const deleteCaches = async () => {
    try {
      const keys = await window.caches.keys();
      await Promise.all(keys.map((key) => caches.delete(key)));
    } catch (err) {
      console.log('deleteCache err: ', err);
    }
  };
  useEffect(() => {
    try {
      if ('serviceWorker' in navigator) {
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
            console.log(
              'Service Worker registration failed: ',
              err,
            );
          });
      }

      if (!localStorage.getItem('cacheReset')) {
        deleteCaches()
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          .then((_) => {
            localStorage.setItem('cacheReset', 'yes');
          });
      }

      console.log('trying to stop and clear serviceWorker...');
    } catch (error) {
      console.log('error cache', error);
    }

    const handleResize = () => {
      store.setPageX(window?.innerWidth);
      if (store.isDesktop && store.menuOpen) {
        store.setMenuOpen(false);
      }
    };
    window?.addEventListener('resize', handleResize);
    handleResize();
    setLoaded(true);
    return () => {
      window.removeEventListener('resize', handleResize);
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
      if (
        Object.keys(store.slugSuffixes)?.length &&
        navRef?.slug
      ) {
        store.setStopHistoryChange(true);
        if (store.slugSuffixes[navRef?.slug]) {
          setTimeout(() => {
            store.slugSuffixes[navRef?.slug](slugSuffix);
            store.setStopHistoryChange(false);
            setLoadedSlugSuffix(true);
          }, 400);
        } else {
          store.setStopHistoryChange(false);
        }
      }
    }
  }, [
    store,
    navRef,
    store.slugSuffixes,
    slugSuffix,
    loadedSlugSuffix,
  ]);

  return (
    <ContainerBody includeNavigation>
      <Hero />
      <SecondVersion />
      <Versions />
      {loaded && <CustomerType />}
      {loaded && <Gallery />}
      <ProductDetails />
      <Footer />
      <WhatsappBtn />
    </ContainerBody>
  );
});

export default Home;
