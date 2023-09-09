import React, { FC } from 'react';
import { heroImages, heroContent } from '@/assets';
import styles from './HeroDesktop.module.scss';
import { Display, Cards, TitleBox3d, SectionElement } from '@/components';
import { dataHero } from '@/mocks/dataHero';
import { metaTags } from '@/constants';
import { dataMenuLabels } from '@/mocks/menu';
import scssStyles from '@/utils/scssStyles';

const HeroDesktop: FC = () => {
  return (
    <SectionElement
      id="desktopDisplay"
      className={styles.container}
      navReference={dataMenuLabels()[0]}
      noPadding
      heightBehaviour="soft"
    >
      {!!metaTags.title && (
        <h1 className={styles.pageHeading}>
          {metaTags.title}
        </h1>
      )}
      <Display
        items={[
          {
            body: (<div className={scssStyles([styles.slides, styles.centered])}>
              <img className={styles.content} src={heroContent.firstContent} alt={metaTags.title} />
            </div>),
            background: {
              color: '#222652',
              src: heroImages.mainBg,
            },
          },
          {
            body: (
              <div className={styles.slides}>
                <div className={styles.content}>
                  <TitleBox3d text={dataHero[0].title} />
                  <h3 className={styles.descriptionContent}>
                    {dataHero[0].description}
                  </h3>
                </div>
              </div>
            ),
            background: {
              color: "#222652",
            },
            videoProps: {
              src: dataHero[0].src.fullPath.desktop,
            }
          },
          {
            body: (
              <div
                className={styles.slides}
              >
                <div className={styles.content}>
                  <TitleBox3d text={dataHero[1].title} />
                  <TitleBox3d text={dataHero[1].title2} />

                  <h3 className={styles.descriptionContent}>
                    {dataHero[1].description}
                  </h3>
                </div>
              </div>
            ),
            background: {
              color: "#222652",
            },
            videoProps: {
              src: dataHero[1].src.fullPath.desktop,
            }
          },
          {
            body: (
              <div
                className={styles.slides}
              >
                <div className={styles.content}>
                  <TitleBox3d text={dataHero[2].title} />

                  <h3 className={styles.descriptionContent}>
                    {dataHero[2].description}
                  </h3>
                </div>
              </div>
            ),
            background: {
              color: "#222652",
            },
            videoProps: {
              src: dataHero[2].src.fullPath.desktop,
            }
          },
          {
            body: (
              <div
                className={styles.slides}
              >
                <div className={styles.content}>
                  <TitleBox3d text={dataHero[3].title} />

                  <h3 className={styles.descriptionContent}>
                    {dataHero[3].description}
                  </h3>
                </div>
              </div>
            ),
            background: {
              color: "#222652",
            },
            videoProps: {
              src: dataHero[3].src.fullPath.desktop,
            }
          },
          {
            body: (
              <div
                className={styles.slides}
              >
                <div className={styles.content}>
                  <TitleBox3d text={dataHero[4].title} />

                  <h3 className={styles.descriptionContent}>
                    {dataHero[4].description}
                  </h3>
                </div>
              </div>
            ),
            background: {
              color: "#222652",
            },
            videoProps: {
              src: dataHero[4].src.fullPath.desktop,
            }
          },
        ]}
      >
      </Display>
      <Cards items={dataHero.map((d) => ({ ...d, src: d.cardSrc }))} />
    </SectionElement>
  );
};

export default HeroDesktop;
