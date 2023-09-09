import { FC } from 'react';
import styles from './LoadingFlag.module.scss';
import { motion, TargetAndTransition, Transition } from 'framer-motion';

interface LoadingFlagProps {
  title?: string;
}

const LoadingFlag: FC<LoadingFlagProps> = ({ title = 'Carregando' }) => {
  const transition: Transition = ({
    type: 'tween',
    duration: 1.4,
    repeat: Infinity,
    repeatType: 'reverse',
  });
  const animate: TargetAndTransition = {
    y: 48,
    height: 0,
  }
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="80"
      height="54"
      viewBox="0 0 56 52"
      className={styles.svg}
      aria-labelledby={`loading-flag--${title}`}
    >
      <title id={`loading-flag--${title}`}>{title}</title>
      <g
        className={styles.column}
        id="rect-1"
        data-name="rect-1"
        fill="none"
        stroke="#209051"
        strokeWidth="2"
      >
        <rect width="7" height="50" stroke="none" />
        <rect x="1" y="1" width="5" height="48" fill="none" />
        <motion.rect
          transition={transition}
          animate={animate}
          x="1"
          y="1"
          className={styles.overlay}
          width="5"
          height="48"
          fill="#209051"
        />
      </g>
      <g
        className={styles.column}
        id="rect-2"
        data-name="rect-2"
        fill="none"
        stroke="#edede3"
        strokeWidth="2"
      >
        <rect width="7" height="50" stroke="none" />
        <rect x="1" y="1" width="5" height="48" fill="none" />
        <motion.rect
          transition={{ ...transition, delay: 0.4 }}
          animate={animate}
          x="1"
          y="1"
          className={styles.overlay}
          width="5"
          height="48"
          fill="#edede3"
        />
      </g>
      <g
        className={styles.column}
        id="rect-3"
        data-name="rect-3"
        fill="none"
        stroke="#edede3"
        strokeWidth="2"
      >
        <rect width="7" height="50" stroke="none" />
        <rect x="1" y="1" width="5" height="48" fill="none" />
        <motion.rect
          transition={{ ...transition, delay: 0.8 }}
          animate={animate}
          x="1"
          y="1"
          className={styles.overlay}
          width="5"
          height="48"
          fill="#edede3"
        />
      </g>
      <g
        className={styles.column}
        id="rect-4"
        data-name="rect-4"
        fill="none"
        stroke="#fd132f"
        strokeWidth="2"
      >
        <rect width="7" height="50" stroke="none" />
        <rect x="1" y="1" width="5" height="48" fill="none" />
        <motion.rect
          transition={{ ...transition, delay: 1.2 }}
          animate={animate}
          x="1"
          y="1"
          className={styles.overlay}
          width="5"
          height="48"
          fill="#fd132f"
        />
      </g>
    </svg>
  );
}

export default LoadingFlag;
