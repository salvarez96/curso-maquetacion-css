import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    --main-green: #47cfac;
    --gray-bg: #e6e9ed;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

`;

export default GlobalStyle;