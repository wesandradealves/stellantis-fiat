import {
  Conditional,
  ContainerBody,
  WhatsappBtn,
} from '@/components';
import { FC, useEffect, useRef, useState } from 'react';
import PulseStore from '@store/PulseStore';
import { useMobxStores } from '@/store';
import {
  ReserveCTA,
  MainStories,
  ProductDisplay,
  Versions,
  Gallery,
  ProductDetails,
  ConnectMe,
  BannerToAbarth,
  DesignSound,
} from '@/sections';
import Footer from '@/sections/Footer';
import { MenuLabels } from '@/models';
import Awards from '@/sections/Awards';

const Home: FC<{ navRef: MenuLabels | undefined }> = ({
  navRef,
}) => {
  const store: PulseStore = useMobxStores();
  const timeout = useRef<NodeJS.Timeout | undefined>();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
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
        store.scrollToRef(navRef);
      }, 400);
    }

    return () => {
      if (timeout.current) {
        clearTimeout(timeout.current);
      }
    };
  }, [navRef, store]);

  return (
    <ContainerBody includeNavigation>
      <Conditional notOn="mobile">
        <ProductDisplay />
      </Conditional>

      <Conditional notOn="desktop">
        <MainStories />
      </Conditional>
      {/* <Awards /> */}
      <DesignSound />
      <BannerToAbarth />
      <ReserveCTA />
      {loaded && <ConnectMe />}
      <Versions />
      {loaded && <Gallery />}
      <ProductDetails />
      <Footer />
      <WhatsappBtn />
    </ContainerBody>
  );
};

export default Home;
