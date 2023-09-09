import styles from './WhatsappBtn.module.scss';
import { brand } from '@/assets';
import DataLayer from '@/utils/DataLayer';

import { FC } from 'react';

interface WhatsappBtnProps {
  id?: string;
}

const WhatsappBtn: FC<WhatsappBtnProps> = ({
  id = 'btnWhatsapp',
}) => {
  return (
    <a
      href="https://wa.me/message/NUVN2VWHQWIBG1"
      className={styles.whatsapp_float}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => {
        DataLayer.clickEvent({
          element: 'converse-com-a-fiat',
          elementCategory: 'whatsapp',
          pageSection: 'conteudo',
          pageSubsection: 'float',
          path: 'homee',
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
