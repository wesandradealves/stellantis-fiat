import sanitizeString from "./sanitizeString";

export interface BaseDataLayer {
  event: 'interaction' | 'vpv';
  brand: 'fiat',
  segment: 'landing-page',
  product: 'scudo',
  path: string,
}

export type PathType = string;
export type InteractionType = 'clique' | 'change' | 'scroll' | 'select:toggle' | 'selecao' | 'preencheu' | 'abriu' | 'swipe' | 'abrir' | 'fechar';
export type PageSubSectionType = string;
export type ElementCategoryType =
| 'logo'
| 'category'
| 'botao'
| 'cta'
| 'link'
| 'campo'
| 'submit'
| 'submit-success'
| 'submit-failure'
| 'card'
| 'imagem'
| 'banner'
| 'icone'
| 'modal'
| 'painel'
| 'slide'
| 'text'
| 'select'
| 'radio'
| 'stories'  
  ;
export type ElementType = string;

export interface BuildableDatalayer {
  path?: string;
  element: ElementType;
  elementCategory: ElementCategoryType;
  interactionType: InteractionType;
  pageSection: string;
  pageSubsection: string;
}

interface DataLayer extends Omit<BaseDataLayer, 'path'>, BuildableDatalayer { }

type PushDataLayerType = DataLayer | (BaseDataLayer & VpvType);

const pushDataLayer = (dataLayer: PushDataLayerType) => {
  if (dataLayer) {
    try {
      if (process.env.NODE_ENV === 'production') {
        const typedWindow = (window as Window & typeof globalThis & { dataLayer?: PushDataLayerType[] });
        typedWindow.dataLayer?.push(dataLayer);
      }
      else {
        console.log(dataLayer);
      }
    } catch (error) {
      console.error(error);
    }
  }
};

const baseDataLayer: BaseDataLayer = {
  event: 'interaction',
  brand: 'fiat',
  segment: 'landing-page',
  product: 'scudo',
  path: 'home'
};

const rawDataLayer = (datalayer: BuildableDatalayer): BaseDataLayer & BuildableDatalayer => ({
  ...baseDataLayer,
  ...datalayer,
});

const rawVpvDataLayer = (dataLayer: VpvType): BaseDataLayer & VpvType => ({
  ...baseDataLayer,
  event: 'vpv',
  ...dataLayer,
});

interface EventType {
  path?: string;
  element: ElementType;
  pageSection: string;
  pageSubsection: string;
  elementCategory: ElementCategoryType;
  selectedValue?: string;
}

interface VpvType {
  path?: string;
  title: string;
  location: 'https://scudo.fiat.com.br/';
}

const clickEvent = (dataArgs: EventType): void => {
  const { path } = dataArgs;
  pushDataLayer(
    rawDataLayer({
      interactionType: 'clique',
      ...dataArgs,
      pageSection: sanitizeString(dataArgs.pageSection),
      pageSubsection: sanitizeString(dataArgs.pageSubsection),
      element: sanitizeString(dataArgs.element),
      path: path ?? 'home',
    }),
  );
};

const changeEvent = (dataArgs: EventType): void => {
  const { path } = dataArgs;
  pushDataLayer(
    rawDataLayer({
      interactionType: 'change',
      ...dataArgs,
      pageSection: sanitizeString(dataArgs.pageSection),
      pageSubsection: sanitizeString(dataArgs.pageSubsection),
      element: sanitizeString(dataArgs.element),
      path: path ?? 'home',
    }),
  );
};

const filledEvent = (dataArgs: EventType): void => {
  const { path } = dataArgs;
  pushDataLayer(
    rawDataLayer({
      interactionType: 'preencheu',
      ...dataArgs,
      pageSection: sanitizeString(dataArgs.pageSection),
      pageSubsection: sanitizeString(dataArgs.pageSubsection),
      element: sanitizeString(dataArgs.element),
      path: path ?? 'home',
    }),
  );
};

const toggleEvent = (dataArgs: EventType, open: boolean): void => {
  const { path } = dataArgs;
  pushDataLayer(
    rawDataLayer({
      interactionType: open ? 'abrir' : 'fechar',
      ...dataArgs,
      pageSection: sanitizeString(dataArgs.pageSection),
      pageSubsection: sanitizeString(dataArgs.pageSubsection),
      element: sanitizeString(dataArgs.element),
      path: path ?? 'home',
    }),
  );
};

const openEvent = (dataArgs: EventType): void => {
  const { path } = dataArgs;
  pushDataLayer(
    rawDataLayer({
      interactionType: 'abrir',
      ...dataArgs,
      pageSection: sanitizeString(dataArgs.pageSection),
      pageSubsection: sanitizeString(dataArgs.pageSubsection),
      element: sanitizeString(dataArgs.element),
      path: path ?? 'home',
    }),
  );
};

const closeEvent = (dataArgs: EventType): void => {
  const { path } = dataArgs;
  pushDataLayer(
    rawDataLayer({
      interactionType: 'fechar',
      ...dataArgs,
      pageSection: sanitizeString(dataArgs.pageSection),
      pageSubsection: sanitizeString(dataArgs.pageSubsection),
      element: sanitizeString(dataArgs.element),
      path: path ?? 'home',
    }),
  );
};

const selectEvent = (dataArgs: EventType): void => {
  const { path } = dataArgs;
  pushDataLayer(
    rawDataLayer({
      interactionType: 'selecao',
      ...dataArgs,
      pageSection: sanitizeString(dataArgs.pageSection),
      pageSubsection: sanitizeString(dataArgs.pageSubsection),
      element: sanitizeString(dataArgs.element),
      path: path ?? 'home',
    }),
  );
};

const clickMenuEvent = (dataArgs: EventType): void => {
  const { path } = dataArgs;
  clickEvent({
    ...dataArgs,
    path: path ?? 'home',
  });
};

const clickSocialEvent = (dataArgs: EventType): void => {
  const { path } = dataArgs;
  clickEvent({
    ...dataArgs,
    path: path ?? 'home',
  });
};

const swipeEvent = (dataArgs: EventType): void => {
  const { path } = dataArgs;
  pushDataLayer(
    rawDataLayer({
      path: path ?? 'home',
      interactionType: 'swipe',
      ...dataArgs,
      pageSection: sanitizeString(dataArgs.pageSection),
      pageSubsection: sanitizeString(dataArgs.pageSubsection),
      element: sanitizeString(dataArgs.element),
    }),
  );
};

const vpv = (dataArgs: VpvType): void => {
  const { path } = dataArgs;
  pushDataLayer(
    rawVpvDataLayer({
      path: path ?? 'home',
      ...dataArgs,
    })
  )
}

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
}

export default DataLayer;
