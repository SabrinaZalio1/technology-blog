import Box from '@mui/material/Box';
import styled from 'styled-components';
import { theme } from '../../../styles/themes';

export const Title = styled.h2`
   color: ${theme.colors.gray300};
   font-size: 35px;
   font-weight: 500;
`;

export const Subtitle = styled.h3`
   color: ${theme.colors.gray};
   font-size: 18px;
   font-weight: 400;
`;
export const CrossContainer = styled.div`
   position: absolute;
   top: 10px;
   right: 10px;
   cursor: pointer;
`;
export const Section = styled.div`
   display: flex;
   gap: 10px;
   flex-direction: column;
   width: 80%;
`;
export const Container = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   gap: 20px;
`;
export const ButtonContainer = styled.div`
   width: 132px;
`;
export const Btn = styled.div`
   width: 100%;
   @media (min-width: ${theme.breakpoints.mobile}) {
      max-width: 152px;
   }
`;

export const StyledModalBox = styled(Box)`
   position: absolute;
   top: 50%;
   left: 50%;
   transform: translate(-50%, -50%);
   background-color: #d8f34e;
   box-shadow: 10px 12px 5px 0px rgba(0,0,0,1);
   -webkit-box-shadow: 10px 12px 5px 0px rgba(0,0,0,1);
   -moz-box-shadow: 10px 12px 5px 0px rgba(0,0,0,1);
   padding: 16px;
   display: flex;
   align-items: center;
   justify-content: center;
   flex-direction: column;
   text-align: center;
   max-width: 600px;
   width: 80%;
   height: 80%;

   @media (min-width: ${theme.breakpoints.mobile}) {
      height: 80vh;
      width: 70%;
   }
`;
