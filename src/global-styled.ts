import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
:root{
--maxWidth:1280px;
--white:#fff
}
html, body {
    margin: 0;
    padding: 0;
    font-family: 'Lato', sans-serif;
  }
  *, *::after, *::before {
    box-sizing: border-box;
  }
body{
  background:#f6f8fb;
  margin:0;
  padding:0;
  box-sizing: border-box;
  list-style-type: none;
  text-decoration: none;
  width: 100%;
  height: 100vh;
  text-rendering: optimizeLegibility;
  font-family:Lato;
  font-weight:bold;
  font-style:normal;
}
`;
