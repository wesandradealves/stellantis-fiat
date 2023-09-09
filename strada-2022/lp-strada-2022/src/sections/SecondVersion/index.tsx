import { secondVersion } from '@/assets';
import {
  CTAButton,
  ResponsiveLazyImage,
  SectionElement,
} from '@/components';
import Flag from '@/components/SvgComponents/Flag';
import { dataMenuLabel, links } from '@/mocks/menu';
import DataLayer from '@/utils/DataLayer';
import { FC } from 'react';
import styles from './index.module.scss';

const SecondVersion: FC = () => {
  return (
    <SectionElement
      id="SecondVersion"
      className={styles.container}
      navReference={dataMenuLabel().find(
        (c) => c.slug === 'compre-a-sua',
      )}
    >
      <img
        className={styles.tagline}
        src={secondVersion.tagline.fullPath}
        alt="A lenda se superou mais uma vez"
      />
      <div className={styles.content}>
        <div className={styles.imageHolder}>
          <ResponsiveLazyImage
            title="Traseira do Fiat Strada"
            alt="Traseira do Fiat Strada em um local rural"
            src={secondVersion.image.fullPath}
            src2={secondVersion.image.fullPath2x}
            src3={secondVersion.image.fullPath3x}
            containerClassName={styles.imageContainer}
          />
          {/* <Flag className={styles.flag} /> */}
        </div>
        <div className={styles.ctaHolder}>
          <CTAButton
            handleClick={() => {
              DataLayer.clickEvent({
                element: 'compre-a-sua',
                elementCategory: 'cta',
                pageSection: 'conteudo',
                pageSubsection: 'reserve-a-sua',
              });
            }}
            href={links.compre}
            text="Compre a sua"
            title="Compre a sua"
          />
          <CTAButton
            handleClick={() => {
              DataLayer.clickEvent({
                element: 'simular-parcelas',
                elementCategory: 'cta',
                pageSection: 'conteudo',
                pageSubsection: 'reserve-a-sua',
              });
            }}
            href={links.simular}
            text="Simular Parcelas"
            title="Simular Parcelas"
          />
        </div>
      </div>
    </SectionElement>
  );
};

export default SecondVersion;
