import styled from "styled-components";
import { theme } from "../../../styles/themes";

const mobile = "768px";

export const InfoBannerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 30px;
  background-color: ${theme.colors.secondaryBackground};
  margin: 30px 0;
  /* max-height: 120px; */

  @media (max-width: ${mobile}) {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 30px;
  }
  @media (min-width: ${mobile}) {
   height: 120px;
  }
`;

export const Title = styled.h2`
  color: ${theme.colors.base};
  font-size: 27px;
  font-weight: 400;
`;