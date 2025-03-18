import styled from "styled-components";

export const InputContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const Label = styled.label<{ $isActive: boolean }>`
  position: absolute;
  top: ${({ $isActive }) => ($isActive ? "5px" : "50%")};
  left: 10px;
  transform: translateY(${({ $isActive }) => ($isActive ? "0" : "-50%")});
  font-size: ${({ $isActive }) => ($isActive ? "12px" : "16px")};
  font-weight: 600;
  color: #666;
  transition: all 0.2s ease-in-out;
  pointer-events: none;
  background: white;
  padding: 0 5px;
`;

export const StyledInput = styled.input<{ $error?: boolean }>`
  padding: 10px;
  border: 1px solid ${({ $error }) => ($error ? "red" : "#ccc")};
  border-radius: 5px;
  outline: none;
  font-size: 16px;
  width: 100%;

  &:focus {
    border-color: ${({ $error }) => ($error ? "red" : "#007bff")};
  }
`;

export const ErrorText = styled.span`
  color: red;
  font-size: 12px;
`;