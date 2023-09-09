  import { createGlobalStyle } from 'styled-components';
import './fonts/fonts.css';
import * as images from '../assets';
import Colors from './colors';

const GlobalStyle = createGlobalStyle`
  * {
    border: 0;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
   
  }

  #root {
    overflow-y: hidden;
  }
//
  body,
  html {
    background-color: ${Colors.black200};
    color: ${Colors.grey};
    font-size: 16px;
    scroll-behavior: smooth;
    overflow-x: hidden;

  // Class to set display none in some element using JS:
  .disable {
    display: none;
  }

  input {
    border: none;
    outline: none;
    background: none;
  }

    // CLASSES "PAC..." são responaveis para estilizar o auto-complete google API
    .pac-container {
      background-color: ${Colors.beige100};
      padding: 15px;
      margin-top: 5px;
      border-radius: 5px;
      box-shadow: none;
      border: 0;
      z-index: 1000;

    }

    .pac-logo:after {
    content: "";
    background-image: none;
}

    .pac-icon {
      background-image: url(${images.CalculadoraImages.DestinyIcon});
      background-size: 12px;
      background-repeat: no-repeat;
      background-position: center;
    }

    .pac-matched {
      font-size: 16px;
      color: ${Colors.blue100};
      font-family: 'FuturaPT Book', sans-serif;
    }

    
    .pac-item {
      border-bottom: 1px solid rgba(31, 193, 213, 0.3);
    }

    .pac-item-query {
      font-size: 14px;
      color: ${Colors.blue300};
      font-family: 'FuturaPT Book', sans-serif;
      padding-top: 10px;
      
    }
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  textarea {
    resize: none;
  }

  button, a {
    cursor: pointer;
  }

  #root {
    overflow-y: hidden;
  }
`;

export default GlobalStyle;
