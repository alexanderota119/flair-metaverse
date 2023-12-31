import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
  }

  h1, h2, h3, h4, h5, h6 {
    padding: 0;
    margin: 0;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
  }

  ul,
  ol {
    padding: 0;
    margin: 0;
    list-style-type: none;
  }

  p, span {
    padding: 0;
    margin: 0;
  }

  figure {
    padding: 0;
    margin: 0;
  }

  #root {
    overflow: hidden;
  }
`;

export default GlobalStyle;
