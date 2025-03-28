import { StyledButton } from './styled';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
   variant: 'primary' | 'secondary' | 'black' | 'green';
   text: string;
   onClick?: () => void;
   width?: string;
}

export const Button: React.FC<ButtonProps> = ({ variant, text, width, ...props }) => {
   return (
      <StyledButton variant={variant} width={width} {...props}>
         {text}
      </StyledButton>
   );
};
