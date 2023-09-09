import { FC, useEffect, useRef, CSSProperties } from 'react';
import getRandomInt from '@/utils/getRandomInt';
import scssStyles from '@/utils/scssStyles';
import styles from './SectionElement.module.scss';
import { MenuLabel } from '@/models';
import FastbackStore from '@store/FastbackStore';
import { useMobxStores } from '@/store';
import { useIsActive } from '@/hooks';

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
  style?: CSSProperties;
  handleKeyDown?: (e: KeyboardEvent, isVisible: boolean) => void;
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
  handleKeyDown,
  style = {},
}) => {
  const ref = useRef<HTMLElement>(null);
  const isVisible = useIsActive(ref, 44);
  const store: FastbackStore = useMobxStores();
  const heightClass = () => {
    switch (heightBehaviour) {
      case 'soft':
        return styles.softHeight;
      case 'hard':
        return styles.hardHeight;
      default:
        return '';
    }
  };

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
    const onKeydown = (e: KeyboardEvent) => {
      handleKeyDown && handleKeyDown(e, isVisible);
    }
    if(handleKeyDown) {
      document?.body?.addEventListener('keydown', onKeydown);
    }

    return () => {
      document?.body?.removeEventListener('keydown', onKeydown);
    };
  }, [handleKeyDown, isVisible]);

  useEffect(() => {
    if (
      onSlugSuffix &&
      navReference &&
      !store.slugSuffixes[navReference.slug] &&
      (slugPrefixes.length > 0
        ? !store.slugSuffixes[slugPrefixes[0]]
        : true)
    ) {
      if (slugPrefixes.length > 0) {
        slugPrefixes.forEach((slug) => {
          store.setSlugSuffixes(
            { ...navReference, slug },
            onSlugSuffix,
          );
        });
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
      className={scssStyles([
        styles.container,
        heightClass(),
        className,
        noPadding ? styles.noPadding : '',
      ])}
      style={style}
    >
      {children}
    </section>
  );
};

export default SectionElement;
