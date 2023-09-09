import { includeResponsive } from '@/utils/imagePrefixes';

const PREFIX = `${process.env.BASE_PREFIX}images/`;
const SECTION_PREFIX = 'ConsumerType/';

export const consumerType = {
  stradaEmpresas: includeResponsive(
    `${SECTION_PREFIX}strada-branco-dobra-empresa`,
    'jpg',
    { prefix: PREFIX },
  ),
  stradaProdutorRural: includeResponsive(
    `${SECTION_PREFIX}strada-preto-dobra-empresa`,
    'jpg',
    { prefix: PREFIX },
  ),
};
