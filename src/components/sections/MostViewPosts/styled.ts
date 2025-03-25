import styled from 'styled-components';
import { theme } from '../../../styles/themes';

export const Title = styled.h3`
   color: ${theme.colors.gray200};
   font-size: 18px;
   font-weight: 600;
`;
export const MostViewPostsContainer = styled.div`
   display: flex;
   flex-direction: column;
   gap: 10px;
   /* max-width: 380px; */
`;
export const MostViewPostsSection = styled.div`
   width: 25%;
   @media (max-width: ${theme.breakpoints.tablet}) {
      display: none;
   }
`;
