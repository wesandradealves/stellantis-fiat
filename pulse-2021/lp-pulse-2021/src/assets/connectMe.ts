import { includeResponsive } from "@/utils/imagePrefixes";

const PREFIX = `${process.env.BASE_PREFIX}images/`;
const SECTION_PREFIX = 'ConnectMe/';

export const connectMe = {
  d01: includeResponsive(`${SECTION_PREFIX}assistente-virtual`, 'jpg', { prefix: PREFIX }),
  d02: includeResponsive(`${SECTION_PREFIX}operacoes-remotas`, 'jpg', { prefix: PREFIX }),
  d03: includeResponsive(`${SECTION_PREFIX}alertas-conducao`, 'jpg', { prefix: PREFIX }),
  d04: includeResponsive(`${SECTION_PREFIX}chamadas-emergencia`, 'jpg', { prefix: PREFIX }),
  d05: includeResponsive(`${SECTION_PREFIX}alerta-furto`, 'jpg', { prefix: PREFIX }),
  d06: includeResponsive(`${SECTION_PREFIX}wifi-hotspot`, 'jpg', { prefix: PREFIX }),
};

export const connectMeBackgrounds = {
  d01: includeResponsive(`${SECTION_PREFIX}assistente-virtual`, 'jpg', { prefix: PREFIX }),
  d02: includeResponsive(`${SECTION_PREFIX}operacoes-remotas`, 'jpg', { prefix: PREFIX }),
  d03: includeResponsive(`${SECTION_PREFIX}alertas-conducao`, 'jpg', { prefix: PREFIX }),
  d04: includeResponsive(`${SECTION_PREFIX}chamadas-emergencia`, 'jpg', { prefix: PREFIX }),
  d05: includeResponsive(`${SECTION_PREFIX}alerta-furto`, 'jpg', { prefix: PREFIX }),
  d06: includeResponsive(`${SECTION_PREFIX}wifi-hotspot`, 'jpg', { prefix: PREFIX }),
};