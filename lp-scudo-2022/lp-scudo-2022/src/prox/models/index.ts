/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */

import {IncludePrefixResponsiveSizes} from '@/prox/utils/imagePrefixes';
import {
  StandardLonghandProperties,
  StandardShorthandProperties,
} from 'csstype';
import {MediaHTMLAttributes} from 'react';
import {boolean} from 'yup';

interface TwitterProps {
  card: 'summary';
  site: '@fiatbr';
  image: string;
}

export interface VersionsDetails {
  title: JSX.Element;
  titleDescription: string;
  photo: string;
}

export interface IVersionFragment {
  id: string;
  name: string;
  slug: string;
  logo: string;
  versionText?: string;
  nameParts: {
    first: string;
    second: string;
  };
  short: string;
  hex: string;
  details: VersionsDetails[];
  text: 'dark' | 'light';
}

export interface IVersion extends IVersionFragment {
  fullName: string;
}

export interface MenuLabel {
  id: string;
  slug: string;
  label: string;
  url: string;
  hasChildren?: boolean;
  prefixRelation?: MenuLabel;
  //reference?: MenuLabel;
  //nestedPrefix?: string;
  //tabId?: string;
}

export interface MenuCTAs {
  id: string;
  label: string;
  url: string;
  iconCode?: string;
  form?: boolean;
}

export interface ILocation {
  cityCode: string;
  stateCode: string;
  cityName: string;
  cep: string;
}

export interface IDealer {
  id: string;
  blocked?: { block?: boolean };
  hqId?: string;
  address?: string;
  cityId?: string;
  cnpj?: string;
  corporateName?: string;
  dealerCode?: string;
  dealerType?: string;
  formattedName?: string;
  email?: string;
  fantasyName: string;
  geodesicDistance?: number;
  http?: string;
  inscription?: string;
  latitude?: number;
  longitude?: number;
  name: string;
  neighborhood?: string;
  postalCode?: string;
  state?: string;
  telephone?: string;
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
  backgroundRepeat?: StandardLonghandProperties<string | number,
      string & unknown>['backgroundRepeat'];
  backgroundPosition?: StandardShorthandProperties<string | number,
      string & unknown>['backgroundPosition'];
  backgroundImage?: StandardLonghandProperties<string | number,
      string & unknown>['backgroundImage'];
  backgroundColor?: StandardLonghandProperties<string | number,
      string & unknown>['backgroundColor'];
  backgroundSize?: StandardLonghandProperties<string | number,
      string & unknown>['backgroundSize'];
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
  title?: string;
  videoProps?: StoriesVideoProps;
  activeIndex?: number;
  background?: {
    color?: string;
    style?: StoriesBackgroundStyleProps;
    src?: IncludePrefixResponsiveSizes;
  };
}

export interface CardsItemsProps {
  id: string;
  title: string;
  title2?: string;
  src: IncludePrefixResponsiveSizes;
  isSelected?: boolean;
}

export interface IVersionData {
  id: string;
  label: string;
  value: string;
  model: string;
  serie: string;
  version: string;
}

export interface IQueryString {
  utm_campaign: string;
  utm_content: string;
  utm_medium: string;
  utm_source: string;
}
