import styled from 'styled-components';
import { theme } from '../../../styles/themes';

export const PillContainer = styled.div<{
   selected: boolean;
   variant: 'functional' | 'informative';
}>`
   display: flex;
   justify-content: center;
   align-items: center;
   border-radius: 56px;
   white-space: nowrap;
   border: 1px solid
      ${({ selected, variant }) =>
         variant === 'informative'
            ? '#8C8C8C'
            : selected
              ? theme.colors.tertiary
              : '#8C8C8C'};
   background-color: ${({ selected, variant }) =>
      variant === 'informative'
         ? 'transparent'
         : selected
           ? theme.colors.tertiary
           : 'transparent'};
   color: ${({ selected, variant }) =>
      variant === 'informative'
         ? '#8C8C8C'
         : selected
           ? theme.colors.background
           : '#8C8C8C'};
   padding: 10px 12px;
   width: 80%;
   min-height: 30px;
   cursor: ${({ variant }) =>
      variant === 'informative' ? 'default' : 'pointer'};
   transition: all 0.3s ease-in-out;
   font-size: 16px;
   max-width: 220px;

   @media (max-width: ${theme.breakpoints.mobile}) {
      font-size: 14px;
   }
`;
