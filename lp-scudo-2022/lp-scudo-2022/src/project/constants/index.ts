import { MetaType } from '@/prox/models/index';

export const PRODUCT_NAME = 'Scudo';
export const BRAND_NAME = 'Fiat';
export const PAGE_TITLE = `${BRAND_NAME} ${PRODUCT_NAME}`;

const baseUrl = process.env.BASE_PREFIX ?? '/';

export const metaTags: MetaType = {
  description: 'Descubra uma nova experiência de condução. Experimente o melhor do conforto e economia pra você e seu negócio com o Novo Fiat Scudo. Conheça! ',
  title: 'Fiat Scudo | Fiat',
  brandName: '',
  productName: 'Scudo',
  heading: 'Fiat Scudo',
  twitter: {
    card: 'summary',
    site: '@fiatbr',
    image: `https://scudo.fiat.com.br/images/share/scudo-twitter.jpg`,
  },
  url: 'https://scudo.fiat.com.br/',
  image: `https://scudo.fiat.com.br/images/share/scudo-facebook.jpg`,
  imageAlt: 'Fiat scudo',
};
export const STATES = [
  'AC',
  'AL',
  'AP',
  'AM',
  'BA',
  'CE',
  'DF',
  'ES',
  'GO',
  'MA',
  'MT',
  'MS',
  'MG',
  'PA',
  'PB',
  'PR',
  'PE',
  'PI',
  'RJ',
  'RN',
  'RS',
  'RO',
  'RR',
  'SC',
  'SP',
  'SE',
  'TO',
];

export const links = {
  privacy:
    'https://www.fiat.com.br/politica-de-privacidade.html',
  avise:
    'https://www.fiat.com.br/formularios/avise-me-e-scudo.html',
};

export const STORAGE_PREFIX = '@fiat-scudo/';

export const brandLinks = {
  mainUrl: 'https://www.fiat.com.br',
  privacyPolicy:
    'https://www.fiat.com.br/politica-de-privacidade.html',
  twitter: 'https://twitter.com/fiatbr',
  facebook: 'https://www.facebook.com/fiatbr',
  instagram: 'https://www.instagram.com/fiatbr/',
};

export * as menu from '../data/menu';
export * as formError from './formError';
export * as inputMasks from './inputMasks';
