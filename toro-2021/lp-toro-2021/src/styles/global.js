import { createGlobalStyle } from 'styled-components';
import './fonts/fonts.css';

import Colors from './colors';

const GlobalStyle = createGlobalStyle`
  * {
    border: 0;
    box-sizing: border-box;
    font-family: 'FuturaPT Light';
    margin: 0;
    outline: none !important;
    padding: 0;
    scroll-behavior: smooth;
  }

  body,
  html {
    background-color: ${Colors.blue};
    color: ${Colors.grey};
    font-size: 16px;
    overflow-x: hidden;
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  .carousel .slide.selected {
    z-index: 1 !important;
  }

  textarea {
    resize: none;
  }

  button, a {
    cursor: pointer;
    background: none;
  }
`;

export default GlobalStyle;
