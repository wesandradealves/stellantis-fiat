/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
import { IncludePrefixResponsiveSizes } from "@/utils/imagePrefixes";
import {
  StandardLonghandProperties,
  StandardShorthandProperties,
} from "csstype";
import { MediaHTMLAttributes } from "react";

export interface VersionsDetails {
  title: JSX.Element;
  titleDescription: string;
  photo: string;
}

export interface IVersionFragment {
  id: string;
  name: string;
  slug: string;
  isAbarth?: boolean;
  versionText?: string;
  cardHeader: {
    alt: string;
    title: string;
  };
  nameParts: {
    first: string;
    second: string;
  };
  short: string | JSX.Element;
  hex: string;
  details: VersionsDetails[];
  text: "dark" | "light";
}

export interface IVersion extends IVersionFragment {
  fullName: string;
}

export interface MenuLabel {
  detailsFlag?: string | any;
  id: string;
  slug: string;
  label: string;
  url: string;
  hasChildren?: boolean;
  prefixRelation?: MenuLabel;
  isDetails?: boolean;
  detailsBox?: boolean;
  //reference?: MenuLabel;
  //nestedPrefix?: string;
  //tabId?: string;
}

export interface MenuCTAs {
  id: string;
  label: string;
  url: string;
  iconCode?: string;
}

export type AnimationType = "top" | "slide-in" | "scale" | "fade-in";

export interface StoriesBackgroundStyleProps {
  backgroundRepeat?: StandardLonghandProperties<
    string | number,
    string & unknown
  >["backgroundRepeat"];
  backgroundPosition?: StandardShorthandProperties<
    string | number,
    string & unknown
  >["backgroundPosition"];
  backgroundImage?: StandardLonghandProperties<
    string | number,
    string & unknown
  >["backgroundImage"];
  backgroundColor?: StandardLonghandProperties<
    string | number,
    string & unknown
  >["backgroundColor"];
  backgroundSize?: StandardLonghandProperties<
    string | number,
    string & unknown
  >["backgroundSize"];
}

export interface StoriesVideoProps {
  src?: string;
  autoPlay?: MediaHTMLAttributes<HTMLVideoElement>["autoPlay"];
  muted?: MediaHTMLAttributes<HTMLVideoElement>["muted"];
  loop?: MediaHTMLAttributes<HTMLVideoElement>["loop"];
}

export interface StoriesItemProps {
  title: string | JSX.Element;
  title2?: string;
  scrollCtaOrientation?: "horizontal" | "vertical";
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
    alt?: string;
  };
}

export interface CardsItemsProps {
  id: string;
  title?: string | JSX.Element;
  title2?: string;
  src: IncludePrefixResponsiveSizes;
  isSelected?: boolean;
  titleTag: string;
  altTag: string;
}

export interface AccessibilityProps {
  alt?: string;
  title?: string;
  ariaLabel?: string;
  caption?: string;
  transcript?: string;
}

export interface Image360Item {
  id?: string;
  index?: number;
  src: string;
  accessibility?: AccessibilityProps;
}

export interface HighlightSlide {
  id: string;
  slug: string;
  title: string;
  alt: string;
  linkBtn?: string;
  labelBtn?: string;
  titleBtn?: string;
  titleElement?: JSX.Element;
  descriptionDesktop: JSX.Element;
  descriptionMobile: JSX.Element;
  image: IncludePrefixResponsiveSizes;
}
