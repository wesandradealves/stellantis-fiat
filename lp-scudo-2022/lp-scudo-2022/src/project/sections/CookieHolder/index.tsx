import {IconButton} from '@/prox/components';
import {brandLinks, STORAGE_PREFIX} from '@/project/constants';
import {FC, useEffect} from 'react';
import styles from './CookieHolder.module.scss';
import {motion, AnimatePresence} from 'framer-motion';
import {observer} from 'mobx-react-lite';
import {useMobxStores} from '@/project/store';
import Store from '@/project/store/Store';

const CookieHolder: FC = observer(() => {
  const store: Store = useMobxStores();

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
                        'Utilizamos cookies para garantir a melhor experiência em nosso site. Os cookies nos permitem fornecer funcionalidades como segurança, gerenciamento de rede e acessibilidade. Eles melhoram a usabilidade e o desempenho por meio de vários recursos, como reconhecimento de idioma, resultados de pesquisa e, assim, melhoram o que oferecemos a você. Nosso site também pode usar cookies de terceiros para enviar publicidade mais relevante para você. Se quiser saber mais sobre os cookies que usamos e como gerenciá-los, acesse nossa '
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
    
              </motion.div>
          )}
        </AnimatePresence>
      </div>
  );
});

export default CookieHolder;
