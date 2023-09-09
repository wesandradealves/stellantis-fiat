import React, { FC } from "react";
import { heroImages} from "@/assets/general";
import styles from "./HeroDesktop.module.scss";
import { Display, Cards, SectionElement } from "@/components";
import { dataHero } from "@/data/dataHero";
import { dataMenuLabel } from "@/data/menu";
import scssStyles from "@/utils/scssStyles";

const HeroDesktop: FC = () => {
  const previous = React.useRef<(() => void) | null>(null);
  const next = React.useRef<(() => void) | null>(null);
  return (
    <SectionElement
      id="desktopDisplay"
      className={styles.container}
      navReference={dataMenuLabel().find((c) => c.slug === "")}
      noPadding
      heightBehaviour="soft"
      handleKeyDown={(e, isVisible) => {
        if (isVisible) {
          if (e.key === "ArrowLeft") {
            previous?.current && previous?.current();
          } else if (e.key === "ArrowRight") {
            next?.current && next?.current();
          }
        }
      }}
    >
      <div className={styles.logoContent} />
      <Display
        previousEvent={(e) => {
          previous.current = e;
        }}
        nextEvent={(e) => {
          next.current = e;
        }}
        items={[
          {
            body: (
              <div className={styles.slides}>
                <div
                  className={styles.content}
                  aria-label={
                    "Novo Fiat fastback: A Natureza é o seu parque de diversões."
                  }
                  title={
                    "Novo Fiat fastback: A Natureza é o seu parque de diversões."
                  }
                >
                  <div className={styles.fullBgGradient} />
                </div>
              </div>
            ),
            // videoProps: {
            //   src: heroImages.mainBg.fullPath.desktop
            // }
            background: {
              src: heroImages.mainBg,
              alt: "Novo Fiat fastback: A Natureza é o seu parque de diversões.",
            },
          },
          {
            body: (
              <div
                className={scssStyles([
                  styles.slides,
                  //styles.centered,
                ])}
              >
                <div className={styles.fullBgGradient} />
                <div
                  className={styles.content}
                  aria-label={
                    "Novo Fiat fastback: A Natureza é o seu parque de diversões."
                  }
                  title={
                    "Novo Fiat fastback: A Natureza é o seu parque de diversões."
                  }
                >
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
                {/* <div className={styles.content}>
                  <div className={styles.descriptionContent}>
                    <div className={styles.descriptionLayoutTwo}>
                      <p className={styles.tltBottom}>
                        DNA fiat
                      </p>
                      <p>
                        Um ícone não muda, ele evolui. Além de
                        estar mais robusto, eficaz e versátil, o
                        novo  traz design frontal e
                        traseiro renovado, com faróis e lanternas
                        Full Led em todas as versões.
                      </p>
                    </div>
                  </div>
                </div> */}
              </div>
            ),
            videoProps: {
              src: heroImages.firstBackground.fullPath.desktop
            }
            // background: {
            //   src: heroImages.firstBackground,
            // },
          },
          {
            body: (
              <div
                className={scssStyles([
                  styles.slides,
                  //styles.centered,
                ])}
              >
                <div className={styles.fullBgGradient} />
                <div
                  className={styles.content}
                  aria-label={
                    "Novo Fiat fastback: A Natureza é o seu parque de diversões."
                  }
                  title={
                    "Novo Fiat fastback: A Natureza é o seu parque de diversões."
                  }
                >
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
                {/* <div className={styles.content}>
                  <div className={styles.descriptionContent}>
                    <div className={styles.descriptionLayoutTwo}>
                      <p className={styles.tltBottom}>
                        PERFORMANCE
                      </p>
                      <p>
                        Vá além com toda a performance do T270, o
                        motor mais potente da categoria. São 185
                        cv pra você desbravar todos os terrenos.
                      </p>
                    </div>
                  </div>
                </div> */}
              </div>
            ),
            videoProps: {
              src: heroImages.secondBackground.fullPath.desktop
            }
            // background: {
            //   src: heroImages.secondBackground,
            // },
          },
          {
            body: (
              <div
                className={scssStyles([
                  styles.slides,
                  //styles.centered,
                ])}
              >
                <div className={styles.fullBgGradient} />
                <div
                  className={styles.content}
                  aria-label={
                    "Novo Fiat fastback: A Natureza é o seu parque de diversões."
                  }
                  title={
                    "Novo Fiat fastback: A Natureza é o seu parque de diversões."
                  }
                >
                  <div className={styles.wrapLogo}>
                    <div className={styles.detailsWrap}></div>
                    <h1>ESPAÇO</h1>
                    <p>
                      Simplesmente o maior porta-malas da categoria. São 600L de
                      capacidade que proporcionam infinitas possibilidades.
                    </p>
                  </div>
                </div>
                {/* <div className={styles.content}>
                  <div className={styles.descriptionContent}>
                    <div className={styles.descriptionLayoutTwo}>
                      <p className={styles.tltBottom}>
                        TECNOLOGIAS AUTÔNOMAS
                      </p>
                      <p>
                        A experiência Fiat fastback está mais
                        segura e inteligente. As tecnologias
                        autônomas, como frenagem de emergência e
                        monitoramento de ponto cego, trabalham
                        automaticamente para oferecer uma
                        navegação ainda mais tranquila.
                      </p>
                    </div>
                  </div>
                </div> */}
              </div>
            ),
            background: {
              src: heroImages.thirdBackground,
            },
          },
          {
            body: (
              <div
                className={scssStyles([
                  styles.slides,
                  //styles.centered,
                ])}
              >
                <div className={styles.fullBgGradient} />
                <div
                  className={styles.content}
                  aria-label={
                    "Novo Fiat fastback: A Natureza é o seu parque de diversões."
                  }
                  title={
                    "Novo Fiat fastback: A Natureza é o seu parque de diversões."
                  }
                >
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
                {/* <div className={styles.content}>
                  <div className={styles.descriptionContent}>
                    <div className={styles.descriptionLayoutTwo}>
                      <p className={styles.tltBottom}>
                        NOVA CENTRAL MULTIMÍDIA
                      </p>
                      <p>
                        A nova central multimídia se conecta
                        automaticamente ao seu smartphone através
                        da conexão wireless. Recursos como mapas,
                        músicas e informações importantes sobre
                        seu percurso estão facilmente ao seu
                        alcance.
                      </p>
                    </div>
                  </div>
                </div> */}
              </div>
            ),
            videoProps: {
              src: heroImages.fourthBackground.fullPath.desktop
            }
            // background: {
            //   src: heroImages.fourthBackground,
            // },
          },
        ]}
      />
      <Cards items={dataHero.map((d) => ({ ...d, src: d.cardSrc }))} />
    </SectionElement>
  );
};

export default HeroDesktop;
