import styled from "styled-components";
import { theme } from "../../../styles/themes";

export const CardCotainer = styled.div`
 display: flex;
 padding: 10px;
 gap: 20px;
 border-bottom: 1px solid ${theme.colors.gray};
`;

export const Title = styled.p`
 color:${theme.colors.gray200};
 width: 220px;
`;

