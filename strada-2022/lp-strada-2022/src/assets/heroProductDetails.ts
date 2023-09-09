import { includeResponsive } from '@/utils/imagePrefixes';

const PREFIX = `${process.env.BASE_PREFIX}images/`;
const SECTION_PREFIX = 'HeroProductDetails/';

export const acessorios = {
  cambioAutomatico: includeResponsive(
    `${SECTION_PREFIX}ar-condicionado-ranch-home`,
    'jpg',
    { prefix: PREFIX },
  ),
  capacidadeCarga: includeResponsive(
    `${SECTION_PREFIX}wireless-charger-home`,
    'jpg',
    { prefix: PREFIX },
  ),
  confortoTecnologia: includeResponsive(
    `${SECTION_PREFIX}conforto-tecnologia`,
    'jpg',
    { prefix: PREFIX },
  ),
  espacoInterno: includeResponsive(
    `${SECTION_PREFIX}espaco-interno`,
    'jpg',
    { prefix: PREFIX },
  ),
  robustez: includeResponsive(
    `${SECTION_PREFIX}fiat-strada-home-cinza-strato`,
    'jpg',
    { prefix: PREFIX },
  ),
  seguranca: includeResponsive(
    `${SECTION_PREFIX}fiat-flag-home`,
    'jpg',
    { prefix: PREFIX },
  ),
};
