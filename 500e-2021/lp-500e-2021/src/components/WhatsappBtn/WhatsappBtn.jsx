import React from 'react';
import Btn from './styles';
import * as images from '../../assets';

const WhatsappBtn = () => (
  <Btn
    href="https://wa.me/message/UEPNFWGBDF2KI1"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img src={images.whatsapp} alt="teste" />
    <span>Quero negociar</span>
  </Btn>
);
export default WhatsappBtn;
