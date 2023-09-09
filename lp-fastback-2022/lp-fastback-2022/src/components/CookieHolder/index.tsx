import { IconButton } from '@/components';
import { Close } from '@components/SvgComponents';
import { STORAGE_PREFIX } from '@/constants';
import DataLayer from '@utils/DataLayer';
import { FC, useEffect } from 'react';
import styles from './CookieHolder.module.scss';
import { AnimatePresence, motion } from 'framer-motion';
import FastbackStore from '@store/FastbackStore';
import { useMobxStores } from '@/store';
import { observer } from 'mobx-react-lite';

const pageSubsection = 'lgpd-caixa-inicial';

const CookieHolder: FC = observer(() => {
  const store: FastbackStore = useMobxStores();
  const tracking = () => {
    DataLayer.clickEvent({
      element: 'política de privacidade',
      elementCategory: 'link',
      pageSection: 'conteudo',
      pageSubsection,
    });
  };

  const handleClose = () => {
    window.localStorage.setItem(`${STORAGE_PREFIX}lgpd-fastback`, 'true');
    store.setShowCookieInfo(false);
  };

  useEffect(() => {
    if (window?.localStorage) {
      store.setShowCookieInfo(
        !window.localStorage.getItem(`${STORAGE_PREFIX}lgpd-fastback`),
      );
    }
  }, [store]);

  return (
    <AnimatePresence>
      {store.showCookieInfo && (
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
            y: 100,
            opacity: 0,
          }}
          transition={{
            duration: 0.4,
          }}
          className={styles.container}
        >
          <div>
            <h3 className="title">
              RESPEITAMOS A SUA PRIVACIDADE
            </h3>
            <p>
              {
                'Informamos que utilizamos cookies que nos permitem fornecer funcionalidades como segurança, acessibilidade e gerenciamento de rede. Nosso site também pode usar cookies de terceiros para enviar publicidade mais relevante para você. Se quiser saber mais sobre os cookies que usamos para garantir uma melhor experiência em nosso site, acesse nossa '
              }
              <a
                href={'https://www.fiat.com.br/politica-de-privacidade.html'}
                target="_blank"
                title="Política de Privacidade"
                onClick={() => tracking()}
                onAuxClick={() => tracking()}
              >
                {'Política de Privacidade'}
              </a>
              {'.'}
            </p>
            <IconButton
              icon={<Close />}
              className={styles.closeButton}
              handleClick={() => {
                DataLayer.clickEvent({
                  element: 'fechar',
                  elementCategory: 'botao',
                  pageSection: 'conteudo',
                  pageSubsection,
                });
                handleClose();
              }}
              title="Fechar"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
});

export default CookieHolder;
