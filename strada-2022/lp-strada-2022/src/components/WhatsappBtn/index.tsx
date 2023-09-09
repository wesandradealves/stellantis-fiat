import styles from './WhatsappBtn.module.scss';
import { brand } from '@/assets';
import { FC } from 'react';
import DataLayer from '@/utils/DataLayer';

interface WhatsappBtnProps {
  id?: string;
}

const WhatsappBtn: FC<WhatsappBtnProps> = ({
  id = 'btnWhatsapp',
}) => {
  return (
    <a
      /* ALTERAR A API PARA A API DA FIAT */
      href="https://wa.me/message/E7NFBR2OBZBWN1"
      className={styles.whatsapp_float}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => {
        DataLayer.clickEvent({
          element: 'converse-com-a-fiat',
          elementCategory: 'whatsapp',
          pageSection: 'conteudo',
          pageSubsection: 'float',
        });
      }}
    >
      <img
        src={brand.whatsBtn}
        className="whatsapp_flag"
        alt={id}
      />
      <span>Quero negociar</span>
    </a>
  );
};

export default WhatsappBtn;
