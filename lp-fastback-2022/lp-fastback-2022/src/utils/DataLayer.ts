export const formatString = (s: string): string =>
  s
    ? s
        .toLowerCase()
        .replace(/\//g, " ")
        .replace(/:/g, " ")
        .replace(/-/g, " ")
        .replace(/\?/g, "")
        .replace(/\!/g, "")
        .replace(/\./g, "")
        .replace(/\s\s+/g, " ")
        .replace(/^\s/gu, "")
        .replace(/\s/gu, "-")
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .trim() ?? ""
    : "";

export interface BaseDataLayer {
  event: "interaction" | "vpv";
  brand: "fiat";
  segment: "landing-page";
  product: "fastback";
  path: string;
}

export type PathType = string;
export type InteractionType =
  | "clique"
  | "change"
  | "scroll"
  | "select:toggle"
  | "selecao"
  | "preencheu"
  | "abriu"
  | "swipe"
  | "abrir"
  | "fechar";
export type PageSubSectionType = string;
export type ElementCategoryType =
  | "logo"
  | "category"
  | "botao"
  | "cta"
  | "link"
  | "campo"
  | "submit"
  | "submit-success"
  | "card"
  | "imagem"
  | "banner"
  | "icone"
  | "modal"
  | "painel"
  | "slide"
  | "stories"
  | "whatsapp";
export type ElementType = string;

export interface BuildableDatalayer {
  path?: string;
  element: ElementType;
  elementCategory: ElementCategoryType;
  interactionType: InteractionType;
  pageSection: string;
  pageSubsection: string;
}

interface DataLayer extends Omit<BaseDataLayer, "path">, BuildableDatalayer {}

type PushDataLayerType = DataLayer | (BaseDataLayer & VpvType);

const pushDataLayer = (dataLayer: PushDataLayerType) => {
  if (dataLayer) {
    try {
      if (process.env.NODE_ENV === "production") {
        const typedWindow = window as Window &
          typeof globalThis & {
            dataLayer?: PushDataLayerType[];
          };
        typedWindow.dataLayer?.push(dataLayer);
      } else {
        console.log(dataLayer);
      }
    } catch (error) {
      console.error(error);
    }
  }
};

const baseDataLayer: BaseDataLayer = {
  event: "interaction",
  brand: "fiat",
  segment: "landing-page",
  product: "fastback",
  path: "home",
};

const rawDataLayer = (
  datalayer: BuildableDatalayer
): BaseDataLayer & BuildableDatalayer => ({
  ...baseDataLayer,
  ...datalayer,
});

const rawVpvDataLayer = (dataLayer: VpvType): BaseDataLayer & VpvType => ({
  ...baseDataLayer,
  event: "vpv",
  ...dataLayer,
});

interface EventType {
  path?: string;
  element: ElementType;
  pageSection: string;
  pageSubsection: string;
  elementCategory: ElementCategoryType;
  selectedValue?: string;
  product?: string;
  segment?: string;
}

interface VpvType {
  path?: string;
  title: string;
  location: "https://fastback.fiat.com.br/";
}

const clickEvent = (dataArgs: EventType): void => {
  const { path } = dataArgs;
  pushDataLayer(
    rawDataLayer({
      interactionType: "clique",
      ...dataArgs,
      pageSection: formatString(dataArgs.pageSection),
      pageSubsection: formatString(dataArgs.pageSubsection),
      element: formatString(dataArgs.element),
      path: path ?? "home",
    })
  );
};

const changeEvent = (dataArgs: EventType): void => {
  const { path } = dataArgs;
  pushDataLayer(
    rawDataLayer({
      interactionType: "change",
      ...dataArgs,
      pageSection: formatString(dataArgs.pageSection),
      pageSubsection: formatString(dataArgs.pageSubsection),
      element: formatString(dataArgs.element),
      path: path ?? "home",
    })
  );
};

const filledEvent = (dataArgs: EventType): void => {
  const { path } = dataArgs;
  pushDataLayer(
    rawDataLayer({
      interactionType: "preencheu",
      ...dataArgs,
      pageSection: formatString(dataArgs.pageSection),
      pageSubsection: formatString(dataArgs.pageSubsection),
      element: formatString(dataArgs.element),
      path: path ?? "home",
    })
  );
};

const toggleEvent = (dataArgs: EventType): void => {
  const { path } = dataArgs;
  pushDataLayer(
    rawDataLayer({
      interactionType: "clique",
      ...dataArgs,
      pageSection: formatString(dataArgs.pageSection),
      pageSubsection: formatString(dataArgs.pageSubsection),
      element: formatString(dataArgs.element),
      path: path ?? "home",
    })
  );
};

const openEvent = (dataArgs: EventType): void => {
  const { path } = dataArgs;
  pushDataLayer(
    rawDataLayer({
      interactionType: "abrir",
      ...dataArgs,
      pageSection: formatString(dataArgs.pageSection),
      pageSubsection: formatString(dataArgs.pageSubsection),
      element: formatString(dataArgs.element),
      path: path ?? "home",
    })
  );
};

const closeEvent = (dataArgs: EventType): void => {
  const { path } = dataArgs;
  pushDataLayer(
    rawDataLayer({
      interactionType: "fechar",
      ...dataArgs,
      pageSection: formatString(dataArgs.pageSection),
      pageSubsection: formatString(dataArgs.pageSubsection),
      element: formatString(dataArgs.element),
      path: path ?? "home",
    })
  );
};

const selectEvent = (dataArgs: EventType): void => {
  const { path } = dataArgs;
  pushDataLayer(
    rawDataLayer({
      interactionType: "selecao",
      ...dataArgs,
      pageSection: formatString(dataArgs.pageSection),
      pageSubsection: formatString(dataArgs.pageSubsection),
      element: formatString(dataArgs.element),
      path: path ?? "home",
    })
  );
};

const clickMenuEvent = (dataArgs: EventType): void => {
  const { path } = dataArgs;
  clickEvent({
    ...dataArgs,
    path: path ?? "home",
  });
};

const clickSocialEvent = (dataArgs: EventType): void => {
  const { path } = dataArgs;
  clickEvent({
    ...dataArgs,
    path: path ?? "home",
  });
};

const swipeEvent = (dataArgs: EventType): void => {
  const { path } = dataArgs;
  pushDataLayer(
    rawDataLayer({
      path: path ?? "home",
      interactionType: "swipe",
      ...dataArgs,
      pageSection: formatString(dataArgs.pageSection),
      pageSubsection: formatString(dataArgs.pageSubsection),
      element: formatString(dataArgs.element),
    })
  );
};

const vpv = (dataArgs: VpvType): void => {
  const { path } = dataArgs;
  pushDataLayer(
    rawVpvDataLayer({
      path: path ?? "home",
      ...dataArgs,
    })
  );
};

const DataLayer = {
  vpv,
  toggleEvent,
  changeEvent,
  closeEvent,
  swipeEvent,
  clickSocialEvent,
  clickMenuEvent,
  clickEvent,
  rawDataLayer,
  selectEvent,
  filledEvent,
  openEvent,
};

export default DataLayer;
