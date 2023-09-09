import { includeResponsive } from '@/prox/utils/imagePrefixes';

const PREFIX = `${process.env.BASE_PREFIX}images/`;
const SECTION_PREFIX = 'ProductDetails/';

// DESIGN
const DESIGN_PREFIX = `${SECTION_PREFIX}design/`;
export const design = {
  exterior: includeResponsive(
    `${DESIGN_PREFIX}design-fiat-scudo-exterior`,
    'jpg',
    { prefix: PREFIX },
  ),
  dimensoes: includeResponsive(
    `${DESIGN_PREFIX}design-fiat-scudo-dimensoes`,
    'jpg',
    { prefix: PREFIX },
  ),
  posicao: includeResponsive(
    `${DESIGN_PREFIX}design-fiat-scudo-posicao-conducao-ajustavel`,
    'jpg',
    { prefix: PREFIX },
  ),
  altura: includeResponsive(
    `${DESIGN_PREFIX}design-fiat-scudo-altura`,
    'jpg',
    { prefix: PREFIX },
  ),

};

// PERFORMANCE
const PERFORMANCE_PREFIX = `${SECTION_PREFIX}performance/`;
export const performance = {
  motorizacao: includeResponsive(
    `${PERFORMANCE_PREFIX}performance-fiat-scudo-motorizacao`,
    'jpg',
    { prefix: PREFIX },
  ),
  carregamento: includeResponsive(
    `${PERFORMANCE_PREFIX}performance-fiat-scudo-rapido-carregamento`,
    'jpg',
    { prefix: PREFIX },
  ),
};

// TECNOLOGIA
const TECNOLOGIA_PREFIX = `${SECTION_PREFIX}tecnologia/`;
export const technology = {
  radio: includeResponsive(
    `${TECNOLOGIA_PREFIX}tecnologia-fiat-scudo-radio`,
    'jpg',
    { prefix: PREFIX },
    ),
   computador: includeResponsive(
    `${TECNOLOGIA_PREFIX}tecnologia-fiat-scudo-computador-bordo`,
    'jpg',
    { prefix: PREFIX },
    ),
   verde: includeResponsive(
    `${TECNOLOGIA_PREFIX}tela-verde-desk`,
    'jpg',
    { prefix: PREFIX },
    ),
   startAndStop: includeResponsive(
    `${TECNOLOGIA_PREFIX}tecnologia-fiat-scudo-start-stop`,
    'png',
    { prefix: PREFIX },
    ),
};

// SEGURANÇA
const SEGURANCA_PREFIX = `${SECTION_PREFIX}seguranca/`;
export const security = {
  protecao: includeResponsive(
    `${SEGURANCA_PREFIX}seguranca-fiat-scudo-itens-protecao`,
    'jpg',
    { prefix: PREFIX },
    ),
  holder: includeResponsive(
    `${SEGURANCA_PREFIX}seguranca-fiat-scudo-hill-holder`,
    'jpg',
    { prefix: PREFIX },
    ),
  verde: includeResponsive(
    `${SEGURANCA_PREFIX}seguranca-fiat-scudo-itens-protecao`,
    'jpg',
    { prefix: PREFIX },
    ),
  indicadores: includeResponsive(
    `${SEGURANCA_PREFIX}seguranca-indicadores-seguranca`,
    'jpg',
    { prefix: PREFIX },
    ),
    
};

// SERVIÇOS
const SERVICOS_PREFIX = `${SECTION_PREFIX}servicos/`;
export const services = {
  mock: includeResponsive(
    `${SERVICOS_PREFIX}tela-verde-desk`,
    'jpg',
    {
      prefix: PREFIX,
    },
  ),
  trabalho: includeResponsive(
    `${SERVICOS_PREFIX}servicos-fiat-scudo-utilitario`,
    'png',
    {
      prefix: PREFIX,
    },
  ),
  protegido: includeResponsive(
    `${SERVICOS_PREFIX}servico-seu-fiat-sempre-protegido`,
    'jpg',
    {
      prefix: PREFIX,
    },
  ),
  familyCar: includeResponsive(
    `${SERVICOS_PREFIX}servico-fiat-family-car`,
    'jpg',
    {
      prefix: PREFIX,
    },
  ),

};

// TRANSFORMAÇÃO
const TRANSFORMACAO_PREFIX = `${SECTION_PREFIX}transformacao/`;
export const transformation = {
  negocio: includeResponsive(
    `${TRANSFORMACAO_PREFIX}transformacao-fiat-scudo-veiculo-negocio`,
    'jpg',
    {
      prefix: PREFIX,
    },
  ),
 

};

const SERVICOS_DUMMY = `${SECTION_PREFIX}dummyPd/`;
export const dummy = {
  dummy: includeResponsive(`${SERVICOS_DUMMY}dumy-pd`, 'png', {
    prefix: PREFIX,
  }),
};
