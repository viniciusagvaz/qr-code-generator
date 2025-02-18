import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
html,
body {
    padding: 0;
    margin: 0;
}

a {
    color: inherit;
    text-decoration: none;
}

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
  min-height: 100vh;
  }
  
  #root {
    max-width: 1280px;
  margin: 0 auto;
  text-align: center;
}

`;
