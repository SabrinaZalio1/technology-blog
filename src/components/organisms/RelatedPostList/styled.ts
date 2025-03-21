import styled from "styled-components";
import { theme } from "../../../styles/themes";

export const RelatedPostListContainer = styled.div`
 width: 80%;
 /* display: flex; */
 gap: 30px;
 height: 350px;
 justify-content: center;
 display: none;
   @media (min-width: ${theme.breakpoints.tablet}) {
     display: flex;
   } 
`;
export const Container = styled.div`
border: 1px solid red;
`;
export const Title = styled.h1`
color: black;
`;
