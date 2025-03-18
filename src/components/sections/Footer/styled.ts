import styled from "styled-components";
import { theme } from "../../../styles/themes";


const mobile = "768px";

export const FooterContainer = styled.div`
	background-color: ${theme.colors.secondaryBackground};
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    gap: 40px;
    height: 200px;
   
`;
export const Section = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 85%;

    @media (max-width: ${mobile}) {
        flex-direction: column;
        gap: 20px;
    }
`;
export const DetailContainer = styled.div`

    @media (min-width: ${mobile}) {
        width: 85%;
    }
`;
export const Link = styled.a`
   font-size: 18px;
   font-weight: 600;
   color:${theme.colors.background};
`;
export const Detail = styled.p`
	color: ${theme.colors.base};
    font-size:14px;

    @media (max-width: ${mobile}) {
        max-width: 152px;
    }
`;

