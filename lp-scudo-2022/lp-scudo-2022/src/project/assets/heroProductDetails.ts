import { includeResponsive } from "@/prox/utils/imagePrefixes";

const PREFIX = `${process.env.BASE_PREFIX}images/`;
const SECTION_PREFIX = 'HeroProductDetails/';

export const acessorios = {
  cambioAutomatico: includeResponsive(`${SECTION_PREFIX}cambio-automatico-cvt`, 'jpg', { prefix: PREFIX }),
  capacidadeCarga: includeResponsive(`${SECTION_PREFIX}capacidade-carga`, 'jpg', { prefix: PREFIX }),
  confortoTecnologia: includeResponsive(`${SECTION_PREFIX}conforto-tecnologia`, 'jpg', { prefix: PREFIX }),
  espacoInterno: includeResponsive(`${SECTION_PREFIX}espaco-interno`, 'jpg', { prefix: PREFIX }),
  robustez: includeResponsive(`${SECTION_PREFIX}robustez`, 'jpg', { prefix: PREFIX }),
  seguranca: includeResponsive(`${SECTION_PREFIX}seguranca`, 'jpg', { prefix: PREFIX }),
};