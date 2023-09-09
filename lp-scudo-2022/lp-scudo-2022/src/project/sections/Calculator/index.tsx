import styles from './index.module.scss';
import { reserveCTA as ReserveAsset } from '../../assets';
import {
  ResponsiveLazyImage,
  SectionElement,
} from '@/prox/components';
import { FC } from 'react';
import { dataMenuLabel } from '@/project/data/menu';

import CalculatorDesktop from '@/prox/components/Calculator/Desktop/';

const reference = dataMenuLabel().find(
  (c) => c.slug === 'calculadora',
);

interface CalculatorProps {
  id: 'idCalculator';
}

const pageSubsection = 'calculadora';

const Calculator: FC = () => {
  return (
    <SectionElement
      id="Calculadora"
      className={styles.container}
      navReference={reference}
      noPadding
      heightBehaviour="soft"
    >
      <ResponsiveLazyImage
        fullBg
        alt=""
        src={ReserveAsset.backgroundImage.fullPath2x}
        src2={ReserveAsset.backgroundImage.fullPath3x}
      />
      <CalculatorDesktop />
    </SectionElement>
  );
};

export default Calculator;
