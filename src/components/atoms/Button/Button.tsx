import { StyledButton } from "./styled";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: "primary" | "secondary" | "black" | "green";
  text:string;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({ variant, text, ...props }) => {
  return (
    <StyledButton variant={variant} {...props}>
      {text}
    </StyledButton>
  );
};