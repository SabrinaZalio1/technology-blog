import styled from "styled-components";
import { theme } from "../../../styles/themes";

export const Title = styled.h2`
	font-size: 18px;
    margin-bottom: 20px;
@media (max-width: ${theme.breakpoints.mobile}) {
       display: none;
      }
`;

export const BannerContainer = styled.div`
@media (min-width: ${theme.breakpoints.tablet}) {
    height: 64vh;
    margin-bottom: 80px;
}
`;