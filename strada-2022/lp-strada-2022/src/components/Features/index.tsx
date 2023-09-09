import { Conditional, SectionElement } from '@/components';
import { FC } from 'react';
import Tabs from './Tabs';
import { AnimatePresence, motion } from 'framer-motion';
import { useMobxStores } from '@/store';
import StradaStore from '@/store/StradaStore';
import styles from './Features.module.scss';
import SwipersDesktop from './SwipersDesktop';
import SwipersMobile from './SwipersMobile';
import { observer } from 'mobx-react-lite';

const Features: FC = observer(() => {
  const store: StradaStore = useMobxStores();
  return (
    <AnimatePresence>
      {store.modalHero && (
        <motion.div
          initial={{
            y: 100,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          exit={{
            y: -100,
            opacity: 0,
          }}
          transition={{
            delay: 0.1,
            duration: 0.2,
          }}
        >
          <SectionElement
            id="heroFeatures"
            heightBehaviour="soft"
            noPadding
            className={styles.container}
          >
            <Conditional
              desktop={(
                <>
                  <Tabs />
                  <SwipersDesktop />
                </>
              )}
              mobile={(
                <SwipersMobile />
              )}
            />
          </SectionElement>
        </motion.div>
      )}
    </AnimatePresence>
  );
});

export default Features;
