import TagManager from 'react-gtm-module';
import taggingFormat from '../utils/taggingFormat';
import $ from 'jquery';

const standardArgs = {
  brand: 'fiat',
  event: 'interaction',
  segment: 'landing-page',
  product: '500e',
  path: 'home',
};
const dataLayerPush = props => {
  const args = { ...standardArgs, ...props };
  return TagManager.dataLayer({ dataLayer: args });
};

// ÍNDICE:
//    1- DataLayer baseado em interações genéricas, ex.: clique, scroll...
//    2- DataLayer baseadi em elementos específicos, ex.: troca de slide de accordion e clique em Links de Menu...

//<-----------------DATALAYER POR TIPO DE INTERAÇÃO------------->

// NAVEGAÇÃO
let currentSectionInView;
let bottomIterator = 0;
window.blockedScrollDataLayerFunction = false;
const navigationDataLayer = info => {
  dataLayerPush({
    pageSection: 'conteudo',
    pageSubsection: info.replace(/#/gu, ''),
    interactionType: 'navegacao',
    elementCategory: 'scroll',
    element: info.replace(/#/gu, ''),
    selectedValue: null,
  });
};
export const scrollToSection_DataLayer = (
  section,
  lastSection,
) => {
  if (
    window.blockedScrollDataLayerFunction === false ||
    undefined
  ) {
    (function trackScroll(id) {
      const section = $(id).offset();
      const sectionH = $(id).height();
      const sectionL = section.top + sectionH;
      if (
        window.innerHeight + Math.ceil(window.scrollY) >=
        document.body.scrollHeight
      ) {
        bottomIterator = bottomIterator + 1;
        currentSectionInView = lastSection;
        if (bottomIterator === 1) {
          navigationDataLayer(currentSectionInView);
        }
      } else {
        if (
          $(window).scrollTop() >= section.top &&
          $(window).scrollTop() <= sectionL
        ) {
          if (currentSectionInView !== id) {
            currentSectionInView = id;
            bottomIterator = 0;
            navigationDataLayer(currentSectionInView);
          }
        }
        return null;
      }
    })(section);
  }
};
// NAVEGAÇÃO

// SWIPE

export const swipeSlide_DataLayer = (
  section,
  direction,
  subsection,
) => {
  // document.querySelector
  dataLayerPush({
    pageSection: taggingFormat(section),
    pageSubsection: taggingFormat(
      subsection
        ? `${subsection}`
        : document.querySelector(
            `#${section} .slide.selected h1`,
          )?.innerHTML,
    ),
    interactionType: 'swipe',
    elementCategory: 'slide',
    element: taggingFormat(direction),
    selectedValue: null,
  });
};

//Swipe do Accordion Mobile
export const swipeSlideAccordionMobile_DataLayer = (
  subSection,
  direction,
  section,
) => {
  dataLayerPush({
    pageSection: taggingFormat(`${section? section : 'conteudo'}`),
    pageSubsection: taggingFormat(subSection),
    interactionType: 'swipe',
    elementCategory: 'slide',
    element: taggingFormat(direction),
    // selectedValue: null,
  });
};

// SWIPE

// CLIQUES CTAS/BOTOES
export const cliqueCTA_DataLayer = (
  ctaName,
  subSection,
  section = 'conteudo',
) => {
  dataLayerPush({
    pageSection: taggingFormat(section),
    pageSubsection: taggingFormat(subSection),
    interactionType: 'clique',
    elementCategory: 'cta',
    element: taggingFormat(ctaName),
    selectedValue: null,
  });
};
export const cliqueBotao_DataLayer = (
  subsection,
  buttonName,
  section,
) => {
  dataLayerPush({
    pageSection: `${section? section : 'conteudo'}`,
    pageSubsection: taggingFormat(subsection),
    interactionType: 'clique',
    elementCategory: 'botao',
    element: taggingFormat(buttonName),
    selectedValue: null,
  });
};
export const cliqueAnchorLinks_DataLayer =
  anchorLinkNameAndSectionID => {
    dataLayerPush({
      pageSection: 'conteudo',
      pageSubsection: 'menu',
      interactionType: 'clique',
      elementCategory: 'link',
      element: taggingFormat(anchorLinkNameAndSectionID),
      selectedValue: null,
    });
    if (!window.blockedScrollDataLayerFunction) {
      window.blockedScrollDataLayerFunction = true;
      dataLayerPush({
        pageSection: 'conteudo',
        pageSubsection: taggingFormat(
          anchorLinkNameAndSectionID,
        ),
        interactionType: 'navegacao',
        elementCategory: 'scroll',
        element: taggingFormat(anchorLinkNameAndSectionID),
        selectedValue: null,
      });
    }
    setTimeout(function () {
      window.blockedScrollDataLayerFunction = false;
    }, 1500);
  };
export const cliqueIconeRedeSocial_DataLayer = buttonName => {
  dataLayerPush({
    pageSection: 'footer',
    pageSubsection: 'social',
    interactionType: 'clique',
    elementCategory: 'icone',
    element: taggingFormat(buttonName),
    selectedValue: null,
  });
};
// CLIQUES CTAS/BOTOES

// PREENCHIMENTO
export const preencheuCampo_DataLayer = (
  subsectionName,
  inputName,
  section,
) => {
  dataLayerPush({
    pageSection: `${section? section: 'conteudo'}`,
    pageSubsection: taggingFormat(subsectionName),
    interactionType: 'preencheu',
    elementCategory: 'campo',
    element: taggingFormat(inputName),
    selectedValue: null,
  });
};
// PREENCHIMENTO

// SELEÇÃO
export const toggleCampo_DataLayer = (
  subsectionName,
  inputName,
) => {
  dataLayerPush({
    pageSection: 'conteudo',
    pageSubsection: taggingFormat(subsectionName),
    interactionType: 'selecao',
    elementCategory: 'campo',
    element: inputName,
    selectedValue: null,
  });
};
// /SELEÇÃO

//<----------------------------DATALAYER POR TIPO DE ELEMENTO ---------->

// CLIQUE EM MENU
export const cliqueHandleMenu_DataLayer = menuState => {
  dataLayerPush({
    pageSection: 'conteudo',
    pageSubsection: 'menu',
    interactionType: 'clique',
    elementCategory: 'icone',
    element: `${taggingFormat(menuState)}-menu`,
    selectedValue: null,
  });
};
// CLIQUE EM MENU

// CLIQUE EM THUMBS
export const cliqueCardThumb_DataLayer = (
  subSection,
  cardName,
) => {
  dataLayerPush({
    pageSection: 'conteudo',
    pageSubsection: taggingFormat(subSection),
    interactionType: 'clique',
    elementCategory: 'card',
    element: taggingFormat(cardName),
    selectedValue: null,
  });
};
export const cliqueFotoThumb_DataLayer = (
  subsectionName,
  photoIndex,
) => {
  dataLayerPush({
    pageSection: 'conteudo',
    pageSubsection: taggingFormat(subsectionName),
    interactionType: 'clique',
    elementCategory: 'imagem',
    element: `foto-${
      typeof photoIndex === 'number'
        ? photoIndex
        : `Wrong type of dataTrack parameter!`
    }`,
    selectedValue: null,
  });
};
// CLIQUE EM THUMBS

// TROCA DE SLIDES
export const cliqueArrowTrocaDeSlide_DataLayer = (
  section,
  direction,
  subsection,
) => {
  dataLayerPush({
    pageSection: taggingFormat(section),
    pageSubsection: taggingFormat(
      subsection
        ? `${section}-${subsection}`
        : document.querySelector(
            `#${section} .slide.selected h1`,
          ).textContent,
    ),
    interactionType: 'clique',
    elementCategory: 'icone',
    element: taggingFormat(direction),
    selectedValue: null,
  });
};
export const cliqueArrowTrocaDeSlideSemNome_DataLayer = (
  subSection,
  direction,
  section
) => {
  dataLayerPush({
    pageSection: taggingFormat(section? section:'conteudo'),
    pageSubsection: taggingFormat(subSection),
    interactionType: 'clique',
    elementCategory: 'icone',
    element: taggingFormat(direction),
    selectedValue: null,
  });
};
export const cliqueBulletTrocaDeSlide_DataLayer = (
  section,
  bulletIndex,
) => {
  dataLayerPush({
    pageSection: taggingFormat(section),
    pageSubsection: taggingFormat(
      document.querySelector(`#${section} .slide.selected h1`)
        ?.innerHTML,
    ),
    interactionType: 'clique',
    elementCategory: 'icone',
    element: `item-${bulletIndex}`,
    selectedValue: null,
  });
};
export const cliqueBulletTrocaDeSlideSemNome_DataLayer = (
  subSection,
  bulletIndex,
) => {
  dataLayerPush({
    pageSection: 'conteudo',
    pageSubsection: taggingFormat(subSection),
    interactionType: 'clique',
    elementCategory: 'icone',
    element: `item-${bulletIndex}`,
    selectedValue: null,
  });
};
// TROCA DE SLIDES

// TROCA DE SLIDE EM CAROUSEL
export const cliqueArrowTrocaDeSlideCarousel_DataLayer = (
  subSection,
  direction,
) => {
  dataLayerPush({
    pageSection: 'tudo-sobre-o-fiat-500e',
    pageSubsection: taggingFormat(subSection),
    interactionType: 'clique',
    elementCategory: 'icone',
    element: taggingFormat(direction),
    selectedValue: null,
  });
};
export const cliqueBulletTrocaDeSlideCarousel_DataLayer = (
  subSection,
  bulletIndex,
) => {
  setTimeout(function () {
    dataLayerPush({
      pageSection: 'tudo-sobre-o-fiat-500e',
      pageSubsection: taggingFormat(subSection),
      interactionType: 'clique',
      elementCategory: 'icone',
      element: `item-${bulletIndex}`,
      selectedValue: null,
    });
  }, 700);
};
// TROCA DE SLIDE EM CAROUSEL

// MODAL
export const cliqueAbrirModalZoom_DataLayer = (
  subSection,
  photoIndex,
) => {
  dataLayerPush({
    pageSection: 'conteudo',
    pageSubsection: taggingFormat(subSection),
    interactionType: 'clique',
    elementCategory: 'icone',
    element: `ampliar-foto-${photoIndex}`,
    selectedValue: null,
  });
};
export const cliqueFecharModal_DataLayer = (
  section,
  subSection,
) => {
  dataLayerPush({
    pageSection: taggingFormat(section),
    pageSubsection: taggingFormat(subSection),
    interactionType: 'clique',
    elementCategory: 'icone',
    element: 'fechar',
    selectedValue: null,
  });
};
// MODAL
