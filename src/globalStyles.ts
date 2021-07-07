import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    background: #d4ebfc;
    color: #222;

    font-weight: 400;
    font-family: 'Roboto', sans-serif;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-family: 'Poppins';
  }
`;
