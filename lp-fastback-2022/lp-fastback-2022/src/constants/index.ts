import { MetatagsInterface } from "@/models/Metatags";
import {
  ProjectBrand,
  ProjectInfoInterface,
  ProjectType,
} from "@/models/ProjectInfo";

export const project: ProjectInfoInterface = {
  year: "2023",
  version: "1.0",
  debug: true,
  product: "Fastback",
  brand: ProjectBrand.FIAT,
  type: ProjectType.LANDING_PAGE,
  url: 'https://fastback.fiat.com.br/',
};

export const metaTags: MetatagsInterface = {
  title: "Fiat Fastback - O SUV Coupé da Fiat",
  description: "O SUV Coupé da Fiat. A evolução da categoria com exclusivo design italiano. Conheça versões, acessórios e muito mais.",
  keywords: "Fiat, Fiat fastback",
  url: project.url,
  themeColor: "#000",
  image: `${project.url}images/general/share/fiat-fastback-opengraph.jpg`,
  imageAlt: "Fiat fastback",
  twitter: {
    card: "summary",
    site: "@fiatbr",
    image: `${project.url}images/general/share/fiat-fastback-opengraph.jpg`,
    title: "Fiat Fastback - O SUV Coupé da Fiat",
    description: "O SUV Coupé da Fiat. A evolução da categoria com exclusivo design italiano. Conheça versões, acessórios e muito mais.",
  },
  facebook: {
    type: "website",
    image: `${project.url}images/general/share/fiat-fastback-opengraph.jpg`,
    imageWidth: "1200",
    imageHeight: "630",
    title: "Fiat Fastback - O SUV Coupé da Fiat",
    description: "O SUV Coupé da Fiat. A evolução da categoria com exclusivo design italiano. Conheça versões, acessórios e muito mais.",
  },
};

export const STORAGE_PREFIX = "@fiat-fastback/";

export * as menu from "../data/menu";
