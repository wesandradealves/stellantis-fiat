import { MetaType } from '@models/index';

export const PRODUCT_NAME = 'Pulse';
export const BRAND_NAME = 'Fiat';
export const PAGE_TITLE = `${BRAND_NAME} ${PRODUCT_NAME}`;

export const metaTags: MetaType = {
	description: 'Com a melhor performance da categoria, o Fiat Pulse, 1º SUV da Fiat, chegou para revolucionar o conceito de carro potente, econômico e conectado.',
	title: 'Fiat Pulse',
	brandName: 'Fiat',
	productName: 'Pulse',
	heading: 'O SUV inspirado em você',
	twitter: {
		card: 'summary',
		site: '@fiatbr',
		image: 'https://pulse.fiat.com.br/og-twitter-image.png',
	},
	url: 'https://pulse.fiat.com.br',
	image: 'https://pulse.fiat.com.br/og-image.jpg',
	imageAlt: 'Fiat Pulse - O SUV inspirado em você',
};

export const STORAGE_PREFIX = '@fiat-pulse/';

export const brandLinks = {
  mainUrl: 'https://www.fiat.com.br',
  privacyPolicy: 'https://www.fiat.com.br/politica-de-privacidade.html',
  twitter: 'https://twitter.com/fiatbr',
  facebook: 'https://www.facebook.com/fiatbr',
  instagram: 'https://www.instagram.com/fiatbr/',
};

export * as menu from '../mocks/menu';
