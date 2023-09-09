import { SectionElement, Stories } from "@components/index";
import { Stories as StoriesAssets } from "@/assets/components";
import { FC } from "react";
import styles from "./MainStories.module.scss";
import { observer } from "mobx-react-lite";
import { dataHero } from "@/data/dataHero";
import { dataMenuLabel } from "@/data/menu";
import {brand, heroImages} from "@/assets/general";

const MainStories: FC = observer(() => {
  return (
    <SectionElement
      id="mobileStories"
      navReference={dataMenuLabel()[0]}
      className={styles.container}
      noPadding
      heightBehaviour="unset"
    >
      <Stories
        items={[
          {
            showNext: true,
            title: "Fiat fastback",
            body: (
              <div className={styles.slides}>
                <div className={styles.slidesContainer}>
                  <div className={styles.topBox}>
                    <div className={styles.wrapLogo}>
                      <div className={styles.detailsWrap}></div>
                      <img src={brand.svgMainstories} alt="Fastback" />
                    </div>
                  </div>
                </div>
              </div>
            ),
            scrollCtaOrientation: "vertical",
              background: {
                src: StoriesAssets.backgrounds.mainBg,
              },
              durationInS: 15,
          },
          {
            showNext: true,
            title: dataHero[0].title,
            body: (
              <div className={styles.slides}>
                <div className={styles.slidesContainer}>
                  <div className={styles.topBox}>
                    <div className={styles.wrapLogo}>
                      <div className={styles.detailsWrap}></div>
                      <h1>
                        DESIGN SUV
                        <br />
                        COUPÉ
                      </h1>
                      <p>
                      A combinação perfeita de um SUV com grande altura em relação ao solo com um Coupé de linhas dinâmicas e teto com caída veloz.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ),
            scrollCtaOrientation: "vertical",
            videoProps: {
              src: heroImages.firstBackground.fullPath.mobile,
            },
            durationInS: 15,
          },
          {
            showNext: true,
            title: dataHero[1].title,
            body: (
              <>
                <div className={styles.slides}>
                  <div className={styles.slidesContainer}>
                    <div className={styles.topBox}>
                      <div className={styles.wrapLogo}>
                        <div className={styles.detailsWrap}></div>
                        <h1>
                          PERFORMANCE
                          <br />
                        </h1>
                        <p>
                          Equipado apenas com motores turbo:
                          <br />
                          potência aliada a eficiência energética.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ),
            scrollCtaOrientation: "vertical",
            videoProps: {
              src: heroImages.secondBackground.fullPath.mobile,
            },
            durationInS: 15,
          },
          {
            showNext: true,
            title: dataHero[2].title,
            body: (
              <>
                <div className={styles.slides}>
                  <div className={styles.slidesContainer}>
                    <div className={styles.topBox}>
                      <div className={styles.wrapLogo}>
                        <div className={styles.detailsWrap}></div>
                        <h1>ESPAÇO</h1>
                        <p>
                          Simplesmente o maior porta-malas da categoria. São
                          600L de capacidade que proporcionam infinitas
                          possibilidades.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ),
            scrollCtaOrientation: "vertical",
            background: {
              src: StoriesAssets.backgrounds.secondStorie,
            },
            durationInS: 15,
          },
          {
            showNext: true,
            title: dataHero[3].title,
            body: (
              <>
                <div className={styles.slides}>
                  <div className={styles.slidesContainer}>
                    <div className={styles.topBox}>
                      <div className={styles.wrapLogo}>
                        <div className={styles.detailsWrap}></div>
                        <h1>
                          POWERED
                          <br />
                          BY ABARTH
                        </h1>
                        <p>
                          A exclusividade de um motor da divisão <br />
                          Abarth: uma incrível potência de até <br />
                          185CV com a super força de torque de <br />
                          até 270NM.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ),
            scrollCtaOrientation: "vertical",
            videoProps: {
              src: heroImages.fourthBackground.fullPath.mobile,
            },
            durationInS: 15,
          },
        ]}
      />
    </SectionElement>
  );
});

export default MainStories;
