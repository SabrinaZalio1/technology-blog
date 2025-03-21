import styled from "styled-components";

export const Label = styled.label<{ $isActive: boolean }>`
  position: absolute;
  left: 13px;
  top: ${({ $isActive }) => ($isActive ? "4px" : "50%")};
  transform: translateY(${({ $isActive }) => ($isActive ? "0" : "-50%")});
  font-size: ${({ $isActive }) => ($isActive ? "10px" : "16px")};
  font-weight: 500;
  color: #666;
  transition: all 0.2s ease-in-out;
  pointer-events: none;
  background: white;
  padding: 0 5px;
`;

export const StyledInput = styled.input<{ $error?: boolean }>`
  padding: 12px 10px 8px;
  border: 2px solid ${({ $error }) => ($error ? "red" : "#000")};
  outline: none;
  font-size: 16px;
  width: 100%;

  &:focus ~ ${Label}, &:not(:placeholder-shown) ~ ${Label} {
    top: 5px;
    font-size: 12px;
    color: #007bff;
  }

  &:focus {
    border-color: ${({ $error }) => ($error ? "red" : "#007bff")};
  }
`;


export const ErrorText = styled.span`
  color: red;
  font-size: 12px;
`;
export const InputContainer = styled.div`
  width: 100%;
  position: relative;
`;