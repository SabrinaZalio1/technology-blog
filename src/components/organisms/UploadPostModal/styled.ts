import Box from '@mui/material/Box';
import styled from "styled-components";
import { theme } from "../../../styles/themes";

export const Title = styled.h2`
  color: ${theme.colors.gray300};
  font-size: 35px;
  font-weight: 500;
`;

export const Subtitle = styled.h3`
  color: ${theme.colors.gray};
  font-size: 18px;
  font-weight: 400;
`;


export const StyledModalBox = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #D8F34E;
  border: 2px solid #000;
  box-shadow: 24px 24px 24px rgba(0, 0, 0, 0.1);
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  max-width: 600px;
  height: 80vh;
  width: 70%;
`;