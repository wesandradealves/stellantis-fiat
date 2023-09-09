import React from 'react';
import GlobalStyle from './styles/global';
import Routes from './routes';
import CalculadoraProvider from './context/CalculadoraContext';
import { scrollToSection_DataLayer } from './tracks';
import WarningBox from './components/WarningBox/WarningBox'

const App = ({ mobile, ...props }) => {
  window.addEventListener('scroll', e => {
    scrollToSection_DataLayer(
      '#novo-fiat-500e',
      '#cta-container',
    );
    scrollToSection_DataLayer('#compre-o-seu', '#cta-container');
    scrollToSection_DataLayer(
      '#recursos-eletricos',
      '#cta-container',
    );
    scrollToSection_DataLayer(
      '#calculadora-header',
      '#cta-container',
    );
    scrollToSection_DataLayer('#fotos', '#cta-container');
    scrollToSection_DataLayer(
      '#tudo-sobre-o-fiat-500e',
      '#cta-container',
    );
  });
  return (
    <>
      <WarningBox />
      <GlobalStyle />
      <CalculadoraProvider>
        <Routes />
      </CalculadoraProvider>
      {/* SVG USADO NA CALCULADORA */}
      <svg>
        <linearGradient
          id="linear"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="0%"
        >
          <stop offset="0%" stop-color="#00EBFF" />
          <stop offset="100%" stop-color="#7C09DE" />
        </linearGradient>
      </svg>
    </>
  );
};

App.displayName = 'App';
export default React.memo(App);
