import { FC } from "react";

import { brand } from "@/assets/general";
import styles from "./WhatsappBtn.module.scss";
import DataLayer from "@/utils/DataLayer";

interface WhatsappBtnProps {
  id?: string;
}

const WhatsappBtn: FC<WhatsappBtnProps> = ({ id = "btnWhatsapp" }) => {
  return (
    <a
      href="https://wa.me/message/NCSQVBMSJBAUD1"
      className={styles.whatsapp_float}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => {
        DataLayer.clickEvent({
          element: "quero-negociar",
          elementCategory: "whatsapp",
          pageSection: "conteudo",
          pageSubsection: "float",
        });
      }}
    >
      <img src={brand.whatsBtn} className="whatsapp_flag" alt={id} />
      <span>Quero negociar</span>
    </a>
  );
};

export default WhatsappBtn;
