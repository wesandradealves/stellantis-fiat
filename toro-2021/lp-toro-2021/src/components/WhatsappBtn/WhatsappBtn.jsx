import React from 'react';
import Btn from './styles';
import * as images from '../../assets';
import DataLayer from '../Track/DataLayer/DataLayer';

const WhatsappBtn = () => (
  <Btn
    href="https://wa.me/message/5NED64RQ2XDEF1"
    target="_blank"
    rel="noopener noreferrer"
    onClick={() => {
      DataLayer.push('Whataspp_ClicouWhatsapp');
    }}
  >
    <img src={images.whatsappIcon} alt="teste" />
    <span>Quero negociar</span>
  </Btn>
);
export default WhatsappBtn;
