import { FC, useEffect, useRef } from 'react';
import getRandomInt from '@/prox/utils/getRandomInt';
import scssStyles from '@/prox/utils/scssStyles';
import styles from './SectionElement.module.scss';
import { MenuLabel } from '@/prox/models';
import Store from '@/project/store/Store';
import { useMobxStores } from '@/project/store';
import { useIsActive } from '@/prox/hooks';

interface SectionElementProps {
  id?: string;
  className?: string;
  heightBehaviour?: 'soft' | 'hard' | 'unset';
  navReference?: MenuLabel;
  noPadding?: boolean;
  slugPrefixes?: string[];
  overrideReference?: boolean;
  onSlugSuffix?: (suffix: string) => void;
  onVisibilityChange?: (isVisible: boolean) => void;
  getElement?: (element: HTMLDivElement) => void;
}

const SectionElement: FC<SectionElementProps> = ({
  id,
  className = '',
  children,
  heightBehaviour = 'unset',
  navReference,
  noPadding = false,
  overrideReference = false,
  onSlugSuffix,
  slugPrefixes = [],
  onVisibilityChange,
  getElement,
}) => {
  const ref = useRef(null);
  const isVisible = useIsActive(ref, 44);
  const store: Store = useMobxStores();
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
    if (!!onVisibilityChange) {
      onVisibilityChange(isVisible);
    }
  }, [isVisible, onVisibilityChange]);

  useEffect(() => {
    if (isVisible && navReference && !overrideReference) {
      store.setCurrentlyVisibleNav(navReference);
    }
  }, [isVisible, navReference, overrideReference, store]);

  useEffect(() => {
    if (onSlugSuffix && navReference && !store.slugSuffixes[navReference.slug] && (slugPrefixes.length > 0 ? !store.slugSuffixes[slugPrefixes[0]] : true)) {
      if (slugPrefixes.length > 0) {
        slugPrefixes.forEach((slug) => {
          store.setSlugSuffixes({ ...navReference, slug }, onSlugSuffix);
        })
      } else {
        store.setSlugSuffixes(navReference, onSlugSuffix);
      }
    }
  }, [onSlugSuffix, store, navReference, slugPrefixes]);

  useEffect(() => {
    if (getElement && ref.current) {
      getElement(ref.current as unknown as HTMLDivElement);
    }
  }, [ref, getElement]);

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
}

export default SectionElement;
