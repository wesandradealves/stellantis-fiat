import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import $ from 'jquery';
import GlobalStyle from './styles/global';
import Routes from './routes';
import configData from './components/Track/data';
import { DataLayer } from './components/Track/DataLayer/DataLayer';
import { WarningBox } from './components/WarningBox/WarningBox';

const propTypes = {
  data: PropTypes.object,
};

const defaultProps = {
  data: configData,
};
window.$ = require('jquery');

const App = ({ mobile, data: info, ...props }) => {
  let current;

  React.useLayoutEffect(() => {
    DataLayer.init(info.tracks.data);
  }, [info.tracks.data]);

  const sendTracks = id => {
    switch (id) {
      case '#toro-2022':
        return window.dataLayer.push({
          event: 'interaction',
          segment: 'landing-page',
          product: 'toro-2022',
          interactionType: 'navegacao',
          pageSection: 'conteudo',
          pageSubsection: 'toro-2022',
          elementCategory: 'scroll',
          element: 'toro-2022',
        });
      case '#services':
        return window.dataLayer.push({
          event: 'interaction',
          segment: 'landing-page',
          product: 'toro-2022',
          interactionType: 'navegacao',
          pageSection: 'conteudo',
          pageSubsection: 'servicos-conectados',
          elementCategory: 'scroll',
          element: 'servicos-conectados',
        });
      case '#renegade-70':
        return window.dataLayer.push({
          event: 'interaction',
          segment: 'landing-page',
          product: 'toro-2022',
          interactionType: 'navegacao',
          pageSection: 'conteudo',
          pageSubsection: 'stories',
          elementCategory: 'scroll',
          element: 'stories',
        });
      case '#jeep-inteligente':
        return window.dataLayer.push({
          event: 'interaction',
          segment: 'landing-page',
          product: 'toro-2022',
          interactionType: 'navegacao',
          pageSection: 'conteudo',
          pageSubsection: 'jeep-inteligente',
          elementCategory: 'scroll',
          element: 'jeep-inteligente',
        });
      case '#versions':
        return window.dataLayer.push({
          event: 'interaction',
          segment: 'landing-page',
          product: 'toro-2022',
          interactionType: 'navegacao',
          pageSection: 'conteudo',
          pageSubsection: 'todas-as-versões',
          elementCategory: 'scroll',
          element: 'todas-as-versões',
        });
      case '#tudo-sobre-a-toro':
        return window.dataLayer.push({
          event: 'interaction',
          segment: 'landing-page',
          product: 'toro-2022',
          interactionType: 'navegacao',
          pageSection: 'conteudo',
          pageSubsection: 'tudo-sobre-a-toro',
          elementCategory: 'scroll',
          element: 'tudo-sobre-a-toro',
        });

      default:
        break;
    }

    return null;
  };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const trackScroll = (scroll, id) => {
    try {
      const section = $(id).offset();
      const sectionH = $(id).height();
      const sectionL = section.top + sectionH;
      if (id === '#tudo-sobre-a-toro') {
        if (scroll >= section.top - 5 && scroll <= sectionL) {
          if (current !== id) {
            current = id;
            sendTracks(current);
          }
        }
        if (
          $(window).scrollTop() + window.innerHeight >
          $(document).height() - 5
        ) {
          sendTracks('#tudo-sobre-a-toro');
        }
      } else {
        if (scroll >= section.top && scroll <= sectionL) {
          if (current !== id) {
            current = id;
            sendTracks(current);
          }
        }
        return null;
      }
    } catch (error) {
      console.log('error:', error);
    }
  };

  useEffect(() => {
    if ($) {
      const next = '.swiper-button-next';
      const prev = '.swiper-button-prev';
      // $(`#services > ${next}`).click(e => {
      //   DataLayer.push(
      //     'ServicosConectados_ClicouNext',
      //     'proximo',
      //     document
      //       .querySelector('#services .swiper-slide-active h1')
      //       .innerText.replace(/\s/g, '-')
      //       .normalize('NFD')
      //       .replace(/[\u0300-\u036f]/g, '')
      //       .toLocaleLowerCase(),
      //   );
      // });
      // $(`#services > ${prev}`).click(e => {
      //   DataLayer.push(
      //     'ServicosConectados_ClicouPrev',
      //     'anterior',
      //     document
      //       .querySelector('#services .swiper-slide-active h1')
      //       .innerText.replace(/\s/g, '-')
      //       .normalize('NFD')
      //       .replace(/[\u0300-\u036f]/g, '')
      //       .toLocaleLowerCase(),
      //   );
      // });
      if ($('body').attr('class') === 'is-mobile') {
        $(`#versions > ${prev}`).click(e => {
          DataLayer.push(
            'Versions_ClicouNextOuPrev',
            'anterior',
            `${document
              .querySelector(
                `#versions .swiper-slide-active #carName`,
              )
              .innerText.replace(/\s/g, '-')
              .normalize('NFD')
              .replace(/[\u0300-\u036f]/g, '')
              .toLocaleLowerCase()}`,
          );
        });
        $(`#versions > ${next}`).click(e => {
          DataLayer.push(
            'Versions_ClicouNextOuPrev',
            'proximo',
            `${document
              .querySelector(
                `#versions .swiper-slide-active #carName`,
              )
              .innerText.replace(/\s/g, '-')
              .normalize('NFD')
              .replace(/[\u0300-\u036f]/g, '')
              .toLocaleLowerCase()}`,
          );
        });
      }
      // }
    }
    if ($('body').attr('class') === 'is-desktop') {
      $(window).scroll(e => {
        const scroll = $(window).scrollTop();
        trackScroll(scroll, '#toro-2022');
        trackScroll(scroll, '#versions');
        // trackScroll(scroll, '#services');
        
        // console.log('scroll:', scroll);
        
        trackScroll(scroll, '#tudo-sobre-a-toro');
      });
    }
    // eslint-disable-next-line
    if ($('body').attr('class') === 'is-mobile') {
      $(window).scroll(e => {
        const scroll = $(window).scrollTop();
        trackScroll(scroll, '#toro-2022');
        // trackScroll(scroll, '#services');
        trackScroll(scroll, '#versions');
        trackScroll(scroll, '#tudo-sobre-a-toro');
      });
    }
  }, [trackScroll]);

  return (
    <>
      <GlobalStyle />
      <Routes />
      <WarningBox />
    </>
  );
};

App.displayName = 'App';
App.propTypes = propTypes;
App.defaultProps = defaultProps;
export default React.memo(App);
