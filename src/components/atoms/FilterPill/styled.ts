import styled from "styled-components";
import { theme } from "../../../styles/themes";

export const PillContainer = styled.div<{ selected: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 56px;
  border: 1px solid ${({ selected }) => (selected ? theme.colors.tertiary : "#8C8C8C")};
  background-color: ${({ selected }) => (selected ?  theme.colors.tertiary : "transparent")};
  color: ${({ selected }) => (selected ?  theme.colors.background : "#8C8C8C")};
  padding: 15px;
  width: fit-content;
  min-height: 35px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
`;