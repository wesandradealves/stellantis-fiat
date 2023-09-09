import { IconButton } from '@/components';
import { brandLinks, STORAGE_PREFIX } from '@/constants';
import { FC, useEffect } from 'react';
import styles from './CookieHolder.module.scss';
import { motion, AnimatePresence } from 'framer-motion';
import { observer } from 'mobx-react-lite';
import { useMobxStores } from '@/store';
import StradaStore from '@store/StradaStore';

const CookieHolder: FC = observer(() => {
  const store: StradaStore = useMobxStores();

  const handleCloseCookie = () => {
    window.localStorage.setItem(`${STORAGE_PREFIX}lgpd`, 'true');
    store.setShowCookieInfo(false);
  };

  const handleCloseDisclaimer = () => {
    window.localStorage.setItem(
      `${STORAGE_PREFIX}disclaimer`,
      'true',
    );
    store.setShowDisclaimerInfo(false);
  };

  useEffect(() => {
    if (window?.localStorage) {
      store.setShowCookieInfo(
        !window.localStorage.getItem(`${STORAGE_PREFIX}lgpd`),
      );
      store.setShowDisclaimerInfo(
        !window.localStorage.getItem(
          `${STORAGE_PREFIX}disclaimer`,
        ),
      );
    }
  }, [store]);

  return (
    <div className={styles.container}>
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
            className={styles.cookiesContainer}
          >
            <div>
              <div className={styles.textContent}>
                <h3 className={styles.title}>
                  RESPEITAMOS A SUA PRIVACIDADE
                </h3>
                <p>
                  {
                    'Informamos que utilizamos cookies que nos permitem fornecer funcionalidades como segurança, acessibilidade e gerenciamento de rede. Nosso site também pode usar cookies de terceiros para enviar publicidade mais relevante para você. Se quiser saber mais sobre os cookies que usamos para garantir uma melhor experiência em nosso site, acesse nossa '
                  }
                  <a
                    href={brandLinks.privacyPolicy}
                    target="_blank"
                    title="Política de Privacidade"
                  >
                    {`Política de Privacidade`}
                  </a>
                  {'.'}
                </p>
              </div>

              <IconButton
                icon={'FECHAR'}
                className={styles.closeButton}
                handleClick={() => handleCloseCookie()}
                title="Fechar"
              ></IconButton>
            </div>
          </motion.div>
        )}
        {'.'}
        {store.showDisclaimerInfo && (
          <motion.div
            initial={{
              y: 200,
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
            className={styles.disclaimerContainer}
          >
            <div>
              <div className={styles.textContent}>
                <div>
                  <p>
                    {
                      'Muita gente quer uma Nova Fiat Strada. Por conta disso, infelizmente as versões Endurance e Freedom do carro podem demorar até 120 dias e as versões Volcano e Ranch até 180 dias para chegar na sua garagem, ok? Mas não se preocupe: aproveite para conhecer tudo sobre a nova picape do Brasil.'
                    }
                  </p>
                </div>
              </div>

              <IconButton
                icon={'FECHAR'}
                className={styles.closeButton}
                handleClick={() => handleCloseDisclaimer()}
                title="FecharDisclaimer"
              ></IconButton>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
});

export default CookieHolder;
