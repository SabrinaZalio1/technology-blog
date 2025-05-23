import styled from 'styled-components';
import { theme } from '../../../styles/themes';

export const CardContainer = styled.div`
   display: flex;
   padding: 10px 0;
   gap: 20px;
   border-bottom: 1px solid ${theme.colors.gray};
   justify-content: space-between;
`;
export const CardSection = styled.div`
   position: relative;
`;

export const Title = styled.p`
   color: ${theme.colors.gray200};
   width: 220px;
`;

export const ImageWrapper = styled.div`
   position: relative;
   width: 80px;
   height: 80px;
`;

export const Image = styled.img<{ $isLoading: boolean }>`
   width: 100%;
   height: 100%;
   object-fit: cover;
   opacity: ${({ $isLoading }) => ($isLoading ? 0 : 1)};
   transition: opacity 0.3s ease-in-out;
`;

export const LoaderContainer = styled.div`
   position: absolute;
   top: 50%;
   left: 50%;
   transform: translate(-50%, -50%);
`;
