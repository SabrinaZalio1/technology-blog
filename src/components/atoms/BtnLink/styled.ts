import styled from "styled-components";
import { theme } from "../../../styles/themes";

export const NewPostLink = styled.a<{ textColor: string }>`
	/* color: ${theme.colors.base}; */
    color: ${({ textColor }) => textColor};
    cursor: pointer;
`;