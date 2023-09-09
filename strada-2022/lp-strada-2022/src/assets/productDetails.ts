import { includeResponsive } from '@/utils/imagePrefixes';

const PREFIX = `${process.env.BASE_PREFIX}images/`;
const SECTION_PREFIX = 'ProductDetails/';

// BELLO DESIGN
const DESIGN_PREFIX = `${SECTION_PREFIX}design/`;
export const design = {
  farolLed: includeResponsive(
    `${DESIGN_PREFIX}farol-strada-carrossel`,
    'png',
    { prefix: PREFIX },
  ),
  lugares5Portas4: includeResponsive(
    `${DESIGN_PREFIX}strada-vermelho-carrossel`,
    'png',
    { prefix: PREFIX },
  ),
  espacoConforto: includeResponsive(
    `${DESIGN_PREFIX}bancos-carrossel`,
    'jpg',
    { prefix: PREFIX },
  ),
  roda16: includeResponsive(
    `${DESIGN_PREFIX}roda-carrossel`,
    'png',
    {
      prefix: PREFIX,
    },
  ),

  designExterno: includeResponsive(
    `${DESIGN_PREFIX}lateral-strada-carrossel`,
    'png',
    { prefix: PREFIX },
  ),
};

// FORÇA E POTÊNCIA
const FORCA_PREFIX = `${SECTION_PREFIX}forca/`;
export const forca = {
  cacamba: includeResponsive(`${FORCA_PREFIX}cacamba`, 'png', {
    prefix: PREFIX,
  }),

  alturaSolo: includeResponsive(
    `${FORCA_PREFIX}strada-explicacao-altura-solo-carrossel`,
    'png',
    { prefix: PREFIX },
  ),
  suspencaoFeixeMolas: includeResponsive(
    `${FORCA_PREFIX}roda-strada-carrossel`,
    'png',
    { prefix: PREFIX },
  ),

  vaoModular: includeResponsive(
    `${FORCA_PREFIX}cacamba-aberta-vazia-strada-carrossel`,
    'png',
    { prefix: PREFIX },
  ),

  melhorConsumo: includeResponsive(
    `${FORCA_PREFIX}motor-firefly-strada-carrossel`,
    'png',
    { prefix: PREFIX },
  ),

  eLocker: includeResponsive(
    `${FORCA_PREFIX}strada-botaotc-carrossel`,
    'png',
    {
      prefix: PREFIX,
    },
  ),
};

// TECNOLOGIA
const TECNOLOGIA_PREFIX = `${SECTION_PREFIX}tecnologia/`;
export const tecnologia = {
  centralMultimidia: includeResponsive(
    `${TECNOLOGIA_PREFIX}central-multimidia-carrossel`,
    'png',
    { prefix: PREFIX },
  ),

  wirelessCharger: includeResponsive(
    `${TECNOLOGIA_PREFIX}wireless-charger-carrossel`,
    'png',
    { prefix: PREFIX },
  ),

  comandosVolante: includeResponsive(
    `${TECNOLOGIA_PREFIX}botoes-volante-strada`,
    'png',
    { prefix: PREFIX },
  ),

  arCondicionado: includeResponsive(
    `${TECNOLOGIA_PREFIX}ar-condicionado-strada-carrossel`,
    'jpg',
    { prefix: PREFIX },
  ),

  painelTft: includeResponsive(
    `${TECNOLOGIA_PREFIX}painel-velocidade-carrossel`,
    'png',
    { prefix: PREFIX },
  ),

  tampaTraseira: includeResponsive(
    `${TECNOLOGIA_PREFIX}traseira-strada-cor-cinza-carrossel`,
    'png',
    { prefix: PREFIX },
  ),
};

// SEGURANÇA
const SEGURANCA_PREFIX = `${SECTION_PREFIX}seguranca/`;
export const seguranca = {
  airBagLateral: includeResponsive(
    `${SEGURANCA_PREFIX}airbags-carrossel`,
    'png',
    { prefix: PREFIX },
  ),
  cameraSensor: includeResponsive(
    `${SEGURANCA_PREFIX}camera-strada-carrossel`,
    'png',
    { prefix: PREFIX },
  ),

  controleEstabilidade: includeResponsive(
    `${SEGURANCA_PREFIX}controle-estabilidade-carrossel`,
    'png',
    { prefix: PREFIX },
  ),

  isofix: includeResponsive(
    `${SEGURANCA_PREFIX}isofix-carrossel`,
    'png',
    {
      prefix: PREFIX,
    },
  ),
};

//  ACESSORIOS
const ACESSORIOS_PREFIX = `${SECTION_PREFIX}acessorios/`;
export const acessorios = {
  acessorios50: includeResponsive(
    `${ACESSORIOS_PREFIX}acessorios-imagem-descritiva-carrossel`,
    'png',
    {
      prefix: PREFIX,
    },
  ),
  extensorCacamba: includeResponsive(
    `${ACESSORIOS_PREFIX}extensor-cacamba-carrossel`,
    'png',
    {
      prefix: PREFIX,
    },
  ),
  engateReboque: includeResponsive(
    `${ACESSORIOS_PREFIX}engate-reboque-carrossel`,
    'png',
    {
      prefix: PREFIX,
    },
  ),
  estriboLateral: includeResponsive(
    `${ACESSORIOS_PREFIX}estribo-lateral-carrossel`,
    'jpg',
    {
      prefix: PREFIX,
    },
  ),
  santantonio: includeResponsive(
    `${ACESSORIOS_PREFIX}santantonio-carrossel`,
    'png',
    {
      prefix: PREFIX,
    },
  ),

  suporteBicicleta: includeResponsive(
    `${ACESSORIOS_PREFIX}suporte-bike-carrossel`,
    'png',
    {
      prefix: PREFIX,
    },
  ),

  capotaMaritima: includeResponsive(
    `${ACESSORIOS_PREFIX}capota-maritima-carrossel`,
    'png',
    {
      prefix: PREFIX,
    },
  ),
};

// SERVIÇOS
const SERVICOS_PREFIX = `${SECTION_PREFIX}servicos/`;
export const servicos = {
  revisao: includeResponsive(
    `${SERVICOS_PREFIX}mulher-mecanica-servicos-carrossel`,
    'jpg',
    {
      prefix: PREFIX,
    },
  ),

  fiatMopar: includeResponsive(
    `${SERVICOS_PREFIX}duas-mulheres-serviços-carrossel`,
    'jpg',
    {
      prefix: PREFIX,
    },
  ),

  garantiaAdicional: includeResponsive(
    `${SERVICOS_PREFIX}duas-pessoas-carrossel-servicos`,
    'jpg',
    {
      prefix: PREFIX,
    },
  ),

  revisaoSobMedida: includeResponsive(
    `${SERVICOS_PREFIX}mecanico-strada-vermelho`,
    'jpg',
    {
      prefix: PREFIX,
    },
  ),
};
