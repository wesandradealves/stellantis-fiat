import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";

import { dataLayer } from "../../libs/gtm";
import { getPath } from "../../utils";

import logoFiat from "../../assets/logo-fiat-white.png";
import icoFacebook from "../../assets/ico-facebook.svg";
import icoYoutube from "../../assets/ico-youtube.svg";
import icoTwitter from "../../assets/ico-twitter.svg";
import icoInstagram from "../../assets/ico-instagram.svg";

import styles from "./styles.module.scss";

const Footer: React.FC = () => {
  const router = useRouter();

  const handleDataLayer = ({ ...args }) => {
    dataLayer({
      path: getPath(router),
      event: "interaction",
      brand: "fiat",
      segment: "landing-page",
      product: "cronos",
      elementCategory: "icone",
      interactionType: "clique",
      pageSection: "footer",
      pageSubsection: "social",
      selectedValue: null,
      ...args,
    });
  };

  return (
    <div className={styles.container}>
      <ul className={styles.listShared}>
        <li
          onClick={() => {
            handleDataLayer({
              element: "facebook",
            });
          }}
        >
          <a
            href="https://www.facebook.com/fiatbr"
            target="_blank"
            rel="noreferrer"
          >
            <Image src={icoFacebook} alt="Facebook" />
          </a>
        </li>
        <li
          onClick={() => {
            handleDataLayer({
              element: "youtube",
            });
          }}
        >
          <a
            href="https://www.youtube.com/user/fiat"
            target="_blank"
            rel="noreferrer"
          >
            <Image src={icoYoutube} alt="Youtube" />
          </a>
        </li>
        <li
          onClick={() => {
            handleDataLayer({
              element: "twitter",
            });
          }}
        >
          <a href="https://twitter.com/fiatbr" target="_blank" rel="noreferrer">
            <Image src={icoTwitter} alt="Twitter" />
          </a>
        </li>
        <li
          onClick={() => {
            handleDataLayer({
              element: "instagram",
            });
          }}
        >
          <a
            href="https://www.instagram.com/fiatbr/"
            target="_blank"
            rel="noreferrer"
          >
            <Image src={icoInstagram} alt="Instagram" />
          </a>
        </li>
      </ul>
      <p className="desktop desktop-mobile">
        A disponibilidade de itens de série, opcionais e acessórios pode variar
        de acordo com a versão escolhida. <br />
        Verifique o Monte seu Carro. Imagens meramente ilustrativas.
      </p>
      <div className={styles.logo}>
        <Image src={logoFiat} alt="Fiat" />
      </div>
    </div>
  );
};

export default Footer;
