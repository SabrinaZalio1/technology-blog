import styled from "styled-components";
import { theme } from "../../../styles/themes";

export const Link = styled.a`
   font-size: 18px;
   font-weight: 600;
   color:${theme.colors.background};
`;

export const ContainerLink = styled.div`
    transition: all .2s ease;
        &:hover { 
        transform: scale(1.1);
   }
`;

export const SocialLinksContainer = styled.div`
    display: flex;
    gap:20px;
`;
