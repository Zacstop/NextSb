import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%; // 1rem to equal 10px
  }

  html,
  body {
    height: 100%;
    background-color: #333;
    color: #ccc;
  }
`;
