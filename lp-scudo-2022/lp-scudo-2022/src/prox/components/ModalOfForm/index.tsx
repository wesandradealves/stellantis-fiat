import React, {FC, useEffect} from 'react';
import styles from './ModalOfForm.module.scss';
import {AnimatePresence, motion} from 'framer-motion';
import {Close} from '../SvgComponents';
import scssStyles from '@/prox/utils/scssStyles';
import DataLayer from "@utils/DataLayer";
import {formImages, ui} from "@assets/index";
import ResponsiveLazyImage from "@components/ResponsiveLazyImage";
import Store from '@/project/store/Store';
import {useMobxStores} from "@store/index";


interface ModalProps {
  show: boolean;
  message: string;
  success?: boolean;
  handleClose: () => void;
  className?: string;
  hideCloseButton?: boolean;
  pageSection: string;
  pageSubsection: string;
}

const ModalOfForm: FC<ModalProps> = ({
                                       className = '',
                                       handleClose,
                                       message,
                                       success = false,
                                       pageSection,
                                       pageSubsection,
                                       hideCloseButton = false,
                                       show,
                                     }) => {
  const store: Store = useMobxStores();

  useEffect(() => {
    if (show) {
      DataLayer.toggleEvent({
        element: message,
        elementCategory: success ? 'submit-success' : 'submit-failure',
        pageSection,
        pageSubsection,
      }, true);
    }
  }, [show, success, message, pageSection, pageSubsection]);

  return (
      <AnimatePresence>
        {show && (
            <>
              <motion.div
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: 1,
                  }}
                  exit={{
                    opacity: 0,
                  }}
                  transition={{
                    duration: 0.2,
                  }}
                  className={styles.backdrop}
                  onClick={(e) => {
                    if (
                        (e.target as HTMLDivElement)?.className?.includes
                        && (e.target as HTMLDivElement)?.className?.includes('backdrop')
                    ) handleClose();
                  }}
              >

                <motion.div
                    initial={{
                      y: '100%',
                      opacity: 0,
                    }}
                    animate={{
                      y: '0%',
                      opacity: 1,
                    }}
                    exit={{
                      y: '100%',
                      opacity: 0,
                    }}
                    transition={{
                      duration: 0.2,
                    }}
                    style={{backgroundColor: success ? '#056E33' : '#FF0000'}}
                    className={`${styles.container} ${className}`}
                >
                  <ResponsiveLazyImage
                      fullBg
                      alt={""}
                      src={formImages.mainBg.fullPath2x}
                      src2={formImages.mainBg.fullPath3x}
                  />
                  <div className={styles.modalBringToFront}>
                    <div className={styles.modalIcon}>
                      {success ? (
                          <img
                              src={ui.iconSmile}
                              alt="Sucesso"
                              className={styles.loading}
                          />

                      ) : (
                          <img
                              src={ui.iconError}
                              alt="Erro"
                              className={styles.loading}
                          />
                      )}
                    </div>
                    {!hideCloseButton && (
                        <button className={scssStyles(['primary', styles.closeButton])}
                                style={{color: success ? '#212652' : '#FF1430'}}
                                onClick={() => {
                                  store.setModalCloseButton(true);
                                  handleClose();
                                  if (success) {
                                    store.setModalHero(false);

                                  }
                                }}
                        >
                          <Close/>
                        </button>
                    )}
                    <h2 style={{color: success ? '#212652' : '#FF1430'}}>
                      {message}
                    </h2>
                  </div>
                </motion.div>
              </motion.div>
            </>
        )}
      </AnimatePresence>
  );
}

export default ModalOfForm;
