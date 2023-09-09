import React, {FC, useCallback, useEffect} from 'react';
import {AnimatePresence, motion} from 'framer-motion';
import styles from './Modal.module.scss';
import {observer} from 'mobx-react-lite';
import {CloseModal} from '../SvgComponents';
import Store from '@/project/store/Store';
import {useMobxStores} from '@/project/store';
import Form from '@/project/views/Form';

interface ModalProps {
  id: string;
  visible: boolean;
  onClose: () => void;
}

const Modal: FC<ModalProps> = observer(({id, visible, onClose, children}) => {
  const store: Store = useMobxStores();

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
            <div className={styles.backgroundModal}>
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
                  <button className={styles.close} onClick={onClose} style={{display: store.modalCloseButton ? 'flex' : 'none'}}>
                    <CloseModal title="Fechar"/>
                  </button>
                  <Form/>
                </div>

              </div>
            </div>

        )}
      </AnimatePresence>
  );
});

export default Modal;
