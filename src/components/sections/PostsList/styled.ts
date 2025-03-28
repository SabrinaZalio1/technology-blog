import styled from 'styled-components';

export const StyledNewsGrid = styled.div<{ variant: 'default' | 'reversed' }>`
   width: 100%;
   display: grid;
   gap: 20px;
   grid-template-columns: 1fr 1fr;
   grid-template-rows: 1fr 1fr;
   height: 90vh;

   ${({ variant }) =>
      variant === 'default' &&
      `
    grid-template-areas: 
      "post1 post2"
      "post1 post3";
  `}

  ${({ variant }) =>
      variant === 'reversed' &&
      `
    grid-template-areas: 
      "post2 post1"
      "post3 post1";
  `}

  & > :nth-child(1) {
      grid-area: post1;
      height: 100%;
   }

   & > :nth-child(2) {
      grid-area: post2;
      height: 100%;
   }

   & > :nth-child(3) {
      grid-area: post3;
      height: 100%;
   }

   @media (max-width: 768px) {
      width: 100%;
      grid-template-columns: 1fr;
      height: unset;
      grid-template-rows: auto;
      grid-template-areas:
         'post1'
         'post2'
         'post3';

      & > :nth-child(1) {
         height: 300px;
      }

      & > :nth-child(2) {
         height: 300px;
      }

      & > :nth-child(3) {
         height: 300px;
      }
   }
`;
