import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useInView } from "react-intersection-observer";
// import Image from "next/image";

import { Button, Image } from "../../components";
import { Modal } from "../";

import { dataLayer } from "../../libs/gtm";
import { replaceUrl, getPath, getQueryParams } from "../../utils";
import { BuyYoursProps } from "../../interfaces";

import imageBuy from "../../assets/img-buy.png";

import styles from "./styles.module.scss";

const BuyYours = ({ showModalForm, setShowModalForm }: BuyYoursProps) => {
  const [lastRouter, setLastRouter] = useState("");
  const [queryParams, setQueryParams] = useState<string>(getQueryParams());

  const router = useRouter();

  const { ref, inView, entry } = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      replaceUrl(String(entry?.target.getAttribute("data-history")), queryParams, router);
    }
  }, [inView]);

  useEffect(() => {
    if (showModalForm) {
      setLastRouter(router.asPath);
      replaceUrl("/agende", queryParams, router);
      document.body.style.overflow = "hidden";
    } else {
      replaceUrl(lastRouter, queryParams, router);
      document.body.style.overflow = "auto";
    }
  }, [showModalForm]);

  const handleToogleModal = () => {
    setShowModalForm(!showModalForm);
  };

  const handleDataLayer = ({ ...args }) => {
    dataLayer({
      path: getPath(router),
      event: "interaction",
      brand: "fiat",
      segment: "landing-page",
      product: "cronos",
      elementCategory: "cta",
      interactionType: "clique",
      pageSection: "conteudo",
      pageSubsection: "cambio-automatico",
      selectedValue: null,
      element: "cambio-automatico",
      ...args,
    });
  };

  return (
    <>
      <div id="cambioAutomatico" className="root">
        <div ref={ref} data-history="/cambio-automatico" className={styles.container}>
          <div className={`${styles.wrapper} wrapper-general paddingLeft`}>
            <div className={`${styles.description}`}>
              <div className={styles.containerTitle}>
                <h2 className={styles.title}>
                  CÂMBIO AUTOMÁTICO CVT DE 7 VELOCIDADES
                </h2>
              </div>
              <div className={`${styles.image} mobile`}>
                <div className="mobile">
                  <Image src={imageBuy.src} alt="Fiat Cronos" />
                </div>
              </div>
              <p>O novo câmbio automático CVT de 7 velocidades oferece o máximo de prazer durante a condução. A mudança de velocidade ocorre sem a indesejável sensação de troca de marchas. Além disso, você conta com uma maior eficiência, garantindo um baixo consumo de combustível.</p>
              {/* <div className={styles.link}>
                <Button
                  onClick={() => {
                    handleDataLayer({});
                    handleToogleModal();
                  }}
                >
                  Reserva o seu
                </Button>
              </div> */}
            </div>
            <div className={`${styles.image} marginLeft`}>
              <div className="desktop desktop-mobile">
                <Image src={imageBuy.src} alt="Fiat Cronos" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {showModalForm && <Modal setShowModal={setShowModalForm} />}
    </>
  );
};

export default BuyYours;
