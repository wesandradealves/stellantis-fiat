import { links, COMPRE_TITLE } from '@/mocks/menu';
import { useMobxStores } from '@/store';
import StradaStore from '@/store/StradaStore';
import DataLayer from '@/utils/DataLayer';
import scssStyles from '@/utils/scssStyles';
import { observer } from 'mobx-react-lite';
import { FC, useState } from 'react';
import { useIdleTimer } from 'react-idle-timer';
import { CTAButton } from '..';
import styles from './StickyCTA.module.scss';

const StickyCTA: FC = observer(() => {
  const store: StradaStore = useMobxStores();
  const [isShown, setIsShown] = useState(false);

  const hide = () => {
    if (isShown) {
      setIsShown(false);
    }
  };

  const show = () => {
    if (store.navRefs && store.navRefs['compre-a-sua']) {
      const element = store.navRefs['compre-a-sua']
        .current as HTMLDivElement;
      if (
        element &&
        window.scrollY >
          element.offsetTop +
            element.getBoundingClientRect().height
      ) {
        setIsShown(true);
      }
    }
  };

  useIdleTimer({
    timeout: 60 * 3,
    onActive: () => hide(),
    onAction: () => show(),
    debounce: 2000,
  });

  if (store.isDesktop) {
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
            href={links.compre}
            larger
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
            bgClassName={styles.bgClassName}
            handleAuxClick={() => {
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
