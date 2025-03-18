import React, { useState } from "react";
import styled from "styled-components";
import { theme } from "../../../styles/themes";

type InputProps = {
  label?: string;
  type?: string;
  value: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  disabled?: boolean;
  error?: string;
};

const InputContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 5px;
  border: 2px solid ${theme.colors.background};
  min-width: 200px;
  width: 60%;
`;

const Label = styled.label<{ $isActive: boolean }>`
  position: absolute;
  top: ${({ $isActive }) => ($isActive ? "5px" : "50%")};
  left: 10px;
  transform: translateY(${({ $isActive }) => ($isActive ? "0" : "-50%")});
  font-size: ${({ $isActive }) => ($isActive ? "12px" : "16px")};
  font-weight: 600;
  color: #666;
  transition: all 0.2s ease-in-out;
  pointer-events: none;
`;

const StyledInput = styled.input<{ $error?: boolean; $hasLabel?: boolean }>`
  padding: ${({ $hasLabel }) => ($hasLabel ? "20px 10px 5px" : "10px")};
  border: 1px solid ${({ $error }) => ($error ? "red" : "#ccc")};
  border-radius: 5px;
  outline: none;
  font-size: 16px;
  height: 56px;
 
  &:focus {
    border-color: ${({ $error }) => ($error ? "red" : "#007bff")};
  }
`;

const ErrorText = styled.span`
  color: red;
  font-size: 12px;
`;

const Input: React.FC<InputProps> = ({ label, type = "text", value, onChange, placeholder, disabled, error }) => {
  const isActive = value.length > 0;

  return (
    <InputContainer>
      {placeholder && <Label $isActive={isActive}>{placeholder}</Label>}
      <StyledInput 
        type={type} 
        value={value} 
        onChange={onChange} 
        placeholder={isActive ? "" : placeholder} 
        disabled={disabled} 
        $error={!!error} 
        $hasLabel={!!placeholder} 
      />
      {error && <ErrorText>{error}</ErrorText>}
    </InputContainer>
  );
};

export default Input;
