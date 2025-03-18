import React from "react";
import { ErrorText, InputContainer, Label, StyledInput } from "./styled";

export type InputProps = {
    label?: string;
    type?: string;
    value: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    disabled?: boolean;
    error?: string;
  };

const Input: React.FC<InputProps> = ({ label, type = "text", value, onChange, placeholder, disabled, error }) => {
  const isActive = value.length > 0;

  return (
    <InputContainer>
      {placeholder && <Label $isActive={isActive}>{placeholder}</Label>}
      <StyledInput
        type={type} 
        value={value} 
        onChange={onChange} 
        placeholder={!isActive ? placeholder : ""} 
        disabled={disabled} 
        $error={!!error} 
      />
      {error && <ErrorText>{error}</ErrorText>}
    </InputContainer>
  );
};

export default Input;
