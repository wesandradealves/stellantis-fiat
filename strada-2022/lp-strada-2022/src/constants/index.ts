import { MetaType } from '@models/index';

export const PRODUCT_NAME = 'Strada';
export const BRAND_NAME = 'Fiat';
export const PAGE_TITLE = `${BRAND_NAME} ${PRODUCT_NAME}`;

const baseUrl = process.env.BASE_PREFIX ?? '/';

export const metaTags: MetaType = {
  description: 'Fiat Strada, nova Fiat Strada',
  title: 'Nova Fiat Strada',
  brandName: 'Fiat',
  productName: 'Strada',
  heading: 'A lenda se superou.',
  twitter: {
    card: 'summary',
    site: '@fiatbr',
    image: 'https://strada.fiat.com.br/og-twitter-image.png',
  },
  url: 'https://strada.fiat.com.br',
  image: `${baseUrl}og-image.jpg`,
  imageAlt: 'Fiat strada',
};

export const STORAGE_PREFIX = '@fiat-strada/';

export const brandLinks = {
  mainUrl: 'https://www.fiat.com.br',
  privacyPolicy:
    'https://www.fiat.com.br/politica-de-privacidade.html',
  twitter: 'https://twitter.com/fiatbr',
  facebook: 'https://www.facebook.com/fiatbr',
  instagram: 'https://www.instagram.com/fiatbr/',
};

export * as menu from '../mocks/menu';
export * as formError from './formError';
export * as inputMasks from './inputMasks';
