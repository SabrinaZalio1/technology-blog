import { createGlobalStyle } from "styled-components";
import { theme } from "./themes";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
    font-family: "Space Grotesk", sans-serif;
  }

  body {
    font-family: Arial, sans-serif;
    background-color: ${theme.colors.background};
    color: ${(props) => props.theme.colors.base};
    font-size: 16px;
  }
`;

export default GlobalStyles;
