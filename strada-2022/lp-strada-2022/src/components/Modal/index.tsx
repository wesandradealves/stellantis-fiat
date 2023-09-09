import React, { FC, useCallback, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import styles from './Modal.module.scss';
import { observer } from 'mobx-react-lite';
import { CloseModal } from '../SvgComponents';
import StradaStore from '@/store/StradaStore';
import { useMobxStores } from '@/store';

interface ModalProps {
  id: string;
  visible: boolean;
  onClose: () => void;
}

const Modal: FC<ModalProps> = observer(({ id, visible, onClose, children }) => {
  const store: StradaStore = useMobxStores();

  const clickOutside = useCallback((event) => {
    if (event.keyCode === 27) {
      onClose();
    }
  }, [onClose]);

  useEffect(() => {
    document.addEventListener('keydown', clickOutside);

    return () => {
      document.removeEventListener('keydown', clickOutside);
    };
  }, [clickOutside]);

  return (
    <AnimatePresence>
      {visible && (
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
            duration: 0.1,
          }}
        >
          <div
            id={id}
            onClick={(e) => {
              if ((e.target as HTMLDivElement)?.id === id && !store.fixModalHero) {
                onClose();
              }
            }}
            className={styles.modal}
          >
            <div className={styles.container}>
              <button className={styles.close} onClick={onClose}>
                <CloseModal title="Fechar" />
              </button>
              <div className={styles.content}>{children}</div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
});

export default Modal;
