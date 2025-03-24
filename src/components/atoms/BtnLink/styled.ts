import styled from "styled-components";
import { theme } from "../../../styles/themes";
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)<{ $variant: "dark" | "light" }>`
    color: ${({ $variant }) => ($variant === "dark" ? theme.colors.base : theme.colors.background)};
    text-decoration: none;
        cursor: pointer;
`;
