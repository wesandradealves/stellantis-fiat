import { bannerImages } from '@/assets';
import { Conditional } from '@/components';
import CTAButton from '@/components/CTAButton';
import ResponsiveLazyImage from '@/components/ResponsiveLazyImage';
import SectionElement from '@/components/SectionElement';
import { dataMenuLabels } from '@/mocks/menu';
import DataLayer from '@/utils/DataLayer';
import { FC } from 'react';
import styles from './Banner.module.scss';

const reference = dataMenuLabels().find(
  (c) => c.slug === 'banner',
);

// const pageSubsection = 'banner';

const BannerToAbarth: FC = () => {
  return (
    <SectionElement
      id="Banner"
      className={styles.container}
      noPadding
      heightBehaviour="unset"
      navReference={reference}
    >
      {/* _________________Layer 1 */}
      <div className={styles.topLayer}>
        <ResponsiveLazyImage
          className={styles.bannerImg}
          alt="Pulse Abarth"
          src={bannerImages.pulse}
          src2={bannerImages.pulse2x}
          src3={bannerImages.pulse3x}
        />
      </div>

      {/* _________________Layer 2 */}

      <div className={styles.bottomLayer}>
        <div className={styles.title}>
          <ResponsiveLazyImage
            alt="Abarth"
            className={styles.brandImg}
            src={bannerImages.brand}
            src2={bannerImages.brand2x}
            src3={bannerImages.brand3x}
          />
        </div>

        <div className={styles.slogan}>
          <h2>
            CONHEÇA A MARCA <strong>ENVENENADA</strong>
            <Conditional notOn="mobile">
              <br />
            </Conditional>{' '}
            DE PERFORMANCE E TECNOLOGIA.
          </h2>
        </div>

        <div
          // onClick={() =>
          //   DataLayer.clickEvent({
          //     element: 'saiba-mais',
          //     elementCategory: 'link',
          //     pageSection: 'conteudo',
          //     pageSubsection: 'abarth',
          //   })
          // }
          className={styles.cta}
        >
          <CTAButton
            href={'https://abarth.fiat.com.br'}
            larger
            className={styles.button}
            text={'Saiba mais'}
            title={'Saiba mais'}
            handleClick={() => {
              DataLayer.clickEvent({
                element: 'saiba-mais',
                elementCategory: 'link',
                pageSection: 'conteudo',
                pageSubsection: 'abarth',
              });
            }}
          />
        </div>
      </div>

      <img
        alt="logo abarth"
        className={styles.logoScorpion}
        src={bannerImages.whiteScorpion}
      />
    </SectionElement>
  );
};

export default BannerToAbarth;
