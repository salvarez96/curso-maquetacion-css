import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    --main-green: #47cfac;
    --gray-bg: #e6e9ed;
    --dark-blue: #22272d;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

`;

export default GlobalStyle;