import styled from 'styled-components';
import { theme } from '../../styles/themes';

export const BlogContainer = styled.div`
   display: flex;
   gap: 25px;
`;
export const PostsContainer = styled.div`
   display: flex;
   flex-direction: column;
   gap: 20px;
   width: 75%;
   margin: 20px 0;
   @media (max-width: ${theme.breakpoints.tablet}) {
      width: 100%;
   }
`;
