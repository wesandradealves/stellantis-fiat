import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useInView } from "react-intersection-observer";
import { Button, Image } from "../../components";
import { dataLayer } from "../../libs/gtm";
import { getPath, getQueryParams, replaceUrl } from "../../utils";
import { BuyYoursProps } from "../../interfaces";
import imageBuy from "../../assets/img-buy.png";
import imageBuyMobile from "../../assets/img-buy-mobile.png";
import styles from "./styles.module.scss";

const BuyYours = ({ showModalForm, setShowModalForm }: BuyYoursProps) => {
  const [lastRouter, setLastRouter] = useState("");
  const [queryParams, setQueryParams] = useState<string>(getQueryParams());

  const router = useRouter();

  const { ref, inView, entry } = useInView({
    threshold: 0.6,
  });

  useEffect(() => {
    if (inView) {
      replaceUrl(
        String(entry?.target.getAttribute("data-history")),
        queryParams,
        router
      );
    }
  }, [inView]);

  // useEffect(() => {
  //   if (showModalForm) {
  //     // setLastRouter(router.asPath);
  //     // replaceUrl("/agende", queryParams, router);
  //     // document.body.style.overflow = "hidden";
  //   } else {
  //     replaceUrl(lastRouter, queryParams, router);
  //     document.body.style.overflow = "auto";
  //   }
  // }, [showModalForm]);

  const handleToogleModal = () => {
    setShowModalForm(!showModalForm);
  };

  const handleDataLayer = ({ ...args }) => {
    dataLayer({
      path: getPath(router),
      event: "interaction",
      brand: "fiat",
      segment: "landing-page",
      product: "argo",
      elementCategory: "cta",
      interactionType: "clique",
      pageSection: "conteudo",
      pageSubsection: "compre-o-seu",
      selectedValue: null,
      element: "compre-o-seu",
      ...args,
    });
  };

  return (
    <>
      <div id="compre" className="root">
        {/* <div ref={ref} className={styles.container}> */}
        <div ref={ref} data-history="/compre-seu" className={styles.container}>
          <div className={`${styles.wrapper} wrapper-general paddingLeft`}>
            <div className={styles.description}>
              <div className={styles.containerTitle}>
                <h2 className={styles.title}>
                  <span>MOTOR 1.3</span>
                  <br />
                  FIREFLY
                </h2>
                <h2 className={styles.shadow}>
                  <span>MOTOR 1.3</span>
                  <br />
                  FIREFLY
                </h2>
              </div>

              <h3>
                Eficiência e desempenho. <br />
                Isso é FIAT ARGO.
              </h3>
              <p>
                Experimente uma condução prazerosa de verdade com o <strong>Motor 1.3 Firefly</strong> com 107 cv de potência. Com consumo de até 14,3 km/l, ele é o sonho de todo motorista que busca desempenho aliado ao melhor consumo de combustível.
              </p>
              <div className={styles.link}>
                <Button
                  to="https://www.fiat.com.br/compre/fiat-argo.html"
                  target="_blank"
                  onClick={() => {
                    handleDataLayer({});
                  }}
                >
                  Compre o seu
                </Button>
              </div>
            </div>
            <div className={styles.image}>
              <div className="desktop desktop-mobile">
                <Image src={imageBuy.src} alt="Fiat Argo" />
              </div>
              <div className="mobile">
                <Image src={imageBuyMobile.src} alt="Fiat Argo" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* {showModalForm && <Modal setShowModal={setShowModalForm} />} */}
    </>
  );
};

export default BuyYours;
