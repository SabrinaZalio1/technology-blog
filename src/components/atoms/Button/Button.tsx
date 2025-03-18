import { StyledButton } from "./styled";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: "primary" | "secondary" | "black" | "green";
  text:string
}

export const Button: React.FC<ButtonProps> = ({ variant, text, ...props }) => {
  return (
    <StyledButton variant={variant} {...props}>
      {text}
    </StyledButton>
  );
};