import React from 'react';
import { ErrorText, InputContainer, Label, StyledInput } from './styled';

export type InputProps = {
   label?: string;
   type?: string;
   value: string;
   onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
   placeholder?: string;
   disabled?: boolean;
   error?: string;
};

export const Input: React.FC<InputProps> = ({
   label,
   type = 'text',
   value,
   onChange,
   placeholder,
   disabled,
   error,
}) => {
   const isActive = value.length > 0;

   return (
      <InputContainer>
         {label && <Label $isActive={isActive}>{label}</Label>}
         <StyledInput
            type={type}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            disabled={disabled}
            $error={!!error}
         />
         {error && <ErrorText>{error}</ErrorText>}
      </InputContainer>
   );
};
