import {
  links,
  COMPRE_TITLE,
  MONTE_TITLE, dataMenuLabel,
} from '@/project/data/menu';
import {useMobxStores} from '@/project/store';
import Store from '@/project/store/Store';
import DataLayer from '@/prox/utils/DataLayer';
import scssStyles from '@/prox/utils/scssStyles';
import {observer} from 'mobx-react-lite';
import {FC, useState} from 'react';
import {useIdleTimer} from 'react-idle-timer';
import {CTAButton} from '..';
import styles from './StickyCTA.module.scss';
import {useEffect} from 'react';

const StickyCTA: FC = observer(() => {
  const store: Store = useMobxStores();
  const [isShown, setIsShown] = useState(false);
  const [delay, setDelay] = useState(true);

  const hide = () => {
    if (isShown) {
      setIsShown(false);
    }
  };

  const show = () => {
    const slug = dataMenuLabel()[0]?.slug;
    if (store.navRefs && store.navRefs[slug]) {
      const element = store.navRefs[slug].current as HTMLDivElement;
      if (element && window.scrollY > (element.offsetTop + element.getBoundingClientRect().height)) {
        setIsShown(true);
      }
    }
  }

  useEffect(() => {
    setTimeout(() => {
      setDelay(false);
    }, 500);
  }, []);

  useIdleTimer({
    timeout: 60 * 3,
    onActive: () => hide(),
    onAction: () => show(),
    debounce: 2000
  });

  if (store.isDesktop || delay) {
    return null;
  }
  return (
      <>
        {store.galleryExpanded ? (
            <></>
        ) : (
            <div
                className={scssStyles([
                  styles.container,
                  isShown ? styles.active : '',
                ])}
            >
              <CTAButton
                  href={links.monte}
                  larger
                  className={styles.button}
                  bgClassName={styles.bgClassName}
                  text={MONTE_TITLE}
                  title={MONTE_TITLE}
                  handleClick={() => {
                    DataLayer.clickEvent({
                      element: MONTE_TITLE,
                      elementCategory: 'cta',
                      pageSection: 'conteudo',
                      pageSubsection: 'float',
                    });
                  }}
              />
              <CTAButton
                  href={links.compre}
                  larger
                  bgClassName={styles.bgClassName}
                  className={styles.button}
                  text={COMPRE_TITLE}
                  title={COMPRE_TITLE}
                  handleClick={() => {
                    DataLayer.clickEvent({
                      element: COMPRE_TITLE,
                      elementCategory: 'cta',
                      pageSection: 'conteudo',
                      pageSubsection: 'float',
                    });
                  }}
              />
            </div>
        )}
      </>
  );
});

export default StickyCTA;

