import styled from "styled-components";
import { theme } from "../../../styles/themes";

export const SliderContainer = styled.div`
display: block;
  @media (min-width: ${theme.breakpoints.tablet}) {
    display: none;
  } 
`;