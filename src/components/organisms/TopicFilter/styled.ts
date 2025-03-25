import styled from 'styled-components';
import { theme } from '../../../styles/themes';

export const Title = styled.h2`
   margin-right: 10px;
`;

export const TopicFilterContainer = styled.div`
   display: none;
   flex-wrap: wrap;
   gap: 10px;

   @media (min-width: ${theme.breakpoints.tablet}) {
      display: flex;
      flex: 1;
   }
`;
export const SliderContainer = styled.div`
   display: block;
   @media (min-width: ${theme.breakpoints.tablet}) {
      display: none;
   }
`;
export const TopicFilterSection = styled.div`
   margin: 20px 0;
   display: flex;
   align-items: baseline;
   width: 100%;
`;
