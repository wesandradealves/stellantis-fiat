import { FC } from 'react';
import styles from './ModalOfForm.module.scss';
import { AnimatePresence, motion } from 'framer-motion';
import { Close } from '../SvgComponents';
import scssStyles from '@/utils/scssStyles';

interface ModalProps {
  show: boolean;
  message: string;
  handleClose: () => void;
  className?: string;
  hideCloseButton?: boolean;
}

const ModalOfForm: FC<ModalProps> = ({
  className = '',
  handleClose,
  message,
  hideCloseButton = false,
  show,
}) => {
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
              className={`${styles.container} ${className}`}
            >
              {!hideCloseButton && (
                <button className={scssStyles(['primary', styles.closeButton])} onClick={() => handleClose()}>
                  <Close />
                </button>
              )}
              <h2>
                {message}
              </h2>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export default ModalOfForm;
