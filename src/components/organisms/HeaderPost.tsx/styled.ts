import styled from "styled-components";
import { theme } from "../../../styles/themes";

export const HeaderPostContainer = styled.div`
  width: 90%;
  height: 150px;
  position: absolute;
  bottom: 100px;
  left: 50%;
  transform: translateX(-50%);
  padding: 20px;
`;

export const InfoContainer = styled.div`
    background-color: ${theme.colors.base};
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 20px;
    gap: 20px;
`;
export const CategoryContainer = styled.div`
  background-color: ${theme.colors.base};
  width: 50%;
  display: flex;
  justify-content: center;
  padding: 10px;
`;
export const Section = styled.div`

`;

export const Title = styled.h2`
  background-color: ${theme.colors.base};
  font-weight: 700;
  font-size: 21px;
  color: ${theme.colors.background};
`;

export const Detail = styled.span`
  font-size: 14px;
  color: ${theme.colors.gray};
`;