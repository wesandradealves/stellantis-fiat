import { useRouter } from "next/router";
import { Image } from "../";
import { dataLayer } from "../../libs/gtm";
import { getPath } from "../../utils";
import Whatsapp from "../../assets/whatsappIcon.svg";
import styles from "./styles.module.scss";

export default function ButtonWhatsApp() {
  const router = useRouter();

  const handleDataLayer = ({ ...args }) => {
    dataLayer({
      path: getPath(router),
      event: "interaction",
      brand: "fiat",
      segment: "landing-page",
      product: "argo",
      pageSection: "formulario",
      pageSubsection: "lead-cadastro",
      selectedValue: null,
      ...args,
    });
  };

  return (
    <a
      href="https://wa.me/message/SLO3XBN7D3YBD1"
      target="_blank"
      className={styles.whatsapp}
      rel="noreferrer"
      onClick={() => {
        handleDataLayer({
          elementCategory: "whatsapp",
          interactionType: "clique",
          element: "quero-comprar",
          pageSubsection: "float",
          pageSection: "conteudo",
        });
      }}
    >
      <Image src={Whatsapp.src} alt="Whatsapp" />
    </a>
  );
}
