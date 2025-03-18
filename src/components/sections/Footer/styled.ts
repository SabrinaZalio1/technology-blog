import styled from "styled-components";
import { theme } from "../../../styles/themes";

export const FooterContainer = styled.div`
	background-color: ${theme.colors.secondaryBackground};
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 200px;
    margin: 30px;
`;
export const Section = styled.div`
    display: flex;
   justify-content: space-between;
`;
export const Link = styled.a`
   font-size: 18px;
   font-weight: 600;
   color:${theme.colors.background};
`;
export const Detail = styled.span`
	color: ${theme.colors.base};
    font-size:14px;
`;

