/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */

import { IncludePrefixResponsiveSizes } from '@/utils/imagePrefixes';
import { IncludePrefix } from '@/utils/pathFormatter';
import {
  StandardLonghandProperties,
  StandardShorthandProperties,
} from 'csstype';
import { MediaHTMLAttributes } from 'react';

interface TwitterProps {
  card: 'summary';
  site: '@fiatbr';
  image: string;
}

export interface HighlightSlide {
  id: string;
  slug: string;
  title: string;
  alt: string;
  linkBtn: string;
  titleElement?: JSX.Element;
  descriptionDesktop: JSX.Element;
  descriptionMobile: JSX.Element;
  image: IncludePrefixResponsiveSizes;
}

export interface IVersion {
  id: string;
  name: string;
  short: string;
  title: string;
  alt: string;
  slug: string;
  hasDoubleCabin?: boolean;
  haNewItens?: boolean;
  details: string[];
}

export interface MenuLabel {
  id: string;
  slug: string;
  label: string;
  url: string;
  hasChildren?: boolean;
  prefixRelation?: MenuLabel;
}

export interface MenuCTAs {
  id: string;
  label: string;
  url: string;
  iconCode?: string;
}

export interface MetaType {
  title: string;
  description: string;
  url: string;
  heading: string;
  brandName?: string;
  twitter: TwitterProps;
  image: string;
  imageAlt: string;
  productName: string;
}

export type AnimationType =
  | 'top'
  | 'slide-in'
  | 'scale'
  | 'fade-in';

export interface StoriesBackgroundStyleProps {
  backgroundRepeat?: StandardLonghandProperties<
    string | number,
    string & unknown
  >['backgroundRepeat'];
  backgroundPosition?: StandardShorthandProperties<
    string | number,
    string & unknown
  >['backgroundPosition'];
  backgroundImage?: StandardLonghandProperties<
    string | number,
    string & unknown
  >['backgroundImage'];
  backgroundColor?: StandardLonghandProperties<
    string | number,
    string & unknown
  >['backgroundColor'];
  backgroundSize?: StandardLonghandProperties<
    string | number,
    string & unknown
  >['backgroundSize'];
}

export interface StoriesVideoProps {
  src?: string;
  autoPlay?: MediaHTMLAttributes<HTMLVideoElement>['autoPlay'];
  muted?: MediaHTMLAttributes<HTMLVideoElement>['muted'];
  loop?: MediaHTMLAttributes<HTMLVideoElement>['loop'];
}
export interface StoriesItemProps {
  title: string;
  scrollCtaOrientation?: 'horizontal' | 'vertical';
  durationInS: number;
  body: JSX.Element;
  showNext?: boolean;
  includeGradient?: boolean;
  videoProps?: StoriesVideoProps;
  background?: {
    color?: string;
    style?: StoriesBackgroundStyleProps;
    src?: IncludePrefixResponsiveSizes;
  };
}

export interface DisplayItemProps {
  body: JSX.Element;
  title: string;
  videoProps?: StoriesVideoProps;
  activeIndex?: number;
  background?: {
    color?: string;
    style?: StoriesBackgroundStyleProps;
    src?: IncludePrefixResponsiveSizes;
  };
}

export interface CardsItemsProps {
  id: number;
  title: string;
  title2?: string;
  src: IncludePrefixResponsiveSizes;
  isSelected?: boolean;
}

export interface LeadToBeSent {
  utmCampaign: '';
  utmContent: '';
  utmMedium: '';
  utmSource: 'site';
  tipo: 'T' | 'P';
  tipoCliente: 'F';
  comentario: string;
  aceiteComunicacoes: boolean;
  aceitePrivacidade: boolean;
  flagEmail: boolean;
  flagSms: boolean;
  flagWhatsapp: boolean;
  flagTelefone: boolean;
  cpf: string;
  email: string;
  sobrenome: string;
  telefone: string;
  lcdv: string;
  modeloInteresse: string;
  nome: string;
  nomeConcessionario: '';
  cep: string;
  uf: string;
  cidade: string;
  concessionario: '';
  versaoInteresse: string;
}

export interface IProduct {
  versionSku: string;
  shortName: string;
  fullName: string;
  image: IncludePrefix;
  details: string[];
}

export interface IPriceInfo {
  previousPrice: number;
  currentPrice: number;
  legalInfo: JSX.Element | string;
}
