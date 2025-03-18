import styled from "styled-components";
import { theme } from "../../../styles/themes";

const mobile = "768px";

export const BannerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: ${theme.colors.secondaryBackground};

  @media (max-width: ${mobile}) {
    flex-direction: column;
    gap: 20px;
    padding: 20px 10px;
  }
`;


export const Title = styled.h2`
  color: ${theme.colors.base};
  font-size: 27px;
`;