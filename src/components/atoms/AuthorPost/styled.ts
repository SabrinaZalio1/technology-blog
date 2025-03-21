import styled from "styled-components";
import { theme } from "../../../styles/themes";

export const AuthorPostContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;
export const AuthorImg = styled.div`
  background-image: url('/assets/defaultImg.jpg');
  width: 40px;
  height: 40px;
  background-size: cover;
  background-position: center;
  border-radius: 50%;

`;
export const AuthorName = styled.h3`
  font-size: 20px;
  color: ${theme.colors.gray};
`;