import ArrowRight from '../../../assets/icons/ArrowRight'
import { StyledLink } from './styled'

  interface BtnLinkProps {
    to: string;
    text: string;
    variant?: "dark" | "light";
      arrowColor?: string;
}

export default function BtnLink({ arrowColor,  to, text, variant = "dark"}: BtnLinkProps) {
  return (
    <>
      <StyledLink to={to} $variant={variant} >
        {text} <ArrowRight color={arrowColor} />
      </StyledLink>
    </>
  )
}
