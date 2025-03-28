import styled, { createGlobalStyle } from 'styled-components';
import { theme } from './themes';

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
export const SkeletonLoader = styled.div`
   width: 100%;
   height: 100%;
   background-color: red;
   background-size: 400% 100%;
   animation: loading 1.5s infinite;

   @keyframes loading {
      0% {
         background-position: 100% 0;
      }
      100% {
         background-position: -100% 0;
      }
   }
`;

export const AppContainer = styled.div`
   background-color: ${theme.colors.background};
   width: 100%;
   padding: 0 40px;
   @media (max-width: ${theme.breakpoints.mobile}) {
      padding: 0 20px;
   }
`;
export default GlobalStyles;
