import styled from 'styled-components';
import { theme } from '../../../styles/themes';

export const PostDetailContainer = styled.div`
   background-color: ${theme.colors.base};
   display: flex;
   gap: 30px;
   padding: 30px;
   @media (max-width: ${theme.breakpoints.tablet}) {
      flex-direction: column-reverse;
   }
`;
export const SocialMediaContainer = styled.div`
   width: 35%;
   @media (max-width: ${theme.breakpoints.tablet}) {
      width: 100%;
   }
`;

export const MostViewPostsContainer = styled.div`
   width: 30%;
`;

export const PostBodyContainer = styled.div`
   width: 70%;
   @media (max-width: ${theme.breakpoints.tablet}) {
      width: 100%;
   }
`;

export const Title = styled.h3`
   font-weight: 700;
   font-size: 18px;
   color: ${theme.colors.background};
`;

export const Subtitle = styled.h4`
   font-weight: 700;
   font-size: 18px;
   color: ${theme.colors.background};
`;

export const StyledBody = styled.div`
   margin-top: 20px;
   line-height: 1.6;

   p {
      color: ${theme.colors.gray};
      margin-bottom: 16px;
      text-align: justify;
   }
`;
