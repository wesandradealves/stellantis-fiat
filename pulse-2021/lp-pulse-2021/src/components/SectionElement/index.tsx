import { FC, useEffect, useRef } from 'react';
import getRandomInt from '@/utils/getRandomInt';
import scssStyles from '@/utils/scssStyles';
import styles from './SectionElement.module.scss';
import { MenuLabels } from '@/models';
import PulseStore from '@/store/PulseStore';
import { useMobxStores } from '@/store';
import { useIsActive } from '@/hooks';
import { PRODUCT_DETAILS_PREFIX } from '@/mocks/menu';
import { observer } from 'mobx-react-lite';

interface SectionElementProps {
  id?: string;
  className?: string;
  heightBehaviour?: 'soft' | 'hard' | 'unset';
  navReference?: MenuLabels;
  noPadding?: boolean;
  onVisibe?: (isVisible: boolean) => void;
}

const SectionElement: FC<SectionElementProps> = observer(({
  id,
  className = '',
  children,
  heightBehaviour = 'unset',
  navReference,
  noPadding = false,
  onVisibe,
}) => {
  const ref = useRef(null);
  const isVisible = useIsActive(ref, 44);
  const store: PulseStore = useMobxStores();
  const heightClass = () => {
    switch (heightBehaviour) {
      case 'soft':
        return styles.softHeight;
      case 'hard':
        return styles.hardHeight;
      default:
        return '';
    }
  }

  useEffect(() => {
    if (onVisibe) {
      onVisibe(isVisible);
    }
  }, [isVisible, onVisibe]);

  useEffect(() => {
    if (isVisible && navReference) {
      if (!navReference.nestedPrefix) {
        store.setCurrentlyVisibleNav(navReference);
      } else if (store.currentTab) {
        const slug = store.currentTab.slug;
        if (window?.history) {
          try {
            window.history.replaceState({ section: navReference.slug }, '', `${process.env.BASE_PREFIX ?? ''}${PRODUCT_DETAILS_PREFIX}${slug}${store.getSearchParams}`.replace('//', '/'));
          } catch (_e) { }
        }
      }
    }
  }, [isVisible, navReference, store]);

  useEffect(() => {
    if (navReference && ref) {
      store.setNavRef(navReference.slug, ref);
    }
  }, [ref, store, navReference]);

  return (
    <section
      id={id ?? `section-${getRandomInt()}`}
      ref={ref}
      className={
        scssStyles([
          styles.container,
          heightClass(),
          className, noPadding ? styles.noPadding : '',
        ])
      }
    >
      {children}
    </section>
  )
});

export default SectionElement;
