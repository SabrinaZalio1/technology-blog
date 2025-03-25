import styled from 'styled-components';
import { theme } from '../../../styles/themes';

export const HeaderPostContainer = styled.div`
   width: 90%;
   position: absolute;
   bottom: 20px;
   left: 50%;
   transform: translateX(-50%);
   padding: 20px;
`;

export const InfoContainer = styled.div<{ $variant: 'dark' | 'light' }>`
   background-color: ${theme.colors.base};
   background-color: ${({ $variant }) =>
      $variant === 'dark' ? theme.colors.background : theme.colors.base};
   display: flex;
   flex-direction: column;
   justify-content: center;
   padding: 20px;
   gap: 20px;
   max-width: ${({ $variant }) => $variant === 'dark' && '550px'};
   /* max-height: 160px; */
`;
export const CategoryContainer = styled.div<{ $variant: 'dark' | 'light' }>`
   background-color: ${({ $variant }) =>
      $variant === 'dark' ? theme.colors.background : theme.colors.base};
   width: 60%;
   max-width: 282px;
   display: flex;
   justify-content: center;
   padding: 20px 10px;
   margin-bottom: -1px;
`;
export const Section = styled.div`
   display: flex;
   justify-content: space-between;
`;

export const Title = styled.h2<{ $variant: 'dark' | 'light' }>`
   background-color: ${({ $variant }) =>
      $variant === 'dark' ? theme.colors.background : theme.colors.base};
   font-weight: 700;
   font-size: ${({ $variant }) => ($variant === 'dark' ? '41px' : '21px;')};
   color: ${({ $variant }) =>
      $variant === 'dark' ? theme.colors.base : 'black'};

   @media (max-width: 768px) {
      font-size: ${({ $variant }) => ($variant === 'dark' ? '18px' : '21px;')};
   }
`;

export const Detail = styled.span`
   font-size: 14px;
   color: ${theme.colors.gray};
`;

export const Link = styled.a<{ $variant: 'dark' | 'light' }>`
   font-weight: 600;
   color: ${({ $variant }) =>
      $variant === 'dark' ? theme.colors.base : 'black'};
   cursor: pointer;
`;
