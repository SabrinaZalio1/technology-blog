import styled from 'styled-components';
import { theme } from '../../../styles/themes';

export const RelatedPostsContainer = styled.div`
   margin: 30px 0;
   width: 80%;
`;
export const RelatedPostsHeader = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   margin-bottom: 10px;
`;
export const RelatedPostListContainer = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
`;
export const Title = styled.h2`
   font-weight: 700;
   font-size: 35px;
   color: ${theme.colors.background};
`;
