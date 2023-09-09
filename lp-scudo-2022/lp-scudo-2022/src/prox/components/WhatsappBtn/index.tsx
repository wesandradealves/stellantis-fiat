import styles from './WhatsappBtn.module.scss';
import { brand } from '@/project/assets';
import { FC, MouseEventHandler } from 'react';
import DataLayer from '@/project/data/DataLayer';

interface WhatsappBtnProps {
  id?: string;
  handleClick?: MouseEventHandler<HTMLAnchorElement>;
}

const WhatsappBtn: FC<WhatsappBtnProps> = ({
  id = 'btnWhatsapp',
}) => {
  return (
    <a
      /* ALTERAR A API PARA A API DA FIAT */
      onClick={() => {
        DataLayer.clickEvent({
          element: `converse-com-a-fiat`,
          elementCategory: 'whatsapp',
          pageSection: 'conteudo',
          event: 'interaction',
          pageSubsection: 'float',
          product: 'scudo',
          segment: 'landing-page'
        
        });
      }}
      href="https://wa.me/message/FKKGDWLTCZQVK1"
      className={styles.whatsapp_float}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src={brand.whatsappIcon}
        className="whatsapp_flag"
        alt={id}
      />
      <span>Quero negociar</span>
    </a>
  );
};

export default WhatsappBtn;
