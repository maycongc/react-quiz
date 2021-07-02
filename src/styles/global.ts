import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    background: #333;
    color: #fff;

    font: 400 62.5% 'Roboto', sans-serif;
  }
`;
